import { z } from "zod";

export const SignUpFormSchema = z.object({
  fullName: z
    .string({
      required_error: "Full name is required.",
      invalid_type_error: "Full name must be a string.",
    })
    .min(2, {
      message: "Full name must be at least 2 characters.",
    }),
  userName: z
    .string({
      required_error: "Username is required.",
      invalid_type_error: "Username must be a string.",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),
  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .email({
      message: "Please enter a valid email.",
    }),
  password: z
    .string({
      required_error: "Password is required.",
      invalid_type_error: "Password must be a string.",
    })
    .min(8, {
      message: "Password must be at least 8 characters.",
    }),
  //   .regex(
  //      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
  //      {
  //         message:
  //            'Password must have at least one uppercase, one lowercase, one number and one special character.'
  //      }
  //   )
});

export const SignInFormSchema = z.object({
  email: z
    .string({
      required_error: "Username is required.",
    })
    .email({
      message: "Please enter a valid email.",
    }),

  password: z
    .string({
      required_error: "Password is required.",
    })
    .min(8, {
      message: "Password must be at least 8 characters.",
    }),
});

// export const ProductSchema = z.object({
//   name: z
//     .string({
//       required_error: "Name is required.",
//     })
//     .min(2, {
//       message: "Name must be at least 2 characters.",
//     }),

//   description: z.string().min(2, {
//     message: "Description must be at least 2 characters.",
//   }),
//   price: z.string({ required_error: "Price is required.", invalid_type_error: "Price must be a number" }),

//   restaurant: z.string({ required_error: "Restaurants is required." }),
  
// });

// export const EditCategorySchema = z.object({
//   name: z
//     .string({
//       required_error: "Name is required.",
//     })
//     .min(2, {
//       message: "Name must be at least 2 characters.",
//     }),
//   slug: z
//     .string({
//       required_error: "Slug is required.",
//     })
//     .min(2, {
//       message: "Slug must be at least 2 characters.",
//     }),
// });

// export const AddCategorySchema = z.object({
//   name: z
//     .string({
//       required_error: "Name is required.",
//     })
//     .min(2, {
//       message: "Name must be at least 2 characters.",
//     }),
// });

// export const RestuarantSchema = z.object({
//   name: z
//     .string({
//       required_error: "Name is required.",
//     })
//     .min(2, {
//       message: "Name must be at least 2 characters.",
//     }),

//   cuisine: z
//     .string({
//       required_error: "Cuisine is required.",
//     })
//     .min(2, {
//       message: "Name must be at least 2 characters.",
//     }),
//   deliveryMin: z.string({
//     required_error: "DeliveryMin is required.",
//   }),
//   deliveryPrice: z.string({
//     required_error: "DeliveryPrice is required.",
//   }),
//   address: z
//     .string({
//       required_error: "Adress is required.",
//     })
//     .min(2, {
//       message: "Adress must be at least 2 characters.",
//     }),
//   category: z
//     .string({
//       required_error: "Category is required.",
//     })
//     .min(2, {
//       message: "Adress must be at least 2 characters.",
//     }),
// });

export const AdminLoginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required.",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),
  password: z
    .string({
      required_error: "Password is required.",
    })
    .min(2, {
      message: "Password must be at least 6 characters.",
    }),
});

// export const OfferSchema = z.object({
//   title: z
//     .string({
//       required_error: "Title is required.",
//     })
//     .min(2, {
//       message: "Title must be at least 2 characters.",
//     }),
//   description: z
//     .string({
//       required_error: "Description is required.",
//     })
//     .min(2, {
//       message: "Description must be at least 2 characters.",
//     }),
// });

// export const DefaultSchema = z.object({
//   file: z.any(),
//   name: z.string(),
//   description: z.string(),
//   price: z.string(),
//   restaurants: z.string(),
//   cuisine: z.string(),
//   deliveryPrice: z.string(),
//   deliveryMin: z.string(),
//   address: z.string(),
//   category: z.string(),
//   title: z.string(),
//   slug: z.string(),
// });
