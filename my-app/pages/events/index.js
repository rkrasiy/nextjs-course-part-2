import { Fragment } from "react";
import { useRouter } from "next/router";
//import { getAllEvents } from "../../dummy-data";

import { useEffect, useState } from "react";
import useSWR from 'swr';

import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const dbUrl = 'https://nextjs-d63cf-default-rtdb.europe-west1.firebasedatabase.app/events.json';

function AllEventsPage ( props ){
  const router = useRouter();
  const [ events, setEvents ] = useState( props.events )

  const { data, error} = useSWR(dbUrl);

  useEffect(()=>{
    if(data){
      const transformEvents = []
      for(const key in data){
        transformEvents.push(data[key])
      }
      setEvents(transformEvents)
    }
  },[data])

  if(error){
    return <p>Failed to load..</p>
  }

  if(!data && !events){
    return <p>Loading...</p>
  }

  function findEvensHadler ( year, month){
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }
 
  return (
    <Fragment>
      <EventsSearch onSearch={ findEvensHadler } />
      <EventList items={events} />
    </Fragment>
  )
}

export default AllEventsPage;

export async function getServerSideProps(){
  const response = await fetch(dbUrl);
  const data = response.json();

  const transformEvents = []

  for(const key in data){
    transformEvents.push(data[key])
  }

  return { 
    props: { events: transformEvents}
  }
}