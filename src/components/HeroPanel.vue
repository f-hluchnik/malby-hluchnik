<script setup>
defineProps({
  background: { type: String, required: true },
  blurred: { type: Boolean, default: false }
})
</script>

<template>
  <main class="hero">
    <div
      class="hero__background"
      :class="{ 'is-blurred': blurred }"
      :style="{ backgroundImage: `url(${background})` }"
      aria-hidden="true"
    />
    <div class="hero__content">
      <slot />
    </div>
  </main>
</template>

<style scoped>
.hero {
  position: relative;
  flex: 1 0 auto;
  min-height: 460px;
  overflow: hidden;
}

.hero__background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: left top;
}

/* Bleed the blurred image past the edges so the blur doesn't leave soft white borders. */
.hero__background.is-blurred {
  inset: -12px;
  filter: blur(4px);
}

.hero__content {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 25px 16px;
}

@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
  }

  .hero__content {
    padding-top: 10%;
  }
}
</style>
