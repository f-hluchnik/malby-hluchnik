<script setup>
defineProps({
  author: { type: String, required: true },
  year: { type: Number, required: true },
  email: { type: String, required: true }
})
</script>

<template>
  <footer class="site-footer">
    &copy; {{ author }}, {{ year }} (<a :href="`mailto:${email}`">{{ email }}</a>)
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 15px;
  background-color: #333;
  color: #fcba12;
  font-size: 13px;
  text-align: left;
}

.site-footer a {
  text-decoration: none;
}

.site-footer a:hover,
.site-footer a:focus-visible {
  text-decoration: underline;
}
</style>
