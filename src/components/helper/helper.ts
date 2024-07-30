export const translateUrl = (whatIs: string) => {
  let str: string;
  switch (whatIs) {
    case "EditProduct":
      str = `Products.EditProduct`;
      break;
    case "AddProduct":
      str = `Header`;
      break;
    case "EditCategory":
      str = `Category.EditCategory`;
      break;
    case "AddCategory":
      str = `Category.AddCategory`;
      break;
    case "AddRestaurant":
      str = `Restaurants.AddRestaurant`;
      break;
    case "EditRestaurant":
      str = `Restaurants.EditRestaurant`;
      break;
    case "AddOffer":
      str = `Offers.AddOffer`;
      break;
    case "EditOffer":
      str = `Offers.EditOffer`;
      break;
    default:
      str = `Header`;
      break;
  }

  return str;
};

export const restaurantData = (data: any) => {
  return {
    name: data.name != "" ? data.name : undefined,
    cuisine: data.cuisine != "" ? data.cuisine : undefined,
    deliveryMin: data.deliveryMin != "00.00" ? data.deliveryMin : undefined,
    deliveryPrice: data.deliveryPrice != "00.00" ? data.deliveryPrice : undefined,
    address: data.address != "" ? data.address : undefined,
    category: data.category != "" ? data.category : undefined,
  };
};

export const productData = (data: any) => {
  return {
    name: data.name != "" ? data.name : undefined,
    description: data.description != "" ? data.description : undefined,
    price: data.price != "00.00" ? data.price : undefined,
    restaurant: data.restaurant != "" ? data.restaurant : undefined,
  };
};
export const categoryData = (data: any) => {
  return {
    name: data.name != "" ? data.name : undefined,
    slug: data.slug != "" ? data.slug : undefined,
  };
};

export function readerFile(e: React.ChangeEvent<HTMLInputElement>, setFile: any, setFileUrl: any) {
  const selectedFile = e.target.files?.[0];
  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = function () {
      setFileUrl(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
    setFile(selectedFile);
  }
}
