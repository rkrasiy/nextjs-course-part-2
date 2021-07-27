import fs from 'fs/promises';
import path from 'path'
import { Fragment } from "react";

function ProductID ( props ){
  const { loadedProduct } = props

  if(!loadedProduct)
   return <p>Loading...</p>

  let divStyle =  {
    padding: "1em",
    border: "1px solid #000"
  }

  return (
    <Fragment>
      <h1>Static Generation Page</h1>
      <p>Generate ALL static pages on server.</p>
      <div style={divStyle}>
        <h2>{loadedProduct.title}</h2>
        <h3>{loadedProduct.description}</h3>
      </div>
      <p>Use func <strong>getStaticProps</strong> and <strong>getStaticPaths</strong></p>
      <p><strong>getStaticProps</strong> - get params from url ( visit page via link)</p>
      <p><strong>getStaticPaths</strong> - get params from url ('user' inputs ID manualy)</p>
      <p><em>It necesary for 'dynamic' page data.</em></p>
    </Fragment>
  )
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return data
}

export async function getStaticProps( context ){
  const { params } = context;
  const productId = params.pid

  const data = await getData()

  const product = data.products.find( product => product.id === productId)

  if(!product){
    return { notFound: true}
  }

  return {
    props:{
      loadedProduct: product
    }
  }
}

// fallback: 'blocking' - if each age will be pre-render before called
// fallback: true - if unknown if all data are dynamic
// fallback: false - if all data are not dynamic
export async function getStaticPaths() {
  const data = await getData();

  const params = data.products.map( product => ({params: {pid: product.id}}))
  return  {
    paths: params,
    fallback: true
  };
}

export default ProductID;