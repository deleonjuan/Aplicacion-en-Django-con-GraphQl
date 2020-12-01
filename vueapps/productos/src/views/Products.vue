<template>
  <div id="Products">
    <div class="container">
      <h2>{{ comercial }}</h2>
      <!-- productos por centro comercial -->
      <div v-for="i in productos" :key="i.id">
        <div class="card">
          <div class="row card-body">
            <div class="col-sm">{{ i.node.productosName }}</div>
            <div class="col-sm">
              <h5>
                <span class="badge badge-secondary"
                  >{{ i.node.productosTitle.titleName }}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetProductosX } from "../service/functions";
export default {
  name: "ProductsScreen",
  data() {
    return {
      productos: [],
      comercial: "Productos",
    };
  },
  async mounted() {
    const comercial = this.$route.params.comercial;
    this.comercial = comercial;

    const productos = await GetProductosX(comercial);
    this.productos = productos;
  },
};
</script>

<style scoped>
.comercial {
  margin-bottom: 1rem;
}
.container {
  margin-top: 2rem;
}
</style>