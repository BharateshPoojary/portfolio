"use client";
import { z } from "zod";
export const contactSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "userName must be atleast 2 characters" })
    .max(50, { message: "userName should not exceed 50 characters" }),
  message: z
    .string()
    .min(5, { message: "message must be atleast 5 characters" }),
});
