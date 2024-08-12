import { Account, Client, Databases, ID, Query, Storage } from 'appwrite'

//=============================================
const dbId = `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID}`
const endpoint = `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}`
const apikey = `${process.env.NEXT_APPWRITE_API_KEY}`
const projectId = `${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`

// stogage ID
const avatarId = `${process.env.NEXT_PUBLIC_APPWRITE_AVATAR}`

//=============================================

const client = new Client().setEndpoint(endpoint).setProject(projectId)
const account = new Account(client)
const databases = new Databases(client)
const storage = new Storage(client)


//=============================================

const collections = {
  userId: `${process.env.NEXT_PUBLIC_APPWRITE_USERS_ID}`,
  productsId: `${process.env.NEXT_PUBLIC_APPWRITE_PRODUCTS_ID}`,
  categoriesId: `${process.env.NEXT_PUBLIC_APPWRITE_CATAGORIES_ID}`,
  restaurantsId: `${process.env.NEXT_PUBLIC_APPWRITE_RESTAURANTS_ID}`,
  ordersId: `${process.env.NEXT_PUBLIC_APPWRITE_ORDERS_ID}`,
  offersId: `${process.env.NEXT_PUBLIC_APPWRITE_OFFERS_ID}`,
  basketId: `${process.env.NEXT_PUBLIC_APPWRITE_BASKET_ID}`
}

//=============================================

export { account, apikey, avatarId, client, collections, databases, dbId, endpoint, ID, projectId, Query, storage }

