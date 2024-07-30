import {
  DefaultSchema,
  AddOfferSchema,
  EditOfferSchema,
  AddCategorySchema,
  EditCategorySchema,
  EditProductSchema,
  AddProductSchema,
  EditRestuarantSchema,
  AddRestuarantSchema
} from '@settings/zodSchemes'

export function getSchema(whatIs: string) {
  switch (whatIs) {
    case 'EditProduct':
      return EditProductSchema
      break
    case 'AddProduct':
      return AddProductSchema
      break
    case 'EditCategory':
      return EditCategorySchema
      break
    case 'AddCategory':
      return AddCategorySchema
      break
    case 'AddRestaurant':
      return AddRestuarantSchema
      break
    case 'EditRestaurant':
      return EditRestuarantSchema
      break
    case 'AddOffer':
      return AddOfferSchema
      break
    case 'EditOffer':
      return EditOfferSchema
      break
    default:
      return DefaultSchema
      break
  }
}

export const getDefaultValues = (whatIs: string) => {
  switch (whatIs) {
    case 'EditProduct':
      return {
        name: '',
        description: '',
        price: '00.00',
        restaurant: ''
      }
      break
    case 'AddProduct':
      return {
        name: '',
        description: '',
        price: '00.00',
        restaurant: ''
      }
      break
    case 'EditCategory':
      return {
        name: '',
        slug: ''
      }
      break
    case 'AddCategory':
      return {
        name: ''
      }
      break
    case 'AddRestaurant':
      return {
        name: '',
        cuisine: '',
        deliveryMin: '',
        deliveryPrice: '00.00',
        address: '',
        category: ''
      }
      break
    case 'EditRestaurant':
      return {
        name: '',
        cuisine: '',
        deliveryMin: '',
        deliveryPrice: '00.00',
        address: '',
        category: ''
      }
      break
    case 'AddOffer':
      return {
        title: '',
        description: ''
      }
      break
    case 'EditOffer':
      return {
        title: '',
        description: ''
      }
      break
    default:
      return {
        file: FileList,
        name: '',
        description: '',
        price: '',
        restaurants: '',
        cuisine: '',
        deliveryPrice: '',
        deliveryMin: '',
        address: '',
        category: '',
        title: '',
        slug: ''
      }
      break
  }
}
