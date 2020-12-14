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
          <h5 class="modal-title" v-if="!isEditing" id="exampleModalLabel">Nuevo producto</h5>
          <h5 class="modal-title" v-if="isEditing" id="exampleModalLabel">Actualizar producto</h5>
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
                id="nombre-producto"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Elegir categoria</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                v-model="categoria"
              >
                <option v-for="i in categorias" :key="i.id">
                  {{ i.node.titleName }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Elegir supermercado</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                v-model="comercial"
              >
                <option v-for="i in comerciales" :key="i.id">
                  {{ i.node.comercialName }}
                </option>
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
import {
  PostProducto,
  UpdateProducto,
  GetComercials,
  GetCategorias,
} from "../service/functions";
export default {
  name: "AgregarProducto",
  data() {
    return {
      isEditing: false,
      id: 0,
      nombre: "",
      comercial: "",
      categoria: "",
      comerciales: [],
      categorias: [],
    };
  },
  async mounted() {
    // obtener datos
    $("#nuevoProductolModal").on("shown.bs.modal", function (e) {
      const id = $(this).data("id");
      if (id !== -1) {
        actualizar_datos(
          id,
          $(this).data("nombre"),
          $(this).data("comercial"),
          $(this).data("categoria")
        );
      } else {
        isNotEditing()
      }
    });

    const isNotEditing = () => {
      this.isEditing = false
      this.id = '';
      this.nombre = '';
      this.comercial = '';
      this.categoria = '';
    }

    const actualizar_datos = (id, nombre, comercial, categoria) => {
      this.id = id;
      this.nombre = nombre;
      this.comercial = comercial;
      this.categoria = categoria;
      this.isEditing = true;
    };

    //cargar los centros comerciales
    const centros_comerciales = await GetComercials();
    this.comerciales = centros_comerciales;

    //cargar las categorias
    const categorias = await GetCategorias();
    this.categorias = categorias;
  },
  methods: {
    async guardar() {
      if (this.isEditing) {
        const res = await UpdateProducto(
          this.id,
          this.nombre,
          this.comercial,
          this.categoria
        );
        if (res) window.location.reload();
      } else {
        const res = await PostProducto(
          this.nombre,
          this.comercial,
          this.categoria
        );
        if (res) window.location.reload();
      }
    },
  },
};
</script>

<style scoped>
</style>