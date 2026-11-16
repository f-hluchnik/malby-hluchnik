<script setup>
import { computed, nextTick, ref } from 'vue'

const props = defineProps({
  tabs: { type: Array, required: true }
})

const active = defineModel({ type: String, required: true })
const buttons = ref([])

const activeIndex = computed(() => Math.max(0, props.tabs.findIndex((tab) => tab.id === active.value)))

const barStyle = computed(() => ({
  width: `${100 / props.tabs.length}%`,
  transform: `translateX(${activeIndex.value * 100}%)`,
  backgroundColor: props.tabs[activeIndex.value]?.color
}))

// Arrow-key navigation, as recommended for ARIA tablists.
async function onKeydown(event) {
  const last = props.tabs.length - 1
  const moves = {
    ArrowRight: activeIndex.value === last ? 0 : activeIndex.value + 1,
    ArrowLeft: activeIndex.value === 0 ? last : activeIndex.value - 1,
    Home: 0,
    End: last
  }
  if (!(event.key in moves)) return
  event.preventDefault()
  const index = moves[event.key]
  active.value = props.tabs[index].id
  await nextTick()
  buttons.value[index]?.focus()
}
</script>

<template>
  <nav
    class="tab-nav"
    aria-label="Hlavní nabídka"
  >
    <div
      class="tab-nav__list"
      role="tablist"
      @keydown="onKeydown"
    >
      <button
        v-for="tab in tabs"
        :id="`tab-${tab.id}`"
        :key="tab.id"
        ref="buttons"
        type="button"
        role="tab"
        class="tab-nav__tab"
        :class="{ 'is-active': tab.id === active }"
        :aria-selected="tab.id === active"
        :aria-controls="`panel-${tab.id}`"
        :tabindex="tab.id === active ? 0 : -1"
        @click="active = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <div
      class="tab-nav__track"
      aria-hidden="true"
    >
      <div
        class="tab-nav__bar"
        :style="barStyle"
      />
    </div>
  </nav>
</template>

<style scoped>
.tab-nav {
  max-width: 700px;
  margin: 10px auto;
  font-family: Arial, sans-serif;
}

.tab-nav__list {
  display: flex;
}

.tab-nav__tab {
  flex: 1 1 0;
  padding: 10px;
  border: 0;
  background: none;
  font: inherit;
  color: #333;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity 500ms ease-in-out, color 500ms ease-in-out;
}

.tab-nav__tab:hover {
  color: #666;
}

.tab-nav__tab.is-active {
  opacity: 1;
}

.tab-nav__tab:focus-visible {
  outline: 2px solid #333;
  outline-offset: -2px;
  opacity: 1;
}

.tab-nav__track {
  height: 5px;
  margin-top: 10px;
  border-radius: 5px;
  background: #ccc;
}

.tab-nav__bar {
  height: 100%;
  border-radius: 5px;
  transition: transform 500ms ease-in-out, background-color 500ms ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .tab-nav__tab,
  .tab-nav__bar {
    transition: none;
  }
}

@media (max-width: 768px) {
  .tab-nav {
    margin-top: -30px;
  }
}
</style>
