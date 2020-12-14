<template>
  <div id="Home">
    <div class="container">
      <h2>Supermercados</h2>
      <!-- imprimir los nombres de los centros comerciales -->
      <ul class="list-group comercial">
        <li
          class="list-group-item list-group-item-action"
          v-for="i in comerciales"
          :key="i.id"
          @click="navegar(i.node.comercialName)"
        >
          {{ i.node.comercialName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { GetComercials } from "../service/functions";

export default {
  name: "HomeScreen",
  data() {
    return {
      comerciales: [],
    };
  },
  components: {
    // AgregarComercial,
  },
  async mounted() {
    const centros_comerciales = await GetComercials();
    this.comerciales = centros_comerciales;
  },
  methods: {
    navegar(comercial) {
      this.$router.push({
        name: "ProductsScreen",
        params: {
          comercial: comercial,
        },
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
}
</style>