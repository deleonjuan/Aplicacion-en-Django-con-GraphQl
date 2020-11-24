<template>

  <div>
 	<form action="" @submit.prevent="mounted()">
      <div class="col-sm-6">
        <input v-model="comercial" comercial="" type="text" class="form-control">
        <button type="submit" name="button">Buscar productos en este Centro Comercial</button>
      </div>
    </form> 
    <table class="table table-striped mt-4">
      <thead>
      <tr>
        <th scope="col">Productos</th>
        <th scope="col">Categoria</th>
        <th scope="col">Centro Comercial</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="input in directory.edges" :key="input.id">
        <td>{{ input.node.productosName }}</td>
        <td>{{ input.node.productosTitle.titleName }}</td>
        <td>{{ input.node.productosComercial.comercialName }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
  	name: 'AgregarData',
    data(){
      return {
		  comercial: '',
      	directory: []
      }
    },
    methods: {
    async mounted () {
	try {
        var result = await axios({
          method: 'POST',
          url: 'http://127.0.0.1:8000/graphql/',
          data: {
            query: `
            {
              allProductoss(productosComercial_ComercialName: "`+this.comercial+`") {
                edges {
                  node {
                    id
                    productosName
                    productosTitle {
                      titleName
                    }
                    productosComercial {
                      comercialName
                    }
                  }
                }
              }
            }
            `
          }
        })
        this.directory = result.data.data.allProductoss
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
</style>