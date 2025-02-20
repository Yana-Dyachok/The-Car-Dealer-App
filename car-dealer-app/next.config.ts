import type { NextConfig } from 'next';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
export const GET_MAKES_URL = process.env.NEXT_PUBLIC_GET_MAKES_URL as string;

export const GET_MODELS_URL = (makeId: string, year: string) =>
  `${BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
