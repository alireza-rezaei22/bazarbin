import Navbar from "@/Components/modules/navbar/Navbar";
import BottomNav from "@/Components/template/bottomNav/BottomNav";
import Category from "@/Components/template/category/Category";
import Products from "@/Components/modules/products/Products";
import Filter from "@/Components/modules/filter/Filter";
import productModel from "@/model/product";
import connectToDB from "@/configs/DB";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import SetUserComponent from "@/Components/modules/setUserComponent/setUserComponent";

export default async function Home() {
  // const allProducts = fetch('/')
  let allProducts = null
  let userData = null
  try {
    connectToDB()
    allProducts = await productModel.find({}, '-__v')
    // console.log(allProducts);
    const token = cookies().get('token')?.value
    userData = verify(token, process.env.ACCESSTOKEN_SECRETKEY)
    console.log(userData);
    // setUserComponent(userData)
  } catch {
    
  }


  return (
    <>
      <Navbar />
      <SetUserComponent userData={userData} />
      <main className="flex flex-col md:flex-row md:mx-[5%]">
        <div className="md:w-1/5 md:h-fit md:flex-col md:items-start md:m-2  md:space-y-2">
          <Category />
          <Filter />
        </div>
        <Products products={allProducts} />
      </main>
      <BottomNav />
    </>
  );
}
