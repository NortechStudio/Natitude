import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Normalizes multiple string variables or conditional states into an optimized Tailwind layout class list.
 * @param inputs - Array list of potential structural styles, expressions, or logical triggers.
 * @returns An updated, clean string containing active layout instructions.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}