const packages = [
  {
    id: 'recZkNf2kwmdBcqd0',
    name: 'Hawaii Package',
    price: 25999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
    shipping: true,
  },
  {
    id: 'recEHmzvupvT8ZONH',
    name: 'Paris Package',
    price: 109999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52',
    colors: ['#000', '#ffb900'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: ' Package',
  },
  {
    id: 'rec5NBwZ5zCD9nfF0',
    name: 'Italy Package',
    price: 309999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f',
    colors: ['#ffb900', '#0000ff'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'kitchen',
  },
  {
    id: 'recd1jIVIEChmiwhe',
    name: 'Disneyland Package',
    price: 12599,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f',
    colors: ['#000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bedroom',
    shipping: true,
  },
  {
    id: 'recoM2MyHJGHLVi5l',
    name: 'Japan Package',
    price: 4099,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66',
    colors: ['#000'],
    company: 'liddy',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'dining',
    shipping: true,
  },
  {
    id: 'recotY5Nh00DQFdkm',
    name: 'Rome Package',
    price: 42999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/7a38cf782907773d9900165530cfa583/d9f41960',
    colors: ['#00ff00', '#0000ff', '#ff0000'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'dining',
    shipping: true,
  },
  {
    id: 'rec1Ntk7siEEW9ha1',
    name: 'New York Package',
    price: 23999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b',
    colors: ['#0000ff', '#000'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'bedroom',
    shipping: true,
  },
  {
    id: 'recNZ0koOqEmilmoz',
    name: 'Spain Package',
    price: 59999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af',
    featured: true,
    colors: ['#000', '#ff0000'],
    company: 'caressa',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'living room',
    shipping: true,
  },
  {
    id: 'recrfxv3EwpvJwvjq',
    name: 'England Package',
    price: 39999,
    image:
      'https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f',
    featured: true,
    colors: ['#000', '#00ff00'],
    company: 'ikea',
    description:
      'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    category: 'office',
    shipping: true,
  },
]

module.exports = packages
