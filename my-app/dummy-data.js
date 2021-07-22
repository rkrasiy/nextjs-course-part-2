const DUMMY_EVENTS = [
  {
    "id": "pli3",
    "title": "Prodder",
    "description": "suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean",
    "image": "/images/tiana-borcherding-1eVYwkNHqVU-unsplash.jpg",
    "date": "8/21/2020",
    "location": "95998 Waywood Point",
    "isFeatured": false
  }, {
    "id": "oln1",
    "title": "Cardguard",
    "description": "convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum",
    "image": "/images/sven-brandsma-ipcabm48ATw-unsplash.jpg",
    "date": "5/23/2021",
    "location": "19 Glacier Hill Plaza",
    "isFeatured": true
  }, {
    "id": "gan9",
    "title": "Cardify",
    "description": "condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros",
    "image": "/images/spacejoy-YI2YkyaREHk-unsplash.jpg",
    "date": "8/11/2020",
    "location": "5 Bunker Hill Trail",
    "isFeatured": true
  }, {
    "id": "sen0",
    "title": "Cookley",
    "description": "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
    "image": "/images/spacejoy-XpbtQfr9Skg-unsplash.jpg",
    "date": "9/9/2021",
    "location": "48454 Warrior Road",
    "isFeatured": false
  }, {
    "id": "neo7",
    "title": "Temp",
    "description": "id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
    "image": "/images/spacejoy-THR4LzUUUYA-unsplash.jpg",
    "date": "1/18/2021",
    "location": "55 Blue Bill Park Parkway",
    "isFeatured": false
  }, {
    "id": "nnc5",
    "title": "Cardguard",
    "description": "platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent",
    "image": "/images/spacejoy-NrdwhqreL8M-unsplash.jpg",
    "date": "7/13/2021",
    "location": "7 Northview Point",
    "isFeatured": true
  }, {
    "id": "jwy4",
    "title": "Opela",
    "description": "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean",
    "image": "/images/spacejoy-EPPbKZPN0rU-unsplash.jpg",
    "date": "5/26/2021",
    "location": "3380 Commercial Circle",
    "isFeatured": false
  }, {
    "id": "qcm5",
    "title": "Fintone",
    "description": "vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh",
    "image": "/images/spacejoy-3z_61bnbFhM-unsplash.jpg",
    "date": "12/13/2020",
    "location": "1 Lerdahl Center",
    "isFeatured": false
  }, {
    "id": "ciu7",
    "title": "Greenlam",
    "description": "mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus",
    "image": "/images/spacejoy-1vieZivk1As-unsplash.jpg",
    "date": "2/28/2021",
    "location": "9859 Sage Terrace",
    "isFeatured": true
  }, {
    "id": "esc7",
    "title": "Gembucket",
    "description": "aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales",
    "image": "/images/mikael-cho-ZMIrSYeDEsc-unsplash.jpg",
    "date": "12/8/2020",
    "location": "5927 Kedzie Hill",
    "isFeatured": false
  }, {
    "id": "inv4",
    "title": "Stringtough",
    "description": "libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor",
    "image": "/images/inside-weather-BayIzHKkjM4-unsplash.jpg",
    "date": "7/22/2020",
    "location": "9264 Sutherland Road",
    "isFeatured": false
  }, {
    "id": "ygf1",
    "title": "Konklab",
    "description": "orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu",
    "image": "/images/hannah-busing-nME9TubZtSo-unsplash.jpg",
    "date": "9/18/2020",
    "location": "62 Oakridge Pass",
    "isFeatured": false
  }, {
    "id": "inl3",
    "title": "Alpha",
    "description": "odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras",
    "image": "/images/fedor-AONwAINa2c0-unsplash.jpg",
    "date": "3/2/2021",
    "location": "540 Hauk Drive",
    "isFeatured": true
  }, {
    "id": "uiy1",
    "title": "Bamity",
    "description": "risus auctor sed tristique in tempus sit amet sem fusce consequat nulla",
    "image": "/images/erin-hervey-JZmvEoeIeBw-unsplash.jpg",
    "date": "8/19/2020",
    "location": "28 Kenwood Plaza",
    "isFeatured": false
  }, {
    "id": "iug7",
    "title": "Kanlam",
    "description": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu",
    "image": "/images/dario-J8vq2psV4_U-unsplash.jpg",
    "date": "7/6/2021",
    "location": "062 Talisman Crossing",
    "isFeatured": false
  }
]

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured );
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dataFilter) {
  const { year, month } = dataFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    let eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;

  })

}