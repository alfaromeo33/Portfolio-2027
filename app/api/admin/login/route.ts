import { NextResponse } from "next/server";
import { isAdminConfigured, passwordMatches, setAdminSession } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isAdminConfigured()) return NextResponse.json({ error: "ADMIN_PASSWORD와 ADMIN_SESSION_SECRET을 Vercel 환경변수에 설정하세요." }, { status: 503 });
  const { password } = await request.json().catch(() => ({ password: "" }));
  if (typeof password !== "string" || !passwordMatches(password)) return NextResponse.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
  await setAdminSession();
  return NextResponse.json({ ok: true });
}
