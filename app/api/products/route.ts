import { NextResponse } from "next/server";
import { listProducts } from "@/lib/store";
export const dynamic="force-dynamic";
export async function GET(){ try{return NextResponse.json({products:await listProducts(false)});}catch(e:any){return NextResponse.json({error:e.message},{status:500});} }
