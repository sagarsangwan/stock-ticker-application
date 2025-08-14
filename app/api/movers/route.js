import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://portal.tradebrains.in/api/assignment/index/NIFTY/movers/",
      { next: { revalidate: 30 } }
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: "failed to fetch data " },
        { status: 500 }
      );
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
