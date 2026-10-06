const e = (k: string, d = "") => process.env[k] ?? d;

export function getSiteConfig() {
  const phone = e("COMPANY_PHONE");
  const email = e("COMPANY_EMAIL");
  const wa = e("WHATSAPP_NUMBER").replace(/\D/g, "");
  const social = {
    linkedin: e("SOCIAL_LINKEDIN"),
    instagram: e("SOCIAL_INSTAGRAM"),
    facebook: e("SOCIAL_FACEBOOK"),
    x: e("SOCIAL_X"),
    youtube: e("SOCIAL_YOUTUBE"),
  };
  return {
    name: e("COMPANY_NAME", "Zograha Technologies"),
    siteUrl: e("SITE_URL", "https://www.zograha.com"),
    phone,
    email,
    address: e("COMPANY_ADDRESS"),
    links: {
      call: phone ? `tel:${phone}` : null,
      email: email ? `mailto:${email}` : null,
      whatsapp: wa ? `https://wa.me/${wa}?text=${encodeURIComponent("Hi Zograha Technologies, I'd like to know more about your services.")}` : null,
    },
    googleMapsEmbedUrl: e("GOOGLE_MAPS_EMBED_URL") || null,
    social: Object.fromEntries(Object.entries(social).filter(([, v]) => v)),
  };
}
