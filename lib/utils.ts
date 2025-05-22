import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function encodeBase64(str: string): string {
  return btoa(unescape(encodeURIComponent(str)));
}
