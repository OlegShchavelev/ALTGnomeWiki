// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useRoute } from 'vitepress';
import Theme from 'vitepress/theme'
import imageViewer from 'vitepress-plugin-image-viewer';

import './style.css'
import './custom.css'
import 'viewerjs/dist/viewer.min.css';

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
  
  },
  setup() {
    // Get route
    const route = useRoute();
    // Using
    imageViewer(route);
  }
}