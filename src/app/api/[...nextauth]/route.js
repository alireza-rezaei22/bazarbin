import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials"; // ✅ تغییر کلیدی!
import bcrypt from "bcryptjs";
import userModel from "@/model/user";

export const authOptions = {
  providers: [
    Credentials({
      credentials:{

        phone: { label: "phone", type: "text" },
        password: { label: "Password", type: "password" }
      },
    async authorize(credentials) {
      console.log('validation');
        const user = await userModel.findOne({ phone: credentials.phone })
        if (!user) {
          console.log('user is not found');
          return null
        }
        
        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) {
          console.log('pass is not correct');
          return null
        }
        
        
        return { id: user.id, phone: user.phone };
      }

    })
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login-register" }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };