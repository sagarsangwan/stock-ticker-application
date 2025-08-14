import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://portal.tradebrains.in/api/assignment/index/NIFTY/movers/"
    );
    if (!response.ok) {
      return NextResponse.json(
        { error: "failed to fetch data " },
        { status: 500 }
      );
    }
    const data = await response.json();
    console.log(data, "dataaaaaaaaaaaa fro api");
    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "failed to fetch data " },
      { status: 500 }
    );
  }
}
