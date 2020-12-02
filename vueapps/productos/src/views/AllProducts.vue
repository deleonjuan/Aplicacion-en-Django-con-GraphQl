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
        @click="ShowModal()"
      >
        Agregar producto
      </button>
      <!--  -->
      <!-- productos por centro comercial -->
      <div v-for="i in productos" :key="i.node.id">
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
                <span class="badge badge-danger" @click="Eliminar(i.node.id)"
                  >Eliminar</span
                >
                <span class="badge badge-warning" 
                @click="Editar(
                  i.node.id,
                  i.node.productosName,
                  i.node.productosComercial.comercialName,
                  i.node.productosTitle.titleName,
                )"
                  >Editar</span
                >
              </h5>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <!-- modal para agregar un nuevo supermercado -->
      <AgregarCategoria />
      <AgregarProducto />

      <!--  -->
    </div>
  </div>
</template>

<script>
import { GetProductos, DeleteProducto } from "../service/functions";
//componentes
import AgregarCategoria from "../components/AddNewCategoria";
import AgregarProducto from "../components/addNewProduct";

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
  methods: {
    async Eliminar(id) {
      const res = await DeleteProducto(id);
      if (res) window.location.reload();
    },
    async ShowModal(){
      $('#nuevoProductolModal').modal('show')
      $('#nuevoProductolModal').data("id", -1)
    },
    async Editar(id, nombre, comercial, categoria){
      $('#nuevoProductolModal').modal('show')
      $('#nuevoProductolModal').data("id", id)
      $('#nuevoProductolModal').data("nombre", nombre)
      $('#nuevoProductolModal').data("comercial", comercial)
      $('#nuevoProductolModal').data("categoria", categoria)
    }
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