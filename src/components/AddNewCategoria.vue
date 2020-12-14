<template>
  <div
    class="modal fade"
    id="nuevaCategoriaModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Nueva categoria</h5>
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
import { PostCategoria } from "../service/functions";
export default {
  name: "AgregarCategoria",
  data() {
    return {
      nombre: "",
    };
  },
  methods: {
    async guardar() {
      // $('#nuevaCategoriaModal').modal('hide');
      const res = await PostCategoria(this.nombre);
      if (res) {
        window.location.reload();
      }
    },
  },
};
</script>

<style scoped>
</style>