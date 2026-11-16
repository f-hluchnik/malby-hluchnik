<script setup>
import { computed } from 'vue'
import SiteHeader from '@/components/SiteHeader.vue'
import TabNav from '@/components/TabNav.vue'
import HeroPanel from '@/components/HeroPanel.vue'
import ContactCard from '@/components/ContactCard.vue'
import PhotoCard from '@/components/PhotoCard.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { useHashTab } from '@/composables/useHashTab'
import { contact, footer, tabs } from '@/data/site'

const activeId = useHashTab(tabs.map((tab) => tab.id))
const activeTab = computed(() => tabs.find((tab) => tab.id === activeId.value))
</script>

<template>
  <div class="page">
    <SiteHeader>
      <TabNav
        v-model="activeId"
        :tabs="tabs"
      />
    </SiteHeader>

    <HeroPanel
      :id="`panel-${activeTab.id}`"
      :key="activeTab.id"
      role="tabpanel"
      :aria-labelledby="`tab-${activeTab.id}`"
      :background="activeTab.background"
      :blurred="activeTab.blurred"
    >
      <ContactCard
        v-if="activeTab.view === 'contact'"
        v-bind="contact"
      />
      <PhotoCard
        v-else-if="activeTab.photo"
        v-bind="activeTab.photo"
      />
    </HeroPanel>

    <SiteFooter v-bind="footer" />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
  text-align: center;
}
</style>
