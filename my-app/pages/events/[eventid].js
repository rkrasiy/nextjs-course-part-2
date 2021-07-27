import { Fragment } from "react";

import { getEventById, getFeaturedEvents } from "../../helpers/api-util";


import EventContent from "../../components/events/event-content";
import EventSummary from "../../components/events/event-summary";
import EventLogistics from "../../components/events/event-locate";


function EventDetailPage(props){
  const event =  props.selectedEvent;

  if(!event){
    return <p>No event found!</p>
  }

  return (
    <Fragment>
      <EventSummary>{event.title}</EventSummary>
      <EventLogistics 
        alt={event.title} 
        image={event.image} 
        address={event.location} 
        date={event.date} />
      <EventContent>
        <p>{event.description}</p></EventContent>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const eventid = context.params.eventid;
  const event = await getEventById (eventid)
  
  return {
    props:{
      selectedEvent: event[0]
    },
    revalidate: 30
  }

}

export async function getStaticPaths(){
  const events = await getFeaturedEvents();

  const paths = events.map( event => ({ params: {eventid: event.id}}))

  return {
    paths: paths,
    fallback: true
  }
}

export default EventDetailPage;