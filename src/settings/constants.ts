const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}`
const auth = {
  signIn: `${baseUrl}/api/auth/signin`,
  signUp: `${baseUrl}/api/auth/signup`,
  refresh: `${baseUrl}/api/auth/refresh`,
  getUser: `${baseUrl}/api/user`,
  putUser: `${baseUrl}/api/user`
}

const upload = `${baseUrl}/api/uploads`

const products = {
  get: `${baseUrl}/api/products`,
  post: `${baseUrl}/api/products/`,

  putById: (id: string) => `${baseUrl}/api/products/${id}`,
  deleteById: (id: string) => `${baseUrl}/api/products/${id}`
}

const restuarant = {
  getAll: `${baseUrl}/api/restuarants`,
  post: `${baseUrl}/api/restuarants`,
  putById: (id: string) => `${baseUrl}/api/restuarants/${id}`,
  deleteById: (id: string) => `${baseUrl}/api/restuarants/${id}`,
  getById: (id: string) => `${baseUrl}/api/restuarants/${id}`
}

const basket = {
  get: `${baseUrl}/api/basket`,
  post: `${baseUrl}/api/basket/add`,
  delete: `${baseUrl}/api/basket/delete`,
  clear: `${baseUrl}/api/basket/clear`
}

const order = {
  get: `${baseUrl}/api/order`,
  post: `${baseUrl}/api/order`,
  delete: `${baseUrl}/api/order`,
  getUser: `${baseUrl}/api/order/user`,
  getHistory: `${baseUrl}/api/order/history`
}

const category = {
  get: `${baseUrl}/api/category`,
  post: `${baseUrl}/api/category`,
  getById: (id: string) => `${baseUrl}/api/category/${id}`,
  putById: (id: string) => `${baseUrl}/api/category/${id}`,
  deleteById: (id: string) => `${baseUrl}/api/category/${id}`
}

const offer = {
  get: `${baseUrl}/api/offer`,
  post: `${baseUrl}/api/offer`,
  getById: (id: string) => `${baseUrl}/api/offer/${id}`,
  putById: (id: string) => `${baseUrl}/api/offer/${id}`,
  deleteById: (id: string) => `${baseUrl}/api/offer/${id}`
}

export { auth, upload, products, restuarant, basket, order, category, offer }
