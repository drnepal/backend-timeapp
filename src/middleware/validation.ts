import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validate =
  (schema: z.ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        errors: result.error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      });
      return;
    }
    next();
  };

export const emailSignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const phoneSignupSchema = z.object({
  phone: z.string().min(10).max(15),
});

export const userProfileSchema = z.object({
  dateOfBirth: z.string(),
  sex: z.enum(['Male', 'Female', 'Other']),
});
