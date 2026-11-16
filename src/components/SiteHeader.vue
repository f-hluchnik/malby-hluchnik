<script setup>
import logo from '@/assets/logo.png'
</script>

<template>
  <header class="site-header">
    <h1 class="site-header__title">
      <img
        class="site-header__logo"
        :src="logo"
        alt="Malířství Eda"
        width="652"
        height="383"
      >
    </h1>
    <slot />
  </header>
</template>

<style scoped>
.site-header {
  padding: 0 12px;
}

.site-header__title {
  margin: 0;
}

.site-header__logo {
  width: 30%;
  max-width: 460px;
  height: auto;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .site-header__logo {
    width: 70%;
  }
}
</style>
