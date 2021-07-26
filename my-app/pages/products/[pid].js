import fs from 'fs/promises';
import path from 'path'
import { Fragment } from "react";

function ProductID ( props ){
  const { loadedProduct } = props

  if(!loadedProduct)
   return <p>Loading...</p>

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <h2>{loadedProduct.description}</h2>
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

// fallback: 'blocking' |  fallback: true |  fallback: false
export async function getStaticPaths() {
  const data = await getData();

  const params = data.products.map( product => ({params: {pid: product.id}}))
  return  {
    paths: params,
    fallback: true
  };
}

export default ProductID;