import type MarkdownIt from 'markdown-it'

export default function markdownItFancybox(md: MarkdownIt): void {
  const defaultImageRender = md.renderer.rules.image

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    tokens[idx].attrSet('data-fancybox', '')
    return defaultImageRender(tokens, idx, options, env, self)
  }
}
