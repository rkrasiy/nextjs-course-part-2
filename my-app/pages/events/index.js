import Link from "next/link";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

function AllEventsPage (){
  const featuredEvents =  getFeaturedEvents();
  console.log("All: ", featuredEvents)
  return (
    <div>
      <h1>All Events</h1>
 
      <EventList items={featuredEvents} />

    </div>
  )
}

export default AllEventsPage;