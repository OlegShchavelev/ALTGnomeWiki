**Установка с помощью Центра приложений**

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

:::info
Для установки **{{ $frontmatter.title }}** из репозитория Сизиф в операционной системе **ALT Regular GNOME** перейдите по ссылке <a v-bind:href="'appstream://' + frontmatter.appstreamRepo">{{ $frontmatter.title }}</a> и подтвердите в браузере операцию «открыть приложение»
В рабочем окружении GNOME откроется Центр Приложений, выберите источник **Sisyphus**, и нажмите кнопку «скачать». 
::: 