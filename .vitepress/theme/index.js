// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useRoute } from 'vitepress';
import Theme from 'vitepress/theme'
import imageViewer from 'vitepress-plugin-image-viewer';
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities'

import './style.css'
import './custom.css'
import 'viewerjs/dist/viewer.min.css';
import '@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
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