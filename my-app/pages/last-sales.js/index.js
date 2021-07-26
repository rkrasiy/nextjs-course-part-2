import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import { useEffect, useState } from "react";
import useSWR from 'swr';

function LastSalesPage( props ) {
  const [ sales, setSales ] = useState(props.sales);
  // const [ isLoading, setIsLoading ] = useState(false);

  const urlRequest = 'https://nextjs-d63cf-default-rtdb.europe-west1.firebasedatabase.app/sales.json'

  const { data, error} = useSWR(urlRequest)

  useEffect(()=>{
    if(data){
      const transformSalse = []

      for(const key in data){
        transformSalse.push({
          id: key, 
          username: data[key].username, 
          volume: data[key].volume
        })
      }
      setSales(transformSalse)
    }
  },[data])

  // useEffect(() => {
  //   setIsLoading(true)
  //   fetch(urlRequest
  //   ).then( response => response.json()
  //   ).then( data => {
  //     const transformSalse = []

  //     for(const key in data){
  //       transformSalse.push({
  //         id: key, 
  //         username: data[key].username, 
  //         volume: data[key].volume
  //       })
  //     }
  //     setSales(transformSalse);
  //     setIsLoading(false);
  //   });
  // },[]);

  if(error){
    return <p>Failed to load..</p>
  }

  if(!data && !sales){
    return <p>Loading...</p>
  }

  return <ul>
    {sales.map(sale => <li key={sale.id}>{sale.username} - {sale.volume}€</li>)}
  </ul>

}

export default LastSalesPage;

export async function getServerSideProps(){
  const response = await fetch('https://nextjs-d63cf-default-rtdb.europe-west1.firebasedatabase.app/sales.json');
  const data = response.json();

  const transformSalse = []

  for(const key in data){
    transformSalse.push({
      id: key, 
      username: data[key].username, 
      volume: data[key].volume
    })
  }
    
  return { 
    props: { sales: transformSalse}
  }
}