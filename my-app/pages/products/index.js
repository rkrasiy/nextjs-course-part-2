import fs from 'fs/promises';
import path from 'path'
import LinkWrapper from '../../components/linkwrapper/linkwrapper';

function Products( props ) {

  const { products } = props;

  return (
    <div>
      <h1>Static Generation Page</h1>
      <p>Generate ALL static pages on server.</p>
      <ul>
        {products.map( product => (
          <li key={product.id}><LinkWrapper href={`/products/${product.id}`}>{product.title}</LinkWrapper></li>
        ))}
      </ul>
     <p>Link to "/products/" + product.id</p>
    <p>Use func <strong>getStaticProps</strong></p>

    <p>This func will get all posible data ID's from .json ficher.</p>
    <p>And then generate static pages with data content.</p>
    <p><em>It necesary for 'dynamic' page data.</em></p>
    
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("Context: ", context)
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  
  if(!data){
    return {
      riderect: {
        destination: "/no-data"
      }
    }
  }

  if(data.products.length === 0){
    return { notFound: true}
  }

  /**
   * riderect: 
   */
  return { 
    props: {
      products: data.products
    },
    revalidate: 10
  };
}

export default Products;
