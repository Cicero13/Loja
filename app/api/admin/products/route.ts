import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { saveProduct } from "@/lib/store";
export async function POST(request:Request){ if(!await isAdminRequest(request))return NextResponse.json({error:"Não autorizado"},{status:401}); try{return NextResponse.json({id:await saveProduct(await request.json())});}catch(e:any){return NextResponse.json({error:e.message},{status:400});} }
