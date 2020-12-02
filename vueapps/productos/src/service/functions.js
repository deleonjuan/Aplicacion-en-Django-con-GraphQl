import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/graphql/'

const GET = async (data) => {
    try {
        const res = await axios({
            url: `${SERVER}`,
            method: 'POST',
            data: data
        })

        return { Err: false, data: res.data }

    } catch (e) {
        console.log(err);
        return { Err: true }
    }
}

const GetComercials = async () => {
    const res = await GET({
        query: `
			{
			  allComercials {
			    edges {
			      node {
              id
             	comercialName
			      }
			    }
			  }
			}`
    })
    if (!res.Err) {
        return res.data.data.allComercials.edges
    }
}
const GetCategorias = async () => {
    const res = await GET({
        query: `
        {
            allTitles {
              edges {
                node {
            id
               titleName
                }
              }
            }
          }`
    })
    if (!res.Err) {
        return res.data.data.allTitles.edges
    }
}
const GetProductos = async () => {
    const res = await GET({
        query: `
        {
            allProductoss{
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
          }`
    })
    if (!res.Err) {
        return res.data.data.allProductoss.edges
    }
}

const GetProductosX = async (comercial) => {
    const res = await GET({
        query: `
        {
            allProductoss(productosComercial_ComercialName: "`+ comercial + `") {
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
          }`
    })
    if (!res.Err) {
        return res.data.data.allProductoss.edges
    }
}

const PostCategoria = async (nombre) => {
    const res = await GET({
        query: `
        mutation{
            createTitle(input:{
                    titleName:"${nombre}"
                })
                {
                    title{
                      id
                      titleName
                    }
                }
          }`
    })
    if (!res.Err) {
        return true
    }
}

const PostProducto = async (nombre, categoria, comercial) => {
    const res = await GET({
        query: `
        mutation {
            createProductos(input: {
                productosName: "${nombre}",
                productosComercial: "${categoria}",
                productosTitle: "${comercial}"
              }) {
                productos{
                  id
                  productosName
                  productosTitle{
                    titleName
                  }
                  productosComercial{
                    comercialName
                  }
                }
              }
            }`
    })
    if (!res.Err) {
        return true
    }
}

export {
    GetComercials,
    GetProductos,
    GetProductosX,
    PostCategoria,
    GetCategorias,
    PostProducto
}


