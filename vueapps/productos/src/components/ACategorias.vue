<template>
    <div>
       <div class="form-group mt-4">
                <label class="form-check-label mr-2 ml-3" for="inlineCheckbox3">Nueva Categoria:</label>
                </br>
                <input type="text" class="form-control ml-3 m-2" id="name" placeholder="nueva categoria" v-model="categoria">
        </div>
        <div class="form-group">
            <button class="btn btn-primary ml-3" @click="ingresar" > Ingresar </button>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default{
  	name: 'AgregarCategoria',
    data(){
        return{
            categoria:'',
        }
    },
    methods:{
  	    async ingresar()
        {
            try {
                var result = await axios({
                    method: 'POST',
                    url: 'http://127.0.0.1:8000/graphql/',
                    data: {
                        query:`
                            mutation{
                              createTitle(input:{
                                      titleName:"${this.categoria}"
                                  })
                                  {
                                      title{
                                        id
                                        titleName
                                      }
                                  }
                            }
                            `
                            }
                        })
                    } catch (error) {
                        console.error(error)
                    }
        }
    },
    mounted () {
    }
  }
</script>

<style scoped>
</style>