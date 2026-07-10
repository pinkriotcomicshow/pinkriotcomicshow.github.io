import { defineThemeConfig } from '@utils/defineThemeConfig'
//import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'The Pink Riot Comic Show',
  id: 'pink-riot-static-site',
  seo: {
    title: 'The Pink Riot Comic Show',
    description: 'The Pink Riot Comic Show is a live talk show and podcast that discusses all things nerd with a Black feminist perspective in comic books, novels, TV, and film.',
    //image: previewImage,
  },
  logo: logoImage,
  colors: {
    primary: '#1afdfc',
    secondary: '#fefe05',
    neutral: '#f0347f',
    outline: '#cbcbcb',
  },
  navigation: {
    darkmode: true,
    items: [
      {
              type: 'link',
              label: 'Home',
              href: '/',
            },
      {
              type: 'link',
              label: 'About',
              href: '/about',
            },
      {
              type: 'link',
              label: 'Contact',
              href: '/contact',
            }
    ],
  },
  socials: [],
})
