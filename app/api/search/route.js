import { NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query" || "");
  const length = searchParams.get("length" || 10);
  try {
    const response = await fetch(
      `https://portal.tradebrains.in/api/assignment/search?keyword=${query.toUpperCase()}&length=${length}`
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: "something went wrong" },
        { status: 500 }
      );
    }
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: "something went wrong with external api",
      },
      { status: 500 }
    );
  }
}
