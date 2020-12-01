<template>
  <div id="Home">
    <div class="container">
      <h2>Supermercados</h2>
      <!-- imprimir los nombres de los centros comerciales -->
      <div v-for="i in comerciales" :key="i.id">
        <div class="card comercial" @click="navegar(i.node.comercialName)">
          <div class="card-body">{{ i.node.comercialName }}</div>
        </div>
      </div>
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