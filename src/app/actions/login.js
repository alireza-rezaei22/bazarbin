"use server";
import connectToDB from "@/configs/DB";
import userModel from "@/model/user";
import { loginSchema } from "@/validation/validation";
import bcrypt from "bcryptjs"
import {sign} from "jsonwebtoken"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import { signIn } from "next-auth/react";
// import { headers } from "next/headers";


const loginAction = async (prevState, formData) => {
    const phone = formData.get('phone')
    const password = formData.get('password')
    const validationResult = loginSchema.safeParse({ phone, password })
    if (validationResult.success) {
        try {
            // await signIn('credentials',{
            //     phone,
            //     password
            // })
            // const headersList = headers();
            // const host = headersList.get("host"); // مثلاً "localhost:3000" یا "yoursite.vercel.app"
            // const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
            // const url = `${protocol}://${host}/api/auth/callback/credentials`;
            // const url = `http://localhost:3000/api/auth/callback/credentials`;


            // const res = await fetch(url, {
            //     method:"POST",
            //     headers:{"Content-Type": "application/x-www-form-urlencoded"},
            //     body: new URLSearchParams({
            //         phone: phone?.toString() || "",
            //         password: password?.toString() || "",
            //       }),
            // })
            // if (res.status === 302) {
            //     redirect("/dashboard");
            //   }
            connectToDB()
            const user = await userModel.findOne({ phone })
            if (user) {
                const isValidPassword = await bcrypt.compare(password, user.password)
                if (isValidPassword) {
                    const token = sign({id: user.id, name: user.name, phone: user.phone}, process.env.ACCESSTOKEN_SECRETKEY,{expiresIn:'1d'})
                    console.log(token);
                    cookies().set({
                        name: 'token',
                        value: token,
                        httpOnly: true,
                        path: '/',
                    })
                    return {
                        message: "با موفقیت لاگین شدید :)",
                        error: undefined,
                        inputs: {
                            phone: validationResult.phone,
                            password: validationResult.password,
                        }
                    }
                    // redirect('/')
                } else {
                    return {
                        message: "تلفن یا گذرواژه اشتباه است :(",
                        error: "ether phone or password is wrong",
                        inputs: {
                            phone: validationResult.phone,
                            password: validationResult.password,
                        }
                    }
                }

            } else {
                return {
                    message: "کاربر با یافت نشد :(",
                    error: validationResult.error?.issues[0].message,
                    inputs: {
                        phone: validationResult.phone,
                        password: validationResult.password,
                    }
                }
            }

        } catch {
            // console.log(validationResult);
            return {
                message: "اشکالی در سمت سرور پیش آمده :(",
                error: validationResult.error?.issues[0].message,
                inputs: {
                    phone: validationResult.phone,
                    password: validationResult.password,
                }
            }
        }
    } else {
        return {
            message: "لطفا اطلاعات رو درست وارد کنید :(",
            error: validationResult.error?.issues[0].message,
            inputs: {
                phone: validationResult.phone,
                password: validationResult.password,
            }
        }
    }

}
export default loginAction