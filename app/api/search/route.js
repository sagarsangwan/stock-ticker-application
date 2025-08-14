import { NextResponse } from "next/server";

export async function Get(request) {
  const searchParams = request.nextUrl.searchParams;
  console.log(searchParams);

  return NextResponse({ message: "hiiii" });
}
