import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModels";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const LoadDB = async (): Promise<void> => {
  await ConnectDB();
};

LoadDB();

export async function GET(request: NextRequest): Promise<NextResponse> {
  await LoadDB(); // Ensure the DB connection is established
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { title, description } = await request.json();

  await TodoModel.create({
    title,
    description,
  });

  return NextResponse.json({ msg: "Todo Created" });
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const mongoId = request.nextUrl.searchParams.get("mongoId");
  if (!mongoId) {
    return NextResponse.json({ msg: "Todo ID is required" }, { status: 400 });
  }

  await TodoModel.findByIdAndDelete(mongoId);

  return NextResponse.json({ msg: "Todo Deleted" });
}

export async function PUT(request: NextRequest): Promise<NextResponse> {
  const mongoId = request.nextUrl.searchParams.get("mongoId");
  if (!mongoId) {
    return NextResponse.json({ msg: "Todo ID is required" }, { status: 400 });
  }

  await TodoModel.findByIdAndUpdate(mongoId, {
    $set: {
      isCompleted: true,
    },
  });

  return NextResponse.json({ msg: "Todo Completed" });
}
