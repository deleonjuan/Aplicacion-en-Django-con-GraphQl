<template>
  <div id="AllProducts">
    <div class="container">
      <h2>Todos los productos</h2>
      <button
        type="button"
        class="btn btn-outline-primary mb-5"
        data-toggle="modal"
        data-target="#nuevaCategoriaModal"
      >
        Agregar categoria
      </button>
      <!--  -->
      <button
        type="button"
        class="btn btn-outline-primary mb-5"
        data-toggle="modal"
        data-target="#nuevoProductolModal"
      >
        Agregar producto
      </button>
      <!--  -->
      <!-- productos por centro comercial -->
      <div v-for="i in productos" :key="i.id">
        <div class="card">
          <div class="row card-body">
            <div class="col-sm">{{ i.node.productosName }}</div>
            <div class="col-sm">
              {{ i.node.productosComercial.comercialName }}
            </div>
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
      <!--  -->
      <!-- modal para agregar un nuevo supermercado -->
      <AgregarCategoria />
      <AgregarProducto/>

      <!--  -->
    </div>
  </div>
</template>

<script>
import { GetProductos } from "../service/functions";
//componentes
import AgregarCategoria from '../components/AddNewCategoria'
import AgregarProducto from '../components/addNewProduct'

export default {
  name: "AllProductsScreen",
  data() {
    return {
      productos: [],
      comercial: "Productos",
    };
  },
  components: {
    AgregarCategoria,
    AgregarProducto,
  },
  async mounted() {
    const productos = await GetProductos();
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