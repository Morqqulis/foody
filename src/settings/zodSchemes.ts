import { z } from 'zod'

const SignUpFormSchema = z.object({
   fullName: z
      .string({
         required_error: 'Full name is required.',
         invalid_type_error: 'Full name must be a string.'
      })
      .min(2, {
         message: 'Full name must be at least 2 characters.'
      }),
   userName: z
      .string({
         required_error: 'Username is required.'
      })
      .min(2, {
         message: 'Username must be at least 2 characters.'
      }),
   email: z
      .string({
         required_error: 'Email is required.'
      })
      .email({
         message: 'Please enter a valid email.'
      }),
   password: z
      .string({
         required_error: 'Password is required.'
      })
      .min(6, {
         message: 'Password must be at least 6 characters.'
      })
   //   .regex(
   //      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
   //      {
   //         message:
   //            'Password must have at least one uppercase, one lowercase, one number and one special character.'
   //      }
   //   )
})

const SignInFormSchema = z.object({
   userName: z
      .string({
         required_error: 'Username is required.'
      })
      .min(2, {
         message: 'Username must be at least 2 characters.'
      }),

   password: z
      .string({
         required_error: 'Password is required.'
      })
      .min(6, {
         message: 'Password must be at least 6 characters.'
      })
})

export { SignUpFormSchema, SignInFormSchema }
