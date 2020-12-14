<template>
  <div id="Home">
    <div class="container">
      <h2>Login</h2>
      <!-- imprimir los nombres de los centros comerciales -->

      <form>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">Usuario:</label>
          <input
            type="text"
            v-model="Usuario"
            class="form-control"
            id="recipient-name"
          />
        </div>
        <div class="form-group">
          <label for="recipient-name" class="col-form-label">Contraseña:</label>
          <input
            type="text"
            v-model="Contraseña"
            class="form-control"
            id="recipient-name"
          />
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary" @click="guardar()">
            Guardar
          </button>
        </div>
      </form>
      <!--  -->
    </div>
  </div>
</template>

<script>
import { OnLogin } from "../service/functions";

export default {
  name: "LoginScreen",
  data() {
    return {
      Usuario: "",
      Contraseña: "",
    };
  },
  methods: {
    async guardar() {
      const res = await OnLogin(this.Usuario, this.Contraseña);
      if (res) {
        this.$router.push({
          name: "HomeScreen"
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
}
</style>