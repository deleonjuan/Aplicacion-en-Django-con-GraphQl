import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/graphql/'

const GET = async (data) => {
  try {
    const res = await axios({
      url: SERVER,
      method: 'POST',
      data: data
    })

    return { Err: false, data: res.data }

  } catch (e) {
    console.log(e);
    return { Err: true }
  }
}
//login
const OnLogin = async (user, pass) => {
  const res = await GET({
    query: `
        {
          allUsuarios(usuarioName: "${user}", password: "${pass}"){
            edges{
              node{
                id
                usuarioName
                password
              }
            } 
          }
        }`
  })
  if (!res.Err) {
    // return res.data.data.allUsuarios.edges
    if(res.data.data.allUsuarios.edges.length > 0) return true
    else return false
  }
}
//supermercados
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
//categorias
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
//productos
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
    return res.data
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
const DeleteProducto = async (id) => {
  const res = await GET({
    query: `
        mutation {
            deleteProductos(input: {
              id: "${id}"
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
          }
        `
  })
  if (!res.Err) {
    return true
  }
}
const UpdateProducto = async (id, nombre, categoria, comercial) => {
  const res = await GET({
    query: `
        mutation {
          updateProductos(input: {
                id: "${id}",
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
        }
        `
  })
  if (!res.Err) {
    return true
  }
}


export {
  //
  OnLogin,
  //
  GetComercials,
  //
  GetProductos,
  GetProductosX,
  DeleteProducto,
  UpdateProducto,
  //
  PostCategoria,
  GetCategorias,
  PostProducto
}


