import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(1),
  bio: z.string().min(1),
  country: z.string().min(1),
  details: z.string(),
  email: z.string().email(),
  portfolio: z.string().url('Invalid portfolio URL').optional(),
  tags: z.string().array().nonempty(),
  github: z.string().url('Invalid GitHub URL').optional(),
  linkedin: z.string().url('Invalid LinkedIn URL').optional(),
  twitter: z.string().url('Invalid Twitter URL').optional(),
  website: z.string().url('Invalid Website URL').optional(),
  other: z.string().optional(),
  wallet: z.string().min(1).optional(),
  funding_goal: z.number().min(1),
  image: z.string().url('Invalid image URL').optional(),
  banner_image: z.string().url('Invalid banner image URL').optional(),
});
