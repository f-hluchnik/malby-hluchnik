import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

/**
 * Keeps the active tab in sync with the URL hash (e.g. #tapety),
 * so tabs can be linked and the browser back button works.
 * Hash-based routing needs no server config, which suits GitHub Pages.
 */
export function useHashTab(ids, fallback = ids[0]) {
  const fromHash = () => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    return ids.includes(id) ? id : fallback
  }

  const active = ref(fromHash())

  const onHashChange = () => {
    active.value = fromHash()
  }

  watch(active, (id) => {
    if (fromHash() === id && window.location.hash) return
    if (id === fallback && !window.location.hash) return
    window.location.hash = id
  })

  onMounted(() => window.addEventListener('hashchange', onHashChange))
  onBeforeUnmount(() => window.removeEventListener('hashchange', onHashChange))

  return active
}
