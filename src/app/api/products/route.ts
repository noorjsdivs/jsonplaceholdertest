import { productsData } from "@/constant";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    message: "Connection established successfully!",
    success: true,
    data: productsData,
  });
};
