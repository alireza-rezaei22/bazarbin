import connectToDB from "@/configs/DB";
import productModel from "@/model/product";
import mongoose from "mongoose";

export async function GET({}){
    // connectToDB()
    const products = productModel.find({})
    console.log(products);
}

export async function POST({req}){
    console.log(req);
}