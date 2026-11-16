<script setup>
import { computed } from 'vue'

const props = defineProps({
  intro: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true }
})

const phoneHref = computed(() => `tel:+420${props.phone.replace(/\s/g, '')}`)
</script>

<template>
  <section class="contact-card">
    <p class="contact-card__intro">
      {{ intro }}
    </p>
    <h2 class="contact-card__heading">
      kontaktní informace
    </h2>
    <p class="contact-card__line">
      mobil: <a :href="phoneHref">{{ phone }}</a>
    </p>
    <p class="contact-card__line">
      e-mail: <a :href="`mailto:${email}`">{{ email }}</a>
    </p>
  </section>
</template>

<style scoped>
.contact-card {
  width: 60%;
  padding: 20px;
  border: 3px solid #f1f1f1;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-weight: bold;
}

.contact-card p,
.contact-card__heading {
  margin: 0;
  font-size: 1em;
}

.contact-card__intro {
  margin-bottom: 1.25em !important;
}

.contact-card a {
  text-decoration: none;
  overflow-wrap: anywhere;
}

.contact-card a:hover,
.contact-card a:focus-visible {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact-card {
    width: 80%;
  }
}
</style>
