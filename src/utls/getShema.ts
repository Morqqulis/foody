import { AddCategorySchema, DefaultSchema, EditCategorySchema, OfferSchema, ProductSchema, RestuarantSchema } from "@settings/zodSchemes";

export function getSchema(whatIs: string) {
    switch (whatIs) {
      case "EditProduct":
        
        return ProductSchema;
        break;
      case "AddProduct":
        return ProductSchema;
        break;
      case "EditCategory":
        return EditCategorySchema;
        break;
      case "AddCategory":
        return AddCategorySchema;
        break;
      case "AddRestaurant":
        return RestuarantSchema;
        break;
      case "EditRestaurant":
        return RestuarantSchema;
        break;
      case "AddOffer":
        return OfferSchema;
        break;
      case "EditOffer":
        return OfferSchema;
        break;
      default:
        return DefaultSchema;
        break;
    }
  }

  
export  const getDefaultValues = (whatIs: string) => {
    switch (whatIs) {
      case "EditProduct":
        return {
          name: "",
          description: "",
          price: "00.00",
          restaurants: "",
        };
        break;
      case "AddProduct":
        return {
          name: "",
          description: "",
          price: "00.00",
          restaurants: "",
        };
        break;
      case "EditCategory":
        return {
          name: "",
          slug: "",
        };
        break;
      case "AddCategory":
        return {
          name: "",
        };
        break;
      case "AddRestaurant":
        return {
          name: "",
          cuisine: "",
          deliveryMin: "",
          deliveryPrice: "00.00",
          adress: "",
          category: "",
        };
        break;
      case "EditRestaurant":
        return {
          name: "",
          cuisine: "",
          deliveryMin: "",
          deliveryPrice: "00.00",
          adress: "",
          category: "",
        };
        break;
      case "AddOffer":
        return {
          title: "",
          description: "",
        };
        break;
      case "EditOffer":
        return {
          title: "",
          description: "",
        };
        break;
      default:
        return {
          file: FileList,
          name: "",
          description: "",
          price: "",
          restaurants: "",
          cuisine: "",
          deliveryPrice: "",
          deliveryMin: "",
          adress: "",
          category: "",
          title: "",
          slug: "",
        };
        break;
    }
  };