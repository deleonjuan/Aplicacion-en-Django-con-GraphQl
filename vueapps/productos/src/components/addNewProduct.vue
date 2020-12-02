<template>
  <div
    class="modal fade"
    id="nuevoProductolModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Nuevo producto</h5>
        </div>
        <div class="modal-body">
          <!-- formulario  -->
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Nombre:</label>
              <input
                type="text"
                v-model="nombre"
                class="form-control"
                id="recipient-name"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Elegir categoria</label>
              <select class="form-control" id="exampleFormControlSelect1" v-model="categoria">
                <option v-for="i in categorias" :key="i.id">{{ i.node.titleName }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Elegir supermercado</label>
              <select class="form-control" id="exampleFormControlSelect1" v-model="comercial">
                <option v-for="i in comerciales" :key="i.id">{{ i.node.comercialName }}</option>
              </select>
            </div>
          </form>
          <!--  -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancelar
          </button>
          <button type="button" class="btn btn-primary" @click="guardar()">
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PostProducto, GetComercials, GetCategorias } from "../service/functions";
export default {
  name: "AgregarProducto",
  data() {
    return {
      nombre: '',
      comercial: '',
      categoria: '',
      comerciales: [],
      categorias: []
    };
  },
  async mounted() {
    const centros_comerciales = await GetComercials();
    this.comerciales = centros_comerciales;

    const categorias = await GetCategorias();
    this.categorias = categorias;
  },
  methods: {
    async guardar() {
        const res = await PostProducto(this.nombre, this.comercial, this.categoria)
        if(res) window.location.reload()
    },
  },
};
</script>

<style scoped>
</style>