import { z } from "zod";

// User schemas
export const createUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const updateUserSchema = z.object({
  email: z.string().email().optional(),
});

// Profile schemas
export const createProfileSchema = z.object({
  displayName: z.string().min(2, "Display name must be at least 2 characters").max(50),
  bio: z.string().max(500).optional(),
  age: z.number().int().min(18, "Must be at least 18").max(120),
});

export const updateProfileSchema = createProfileSchema.partial();

// Match schemas
export const matchActionSchema = z.object({
  targetProfileId: z.string().uuid("Invalid profile ID"),
  action: z.enum(["like", "pass", "superlike"]),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type CreateProfileInput = z.infer<typeof createProfileSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type MatchActionInput = z.infer<typeof matchActionSchema>;
