const packages = [
  {
    id: 'rec31Dj4hN7z95gu1',
    name: 'Singapore',
    price: 499999,
    image:
      'https://dl.airtable.com/.attachments/282a3e6fcb3343697957811c917d2002/46909a7a/Singapore.jpg',
    colors: ['#000000', '#ffffff'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'hotel',
    shipping: true,
  },
  {
    id: 'recI6ShoYqIiZo9Fq',
    name: 'Osaka',
    price: 399999,
    image:
      'https://dl.airtable.com/.attachments/898fc5c7ab590ac25597a6efc725efc0/21de4f48/Osaka.png',
    colors: ['#000000', '#ffffff'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'airplane',
    shipping: true,
  },
  {
    id: 'recIVa46jLV4vWr02',
    name: 'Disneyland California',
    price: 200099,
    image:
      'https://dl.airtable.com/.attachments/e5689c1eee025e4e1b220cfba06ddc94/8fe7ff70/Disneyland.jpg',
    colors: ['#000000', '#ffffff'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'hotel',
    shipping: true,
  },
  {
    id: 'recQB2kbaPgCC7HKr',
    name: 'Rome',
    price: 500099,
    image:
      'https://dl.airtable.com/.attachments/6cdc13e57bcb165584ed62076f8ac7e7/2cb00293/Rome.jpg',
    colors: ['#000000', '#ffffff'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'airplane',
    shipping: true,
  },
  {
    id: 'recR6BwJj72n1P9L6',
    name: 'London',
    price: 399999,
    image:
      'https://dl.airtable.com/.attachments/1b0c1ccc173ece019e6300adf5a28a95/5d81a465/London.jpg',
    colors: ['#000000', '#ffffff'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'airplane',
    shipping: true,
  },
  {
    id: 'recYk7UD200FkJExQ',
    name: 'Seoul',
    price: 750099,
    image:
      'https://dl.airtable.com/.attachments/a4a0cb3450a379fa3eee4c8ada9202b5/913c4f05/Seoul.jpg',
    colors: ['#000000', '#ffffff'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'dining',
    shipping: true,
  },
  {
    id: 'recmoMm6a0j0JlbZC',
    name: 'Paris',
    price: 699999,
    image:
      'https://dl.airtable.com/.attachments/370ee2e983293c375450de8fc0e1aa19/1f228d20/Paris.jpg',
    colors: ['#000000', '#ffffff'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'dining',
    shipping: true,
  },
  {
    id: 'recuAXZ8gHKj0Rv3d',
    name: 'New York City',
    price: 240099,
    image:
      'https://dl.airtable.com/.attachments/ae50527160cef6b46a876ab91766fd94/417466e6/NYC.jpg',
    colors: ['#000000', '#ffffff'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'hotel',
    shipping: true,
  },
  {
    id: 'recymnpCGSxYUEvK2',
    name: 'Barcelona',
    price: 799999,
    image:
      'https://dl.airtable.com/.attachments/f63c81997acab04846658194c8e7085f/f3ceaa19/Barcelona.jpg',
    colors: ['#000000', '#ffffff'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'airplane',
    shipping: true,
  },
]

module.exports = packages
