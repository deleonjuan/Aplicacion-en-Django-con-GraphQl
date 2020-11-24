<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-blue bg-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <a class="nav-link" @click="ingresar1" href="#"> Productos <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" @click="ingresar2" href="#"> Buscar Productos por Centro Comercial </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" @click="ingresar3" href="#"> Agregar Categorias </a>
                  </li>
              </ul>
          </div>
      </nav>
    <CompanyData v-if="primera"/>
    <AgregarData v-if="segunda"/>
    <AgregarCategoria v-if="tercera"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AgregarData from './components/Agregar' //import new component
import AgregarCategoria from './components/ACategorias' //import new component
import CompanyData from './components/Comp' //import new component
export default {
    name: 'App',
    data(){
        return{
            primera:true,
            segunda:false,
            tercera:false,
        }
    },
    components: {
        HelloWorld,
        CompanyData,
        AgregarData,
        AgregarCategoria
    },
	methods:{
        ingresar1(){
            this.primera=true
            this.segunda=false
            this.tercera=false
        },
        ingresar2(){
            this.segunda=true
            this.primera=false
            this.tercera=false
        },
        ingresar3(){
            this.tercera=true
            this.primera=false
            this.segunda=false
        },
    }
}
</script>

<style>

@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
#app {
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>