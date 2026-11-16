import backgroundDefault from '@/assets/images/background_default.jpg'
import backgroundWallpaper from '@/assets/images/background_wallpaper.jpg'
import backgroundDeco from '@/assets/images/background_deco.jpg'

export const contact = {
  intro: 'Provádíme veškeré malířské a natěračské práce se specializací na tapety a dekorační techniky.',
  phone: '739 027 974',
  email: 'eda.hluchnik@seznam.cz'
}

export const footer = {
  author: 'František Hluchník',
  year: 2023,
  email: 'frantahluchnik@gmail.com'
}

/**
 * Tabs shown in the main navigation.
 * `id` is also used as the URL hash, so every tab can be linked directly (e.g. #tapety).
 */
export const tabs = [
  {
    id: 'kontakt',
    label: 'kontakt',
    color: '#b60505',
    background: backgroundDefault,
    blurred: true,
    view: 'contact'
  },
  {
    id: 'malby-natery',
    label: 'malby-nátěry',
    color: '#e3c710',
    background: backgroundDefault,
    blurred: false
  },
  {
    id: 'tapety',
    label: 'tapety',
    color: '#1b781b',
    background: backgroundWallpaper,
    blurred: true,
    photo: { src: backgroundWallpaper, alt: 'Obývací pokoj s tapetovanou stěnou' }
  },
  {
    id: 'dekoracni-techniky',
    label: 'dekorační techniky',
    color: '#0d0d9f',
    background: backgroundDeco,
    blurred: true,
    photo: { src: backgroundDeco, alt: 'Stěna s dekorační technikou' }
  }
]
