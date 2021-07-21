import Link from "next/link";

function kitchenTypesList () {
  const kithens = [
    {id: "lisa", title: "Lisa", price: "1222€"},
    {id: "diubon", title: "Diubon", price: "2000€"}
  ]

  return (
    <div>
      <h1>The List of different kitchen type</h1>
      <ul>
        {kithens.map( ( type ) => (
          <li key={type.id}><Link href={`/furniture/kitchens/${type.id}`}>{type.title}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default kitchenTypesList;