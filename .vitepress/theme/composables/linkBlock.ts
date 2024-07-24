export default function (md) {
  md.core.ruler.after('inline', 'link_block', (state) => {
    state.tokens.forEach((token, index, tokens) => {
      if (
        token.level === 1 &&
        token.type === 'inline' &&
        token.children.length > 2 &&
        token.children.at(0)?.type === 'link_open' &&
        token.children.at(-1)?.type === 'link_close'
      ) {
        token.children[0].tag = 'AGWLinkBlock'
        token.children[token.children.length - 1].tag = 'AGWLinkBlock'
      }
    })
  })
}
