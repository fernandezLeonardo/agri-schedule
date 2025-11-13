import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function PATCH(req: Request, { params }: any) {
  try {
    const id = params.id;
    const data = await req.json();

    const updated = await prisma.inventoryItem.update({
      where: { id },
      data: {
        name: data.name,
        quantity: data.quantity,
        condition: data.condition,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("PATCH ERROR:", error);
    return NextResponse.json(
      { error: "Failed to update item" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: any) {
  try {
    const id = params.id;

    await prisma.inventoryItem.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 500 }
    );
  }
}
