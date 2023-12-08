import { z } from 'zod';

export const createTourValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'name must be an string',
    required_error: 'Name is required please tell us tour name',
  }),
  durationHours: z.number().positive(),
  ratingAverage: z.number().positive(),
  ratingQuantity: z.number().positive(),
  price: z.number().positive(),
  imageCover: z.string(),
  images: z.array(z.string()).optional(),
  createdAt: z.string(),
  availableSeats: z.number(),
  startDates: z.array(z.string()),
  startLocation: z.string(),
  location: z.array(z.string()),
  slug: z.string().optional(),
});
