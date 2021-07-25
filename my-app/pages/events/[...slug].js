import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import LinkWrapper from "../../components/linkwrapper/linkwrapper";
import ErrorAlert from "../../components/ui/error/error-alert";

function FilteredEventsPage(){
  const router = useRouter();
  const filterData = router.query.slug;

  if(!filterData){
    return <p className="center">Loading...</p>
  }

  console.log(filterData)
  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if(
    isNaN(numYear) || 
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
    ) {
      return <ErrorAlert>
        <p>Invalid filter. Please adjust your values!</p>
        <LinkWrapper href="/events">Go back</LinkWrapper>
      </ErrorAlert>
    }
  
  const filteredEvents =  getFilteredEvents({
    year: numYear,
    month: numMonth
  });
  
  if(!filteredEvents || filteredEvents.length === 0){
    return <ErrorAlert>
        <p>No events found for the chosen filter</p>
        <LinkWrapper href="/events">Go back</LinkWrapper>
      </ErrorAlert>
  }

  return (
    <div>
      <h1>Filtered Events</h1>
      <LinkWrapper href="/events">All Events</LinkWrapper>
      <EventList items={filteredEvents} />
    </div>
  )
}

export default FilteredEventsPage;