import * as z from "zod";
// login
export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
//register
export const registerSchema = z
  .object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

// forgetpass
export const forgotPasswordSchema = z.object({
  email: z.email(),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

// reset pass
export const resetPasswordSchema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
