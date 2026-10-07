export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.zograha.com");
}