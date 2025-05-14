/**
 * Плагин для создания кастомных контейнеров в markdown
 * @module markdown-it-custom-container
 */
import type { PluginWithOptions } from 'markdown-it'
import type { RenderRule } from 'markdown-it/lib/renderer.mjs'
import container from 'markdown-it-container'
import { cyan, dim, green } from 'colorette'

/**
 * Конфигурация отдельного контейнера
 * @interface
 * @property {string} type - Уникальный идентификатор контейнера
 * @property {string} [defaultTitle] - Заголовок по умолчанию
 * @property {boolean} [renderTitle=true] - Рендерить ли заголовок
 * @property {string} [customClass] - Дополнительные CSS классы
 * @property {boolean} [isDetails] - Использовать тег <details> вместо <div>
 */
interface ContainerConfig {
  type: string
  defaultTitle?: string
  renderTitle?: boolean
  customClass?: string
  isDetails?: boolean
}

/**
 * Настройки плагина
 * @interface
 * @property {ContainerConfig[]} [containers] - Список конфигураций контейнеров
 * @property {boolean} [debug=false] - Включение режима отладки
 */
interface PluginOptions {
  containers?: ContainerConfig[]
  debug?: boolean
}

// Жирный вывод для того чтобы было похоже на логер VP, хз почему этого нет в colorette
const bold = (text: string) => `\x1b[1m${text}\x1b[22m`

/**
 * Создает и возвращает плагин для markdown-it
 * @param {import('markdown-it')} md - Экземпляр markdown-it
 * @param {PluginOptions} [options={}] - Настройки плагина
 * @returns {PluginWithOptions} Сконфигурированный плагин
 */
export default function createContainerPlugin(md: any, options: PluginOptions = {}): PluginWithOptions {
  const { containers = [], debug = false } = options
  const allowedTypes = new Set(containers.map((c) => c.type))

  /**
   * Логирует отладочную информацию с временной меткой
   * @param {'success'|'info'} type - Тип сообщения
   * @param {string} message - Текст сообщения
   * @param {any} [data] - Дополнительные данные
   */
  const debugLog = (type: 'success' | 'info', message: string, data?: any) => {
    if (!debug) return

    // Форматируем текущее время
    const now = new Date()
    const timestamp = dim(
      [
        now.getHours().toString().padStart(2, '0'),
        now.getMinutes().toString().padStart(2, '0'),
        now.getSeconds().toString().padStart(2, '0')
      ].join(':')
    )

    const prefix = `${timestamp} ${bold(cyan('[@ampernic/vitepress-custom-containers]'))}`
    const color = type === 'success' ? green : cyan

    console.log(`${prefix} ${color(message)}`)
    if (data) console.log(dim(JSON.stringify(data, null, 2)))
  }

  /**
   * Функция рендеринга контейнеров
   * @type {RenderRule}
   */
  const renderContainer: RenderRule = (tokens, idx) => {
    const token = tokens[idx]

    // Игнорируем токены, не относящиеся к контейнерам
    if (!token?.type?.startsWith('container_')) return ''

    const containerType = token.type.replace(/^container_|_(open|close)$/g, '')

    // Пропускаем неразрешенные типы контейнеров
    if (!allowedTypes.has(containerType)) return ''

    const config = containers.find((c) => c.type === containerType)!

    // Обработка закрывающего тега
    if (token.nesting === -1) {
      debugLog('info', `Закрытие: ${containerType}`)
      return config.isDetails ? '</details>\n' : '</div>\n'
    }

    debugLog('info', `Рендеринг: ${containerType}`, { info: token.info })

    // Подготовка данных для рендеринга
    const titleText = token.info.trim().slice(config.type.length).trim() || config.defaultTitle
    const attrs = md.renderer.renderAttrs(token)
    const cssClass = config.customClass || `${config.type} custom-block`

    // Рендеринг заголовка (если требуется)
    const title = config.renderTitle !== false && titleText ? md.renderInline(titleText) : undefined

    // Генерация HTML
    const html = config.isDetails
      ? `<details class="${cssClass}"${attrs}><summary>${title || 'Подробности'}</summary>\n`
      : `<div class="${cssClass}"${attrs}>${title ? `<p class="custom-block-title">${title}</p>` : ''}\n`

    debugLog('success', `Успешно: ${containerType}`)
    return html
  }

  // Регистрация всех объявленных контейнеров
  containers.forEach((config) => {
    md.use(container, config.type, {
      render: renderContainer,
      validate: (params: string) => {
        const trimmed = params.trim()
        return trimmed === config.type || trimmed.startsWith(`${config.type} `)
      }
    })
    debugLog('success', `Зарегистрирован контейнер: ${config.type}`)
  })

  debugLog('info', `Инициализировано контейнеров: ${containers.length}`)
  return md
}
