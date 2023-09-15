<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container">
    <nav
      class="navbar navbar-expand-lg bg-main-light-color text-uppercase fixed-top"
      id="mainNav"
    >
      <div class="container">
        <RouterLink class="navbar-brand text-main-dark-color" to="/showcase"
          >Aluminum Estimate</RouterLink
        >
        <button
          class="navbar-toggler text-uppercase font-weight-bold bg-main-dark-color text-fifth-color rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          SF
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about"
                >À propos</a
              >
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact"
                >Contact</a
              >
            </li>
          </ul>
        </div>
        <form class="d-flex">
          <RouterLink to="/login" class="btn gwx-btn-main text-uppercase fw-bold fst-italic" type="submit">Se connecter</RouterLink>
        </form>
      </div>
    </nav>
  </div>
</template>
<style scoped>

.gwx-btn-main{
    color: var(--gwx-text-light-color);
  }
  .gwx-btn-main:hover{
    background-color: var(--gwx-secondary-color);
    color: var(--gwx-text-light-color);
  }
  .gwx-btn-main-hovred{
    background-color: var(--gwx-secondary-color);
    color: var(--gwx-text-light-color);
  }
  .gwx-btn-main-hovred:hover{
    background-color: var(--gwx-secondary-color);
    color: var(--gwx-text-light-color);
    transform: scale(1.1);
  }

</style>
