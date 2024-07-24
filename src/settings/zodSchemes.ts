import { any, z } from "zod";

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
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    }),
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email({
      message: "Please enter a valid email.",
    }),
  password: z
    .string({
      required_error: "Password is required.",
    })
    .min(2, {
      message: "Password must be at least 2 characters.",
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
    .min(2, {
      message: "Password must be at least 6 characters.",
    }),
});

export const ProductSchema = z.object({
  Name: z
    .string({
      required_error: "Name is required.",
    })
    .min(2, {
      message: "Name must be at least 2 characters.",
    }),

  Description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  Price: z.number({ required_error: "Price is required.", invalid_type_error: "Price must be a number" }),
  File: z.any(),
  Restaurants: z.string({ required_error: "Restaurants is required." }),
});

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