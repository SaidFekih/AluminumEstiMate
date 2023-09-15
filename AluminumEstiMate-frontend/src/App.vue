<script setup>
import navbar from './components/NavBar.vue'
import{RouterView} from "vue-router"

</script>

<template>
  <header>
    <navbar></navbar>
  </header>

  <main>

    <RouterView></RouterView> 

  </main>
</template>

<style scoped></style>
