require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appzuWMu7tb0XrmUm')
  .table('products')

exports.handler = async (event, context, cb) => {
  try {
    const { records } = await airtable.list()
    const products = records.map((product) => {
      const { id } = product
      const {
        name,
        price,
        featured,
        images,
        colors,
        company,
        description,
        category,
        shipping,
      } = product.fields
      const image = images[0].url

      return {
        id,
        name,
        price,
        featured,
        image,
        colors,
        company,
        description,
        category,
        shipping,
      }
    })
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 500,
      body: 'Server Error',
    }
  }
}
