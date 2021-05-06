const packages = [
  {
    id: 'rec31Dj4hN7z95gu1',
    name: 'Singapore',
    price: 399999,
    image:
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=949&q=80',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description: 'Besides an array of attractions, the Lion City is home to a whole host of hidden gems, tranquil spots and amazing green spaces for moments to slow down, unwind and get a dose of sunshine to uplift your spirits for the day.',
    category: 'office',
    shipping: true,
  },
  {
    id: 'recmoMm6a0j0JlbZC',
    name: 'Paris',
    price: 699999,
    image:
      'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    colors: ['#000', '#ffb900'],
    company: 'liddy',
    description:
      "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    category: ' Package',
  },
  {
    id: 'recYk7UD200FkJExQ',
    name: 'Seoul',
    price: 749999,
    image:
      'https://images.unsplash.com/photo-1533637322518-7aadda74ddc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=619&q=80',
    colors: ['#ffb900', '#0000ff'],
    company: 'liddy',
    description:
      'Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine trees.',
    category: 'kitchen',
  },
  {
    id: 'recIVa46jLV4vWr02',
    name: 'Disneyland California',
    price: 149999,
    image:
      'https://images.unsplash.com/photo-1590144662036-33bf0ebd2c7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    colors: ['#000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description:
      'Around 15 million people a year visit Disneyland® Resort in Anaheim. It’s home to Disneyland® Park, which offers eight themed lands: Adventureland®, Critter Country, Fantasyland®, Frontierland®, Main Street, U.S.A.®, Mickey’s Toontown® Fair, New Orleans Square and Tomorrowland®.',
    category: 'bedroom',
    shipping: true,
  },
  {
    id: 'recI6ShoYqIiZo9Fq',
    name: 'Osaka',
    price: 399999,
    image: 'https://i.imgur.com/70ztppu.png',
    colors: ['#000'],
    company: 'liddy',
    description:
      "Osaka (大阪, Ōsaka) is Japan's second largest metropolitan area after Tokyo. It has been the economic powerhouse of the Kansai Region for many centuries. Osaka was formerly known as Naniwa. Before the Nara Period, when the capital used to be moved with the reign of each new emperor, Naniwa was once Japan's capital city, the first one ever known.",
    category: 'dining',
    shipping: true,
  },
  {
    id: 'recQB2kbaPgCC7HKr',
    name: 'Rome',
    price: 499999,
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=986&q=80',
    colors: ['#00ff00', '#0000ff', '#ff0000'],
    company: 'ikea',
    description:
      "Rome is the capital city and a special comune of Italy, as well as the capital of the Lazio region. The city has been a major human settlement for almost three millennia. With 2,860,009 residents in 1,285 km², it is also the country's most populated comune.",
    category: 'dining',
    shipping: true,
  },
  {
    id: 'recuAXZ8gHKj0Rv3d',
    name: 'New York City',
    price: 249999,
    image:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    colors: ['#0000ff', '#000'],
    company: 'ikea',
    description:
      "New York is a city that's always celebrating something, and summer is one of the best times to visit. Outdoor concert season is in full swing. Free movies and theatrical performances fill the city's parks, street vendors are everywhere, and street fairs abound.",
    category: 'bedroom',
    shipping: true,
  },
  {
    id: 'recymnpCGSxYUEvK2',
    name: 'Barcelona',
    price: 799999,
    image:
      'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
    featured: true,
    colors: ['#000', '#ff0000'],
    company: 'caressa',
    description:
      "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. City history museum MUHBA, includes several Roman archaeological sites.",
    category: 'living room',
    shipping: true,
  },
  {
    id: 'recR6BwJj72n1P9L6',
    name: 'London',
    price: 399999,
    image:
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    featured: true,
    colors: ['#000', '#00ff00'],
    company: 'ikea',
    description:
      'London is the capital and largest city of England and the United Kingdom. The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea.',
    category: 'office',
    shipping: true,
  },
]

module.exports = packages
