"use server";
import connectToDB from "@/configs/DB";
import userModel from "@/model/user";
import { registerSchema } from "@/validation/validation";
import bcrypt from 'bcryptjs'

const register = async (prevState, formData) => {
    // const userInputs = {
        const name= formData.get('name')
        const phone= formData.get('phone')
        const password= formData.get('password')
        const confirmPassword= formData.get('confirmPassword')

    // }
    const validationResult = registerSchema.safeParse({name, phone, password, confirmPassword})
    if (validationResult.success) {
        try {
            connectToDB()
            const isUserExist = await userModel.findOne({ phone }) ? true : false
            if (isUserExist) {
                console.log('isUserExist: ', isUserExist);
                return {
                    message: "کاربر از قبل وجود دارد :(",
                    error: validationResult.error?.issues[0].message,
                    inputs: {
                        name: userInputs.name,
                        phone: userInputs.phone,
                        password: userInputs.password,
                        confirmPassword: userInputs.confirmPassword
                    }
                }
            } else {
                const hashedPassword = await bcrypt.hash(password, 10)
                await userModel.create({
                    name,
                    phone,
                    password: hashedPassword
                })
                return {
                    message: "کاربر با موفقیت ثبت شد :)",
                    error: validationResult.error?.issues[0].message,
                    inputs: {
                        name,
                        phone,
                        password,
                        confirmPassword
                    }
                }
            }
        } catch {
            return {
                message: "اشکالی در سمت سرور وجود دارد :)",
                error: validationResult.error?.issues[0].message,
                inputs: {
                    name,
                    phone,
                    password,
                    confirmPassword
                }
            }
        }
    } else {
        return {
            message: "اطلاعات وارد شده معتبر نیست :(",
            error: validationResult.error.issues[0].message,
            inputs: {
                name: userInputs.name,
                phone: userInputs.phone,
                password: userInputs.password,
                confirmPassword: userInputs.confirmPassword
            }
        }
    }

}
export default register