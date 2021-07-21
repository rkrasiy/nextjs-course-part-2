import Link from "next/link";


function AllEventsPage (){
  return (
    <div>
      <h1>All Events</h1>
      <ul>
        <li><Link href="/events/ev1">One Event</Link></li>
        <li><Link href="/events/ev2">Second Event</Link></li>
      </ul>
    </div>
  )
}

export default AllEventsPage;