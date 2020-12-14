<template>
  <div id="app">
    <!-- navvar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">DJANGO</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/#/home">Supermercados </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/productos">Productos</a>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

</style>