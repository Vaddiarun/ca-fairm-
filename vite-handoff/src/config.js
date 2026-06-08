export const WA_NUMBER = "919030158713";
export const BRAND = "JSK Associates";
export const BRAND_FULL = "JSK Associates Consulting Pvt";

export function wa(message) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
export function buyMsg(name, title, price) {
  return `Hi ${BRAND}, I'd like to go ahead with the *${name}* plan — ${title} (${price}). Coupon: OFFERITR. Please help me get started.`;
}
