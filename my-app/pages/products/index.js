import fs from 'fs/promises';
import path from 'path'
import LinkWrapper from '../../components/linkwrapper/linkwrapper';

function Products( props ) {

  const { products } = props;

  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <p>getStaticProps function</p>
        {products.map( product => (
          <li key={product.id}><LinkWrapper href={`/products/${product.id}`}>{product.title}</LinkWrapper></li>
        ))}
      </ul>
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
