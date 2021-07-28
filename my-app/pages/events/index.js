import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import { getFeaturedEvents } from "../../helpers/api-util";

import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage ( props ){
  const router = useRouter();
  const events = props.events

  function findEvensHadler ( year, month){
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }
 
  if(!events)
    return <p>Error</p>
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta 
          name="description" 
          content="Find a lot of events"/>
      </Head>
      <EventsSearch onSearch={ findEvensHadler } />
      <EventList items={events} />
    </Fragment>
  )
}

export default AllEventsPage;

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();

  return { 
    props: { events: featuredEvents},
    revalidate: 1800
  }
}
