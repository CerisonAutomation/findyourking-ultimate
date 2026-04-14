import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const createProfileSchema = z.object({
  displayName: z
    .string()
    .min(2, "Display name must be at least 2 characters")
    .max(50, "Display name must be at most 50 characters"),
  bio: z
    .string()
    .max(500, "Bio must be at most 500 characters")
    .optional()
    .default(""),
  age: z
    .number()
    .int("Age must be a whole number")
    .min(18, "Must be at least 18 years old")
    .max(120, "Invalid age"),
  gender: z.enum(["man", "woman", "nonbinary", "other"]),
  lookingFor: z.enum(["men", "women", "everyone"]),
  city: z.string().min(1, "City is required").max(100),
  country: z.string().min(1, "Country is required").max(100),
  ageMin: z
    .number()
    .int()
    .min(18, "Minimum age must be at least 18")
    .max(120)
    .optional()
    .default(18),
  ageMax: z
    .number()
    .int()
    .min(18)
    .max(120, "Maximum age must be at most 120")
    .optional()
    .default(60),
  maxDistanceKm: z
    .number()
    .int()
    .min(1, "Distance must be at least 1 km")
    .max(20000, "Distance must be at most 20,000 km")
    .optional()
    .default(100),
});

export const updateProfileSchema = createProfileSchema.partial();

export const matchActionSchema = z.object({
  targetProfileId: z.string().min(1, "Target profile ID is required"),
  action: z.enum(["like", "pass", "superlike"]),
});

export const sendMessageSchema = z.object({
  conversationId: z.string().min(1, "Conversation ID is required"),
  content: z
    .string()
    .min(1, "Message cannot be empty")
    .max(2000, "Message is too long"),
  type: z.enum(["text", "image", "gif"]).default("text"),
});

export const createReportSchema = z.object({
  reportedProfileId: z.string().min(1, "Reported profile ID is required"),
  reason: z.enum([
    "spam",
    "fake_profile",
    "inappropriate_photos",
    "harassment",
    "underage",
    "other",
  ]),
  description: z
    .string()
    .min(10, "Please provide more detail (at least 10 characters)")
    .max(1000, "Description is too long"),
});

export const updateSettingsSchema = z.object({
  ageMin: z.number().int().min(18).max(120).optional(),
  ageMax: z.number().int().min(18).max(120).optional(),
  maxDistanceKm: z.number().int().min(1).max(20000).optional(),
  lookingFor: z.enum(["men", "women", "everyone"]).optional(),
  notifications: z
    .object({
      newMatch: z.boolean().optional(),
      newMessage: z.boolean().optional(),
      profileLike: z.boolean().optional(),
      email: z.boolean().optional(),
      push: z.boolean().optional(),
    })
    .optional(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type CreateProfileInput = z.infer<typeof createProfileSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type MatchActionInput = z.infer<typeof matchActionSchema>;
export type SendMessageInput = z.infer<typeof sendMessageSchema>;
export type CreateReportInput = z.infer<typeof createReportSchema>;
export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>;
