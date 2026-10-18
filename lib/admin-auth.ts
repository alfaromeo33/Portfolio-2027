import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "portfolio_admin";
// The admin password is already server-only, so it also signs the session cookie.
const secret = () => process.env.ADMIN_PASSWORD || "";

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export function isAdminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && secret());
}

export function passwordMatches(password: string) {
  const expected = process.env.ADMIN_PASSWORD || "";
  return Boolean(expected && password.length === expected.length && timingSafeEqual(Buffer.from(password), Buffer.from(expected)));
}

export async function setAdminSession() {
  const timestamp = String(Date.now());
  const value = `${timestamp}.${sign(timestamp)}`;
  (await cookies()).set(COOKIE, value, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 7 });
}

export async function clearAdminSession() { (await cookies()).delete(COOKIE); }

export async function isAdmin() {
  if (!isAdminConfigured()) return false;
  const value = (await cookies()).get(COOKIE)?.value || "";
  const [timestamp, signature] = value.split(".");
  if (!timestamp || !signature || Date.now() - Number(timestamp) > 1000 * 60 * 60 * 24 * 7) return false;
  const expected = sign(timestamp);
  return signature.length === expected.length && timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}
