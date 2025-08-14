import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const searchParams = request.nextUrl.searchParams;
  const days = searchParams.get("days") || "1";
  const type = searchParams.get("type") || "INTRADAY";
  const limit = searchParams.get("limit") || "1000";
  const { symbol } = await params;
  try {
    const response = await fetch(
      `https://portal.tradebrains.in/api/assignment/stock/${symbol}/prices?days=${days}&type=${type}&limit=${limit}`
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: "something went wrong to external api" },
        { status: 500 }
      );
    }
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "something went wrong to external api" },
      { status: 500 }
    );
  }
}
