import {z} from 'zod';

export const registerSchema = z.object({
    name: z.string().min(2, 'نام حداقل باید 2 کاراکتر باشد').max(15,'نام حداکثر می تواند 15 کاراکتر داشته باشد'),
    phone: z.string().length(11, 'شماره تلفن باید 11 رقم باشد'),
    password: z.string().min(4, 'گذرواژه باید حداقل 4 کاراکتر باشد').max(12,'گذرواژه باید حداکثر 12 کاراکتر باشد'),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword,{
    message:'گذرواژه و تکرار همخوانی ندارد'
    
})

export const loginSchema = z.object({
    phone: z.string().length(11, 'شماره تلفن باید 11 رقم باشد'),
    password: z.string().min(4, 'گذرواژه باید حداقل 4 کاراکتر باشد').max(12,'گذرواژه باید حداکثر 12 کاراکتر باشد'),
})

export const newProductSchema = z.object({
    // image: z.object(),
    title: z.string().min(2, 'عنوان باید حداقل 2 کاراکتر باشد').max(20,'عنوان باید حداکثر 20 کاراکتر باشد'),
    // description: z.string(),
    city: z.string().min(2, 'شهر باید حداقل 2 کاراکتر باشد').max(20,'شهر باید حداکثر 20 کاراکتر باشد'),
    condition: z.enum(['new','as_new','worked']),
    price: z.string().min(1, 'قیمت الزامی است').transform(val => Number(val)).refine(val => !isNaN(val), 'قیمت باید عدد باشد')
})