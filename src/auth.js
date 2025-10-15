import { getServerSession } from "next-auth";
import { authOptions } from "./app/api/[...nextauth]/route";

export const auth =()=>{
    getServerSession(authOptions)
}