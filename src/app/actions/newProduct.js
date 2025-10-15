"use server"
import connectToDB from "@/configs/DB";
import { newProductSchema } from "@/validation/validation";
import productModel from "@/model/product";


const NewProductAction = async (prevState, formData) => {
    const image = formData.get('image')
    const BufferImg = Buffer.from(await image.arrayBuffer())
    const title = formData.get('title')
    const description = formData.get('description')
    const city = formData.get('city')
    const condition = formData.get('condition')
    const price = formData.get('price')
    const location = formData.get('location')?.split(',')
    const validationResult = newProductSchema.safeParse({ BufferImg, title, description, city, condition, price })

    console.log(validationResult);

    if (validationResult.success) {
        try {
            connectToDB()
            await productModel.create({
                image: BufferImg,
                title,
                description,
                city,
                condition,
                price,
                location: location
            })
            return {
                message: "آگهی با موفقیت ثبت شد :)",
                error: undefined,
                inputs: {
                    image: '',
                    title: '',
                    description: '',
                    city: '-1',
                    condition: '-1',
                    price: '',
                    location: ''
                }
            }
        } catch {
            return {
                message: "اشکالی در اتصال به سرور وجود دارد :(",
                error: validationResult.error?.issues[0].message,
                inputs: {
                    image,
                    title,
                    description,
                    city,
                    condition,
                    price,
                    location
                }
            }
        }
    }
    // return {
    //     massage: '',
    //     error: undefined,
    //     inputs: {
    //         image: image,
    //         title: title,
    //         description: description,
    //         city: city,
    //     }
    // }
}
export default NewProductAction