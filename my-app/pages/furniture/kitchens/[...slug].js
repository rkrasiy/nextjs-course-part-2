import LinkWrapper from '../../../components/linkwrapper/linkwrapper';
import { useRouter } from 'next/router';

function kitchenTypesList () {
  const router = useRouter();

  //console.log(router.query.slug[0])

  const kithens = [
    {id: "lisa", title: "Lisa", price: "1222€", model: {id: "hitech", title: "Hitech"}},
    {id: "diubon", title: "Diubon", price: "2000€",model: {id: "hitech", title: "Hitech"}},
    {id: "lukra_light", title: "Lukra Light", price: "2222€", model: {id: "modern", title: "Modern"}},
    {id: "space_x", title: "Space X", price: "3000€",model: {id: "modern", title: "Modern"}},
    {id: "ommiflex_eco", title: "Ommiflex Eco", price: "1822€", model: {id: "designed", title: "Designed"}},
    {id: "oakl_light", title: "Oakl light", price: "2500€",model: {id: "designed", title: "Designed"}},
    {id: "nominex_one", title: "Nominex One", price: "1322€", model: {id: "classic", title: "Classic"}},
    {id: "standoff_dark", title: "Standoff Dark", price: "1200€",model: {id: "classic", title: "Classic"}}
  ]
  
  let items, title = null
  if(router.query.slug && router.query.slug.length > 0){
    items = kithens.map( ( item ) => {
      if(item.model.id === router.query.slug[0]){
        title = item.model.title
      return <LinkWrapper href={item.id} key={item.id} className="block">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
        </LinkWrapper>
      }
    })

  }

  return (
    <div>
      <h1>The List of different kitchen type</h1>
      <h3>{title}</h3>
        {items}
    </div>
  )
}


export default kitchenTypesList;