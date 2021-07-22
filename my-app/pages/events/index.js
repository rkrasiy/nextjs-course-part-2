import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

function AllEventsPage (){
  const events =  getAllEvents();

  return (
    <div>
      <h1>All Events Page</h1>
      <EventList items={events} />
    </div>
  )
}

export default AllEventsPage;