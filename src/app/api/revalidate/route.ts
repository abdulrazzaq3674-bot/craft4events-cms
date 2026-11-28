import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

function isAuthorized(req: NextRequest): boolean {
  const configuredSecret = process.env.REVALIDATE_SECRET;
  if (!configuredSecret) return true;

  const querySecret = req.nextUrl.searchParams.get("secret");
  const headerSecret = req.headers.get("x-revalidate-secret");
  return querySecret === configuredSecret || headerSecret === configuredSecret;
}

function triggerRevalidation() {
  revalidateTag("wp-content", "max");
  revalidatePath("/");
  revalidatePath("/gallery");
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ revalidated: false, error: "Invalid secret" }, { status: 401 });
  }

  triggerRevalidation();
  return NextResponse.json({ revalidated: true, now: Date.now() });
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ revalidated: false, error: "Invalid secret" }, { status: 401 });
  }

  triggerRevalidation();
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
