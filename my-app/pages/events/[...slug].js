import { useRouter } from "next/router";

import { getFilteredEvents } from "../../helpers/api-util"; 
import EventList from "../../components/events/event-list";
import LinkWrapper from "../../components/linkwrapper/linkwrapper";
import ErrorAlert from "../../components/ui/error/error-alert";

function FilteredEventsPage( props ){
  // const router = useRouter();
  // const filterData = router.query.slug;

  // if(!filterData){
  //   return <p className="center">Loading...</p>
  // }
  const filteredEvents = props.events;
  
  const { year, month } = props.date;
  if( props.hasError ) {
      return <ErrorAlert>
        <p>Invalid filter. Please adjust your values!</p>
        <LinkWrapper href="/events">Go back</LinkWrapper>
      </ErrorAlert>
    }

  if(!filteredEvents || filteredEvents.length === 0){
    return <ErrorAlert>
        <p>No events found for the chosen filter</p>
        <LinkWrapper href="/events">Go back</LinkWrapper>
      </ErrorAlert>
  }

  return (
    <div>
      <h1>Filtered Events</h1>
      <p>Month: {month} and Year: {year}</p>
      <LinkWrapper href="/events">All Events</LinkWrapper>
      <EventList items={filteredEvents} />
    </div>
  )
}

export default FilteredEventsPage;

export async function getServerSideProps( context ){
  const { params } = context;

  const filterData = params.slug;

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
      return {
        props: {
          hasError: true
        },
        // redirect: {
        //   destination: './error'
        // }
      }
    }
    const filteredEvents =  await getFilteredEvents({
      year: numYear,
      month: numMonth
    });
      
  return {
    props:{
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  }
}