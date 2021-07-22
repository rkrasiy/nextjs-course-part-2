import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

function FilteredEventsPage(){
  const featuredEvents =  getFeaturedEvents();
  
  return (
    <div>
      <h1>All Events Page</h1>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default FilteredEventsPage;