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

export {
    GetComercials,
    GetProductos,
    GetProductosX
}