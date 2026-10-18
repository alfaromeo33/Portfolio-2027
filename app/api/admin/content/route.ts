import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getPortfolioContent, savePortfolioContent, type PortfolioContent } from "@/lib/content";

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json(await getPortfolioContent());
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => null) as PortfolioContent | null;
  if (!body?.site || !Array.isArray(body.projects)) return NextResponse.json({ error: "잘못된 콘텐츠 형식입니다." }, { status: 400 });
  await savePortfolioContent(body);
  return NextResponse.json({ ok: true });
}
