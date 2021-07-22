import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import { useRouter } from 'next/router';

import EventContent from "../../components/events/event-content";
import EventSummary from "../../components/events/event-summary";
import EventLogistics from "../../components/events/event-locate";


function EventDetailPage(){
  const router = useRouter();
  const eventid = router.query.eventid;
  const event =  getEventById(eventid);

  if(!event){
    return <p>No event found!</p>
  }
  console.log("Wv", event)

  return (
    <Fragment>
      <EventSummary>{event.title}</EventSummary>
      <EventLogistics alt={event.title} image={event.image} address={event.location} date={event.date} />
      <EventContent>
        <p>{event.description}</p></EventContent>
    </Fragment>
  )
}

export default EventDetailPage;