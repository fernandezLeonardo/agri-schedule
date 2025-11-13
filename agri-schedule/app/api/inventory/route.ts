import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

// GET all inventory items
export async function GET() {
  try {
    const items = await prisma.inventoryItem.findMany({
      orderBy: { name: "asc" },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error("GET INVENTORY ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch inventory" },
      { status: 500 }
    );
  }
}

// CREATE a new inventory item
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const item = await prisma.inventoryItem.create({
      data: {
        name: data.name,
        quantity: data.quantity,
        condition: data.condition,
      },
    });

    return NextResponse.json(item);
  } catch (error: any) {
    console.error("POST INVENTORY ERROR:", error);

    // Handle duplicate "name"
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Item with this name already exists." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create inventory item" },
      { status: 500 }
    );
  }
}
