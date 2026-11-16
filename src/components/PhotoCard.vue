<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true }
})
</script>

<template>
  <figure class="photo-card">
    <img
      class="photo-card__image"
      :src="src"
      :alt="alt"
    >
  </figure>
</template>

<style scoped>
.photo-card {
  margin: 0;
  border: 3px solid #f1f1f1;
  background-color: rgba(0, 0, 0, 0.4);
  line-height: 0;
}

/* Show the whole photo (no cropping), whatever its orientation. */
.photo-card__image {
  width: auto;
  max-width: min(546px, 80vw);
  max-height: 400px;
}

@media (max-width: 768px) {
  .photo-card__image {
    max-height: 60vh;
  }
}
</style>
