"use client"
import ProductCard from "@/components/ProductCard";
import { CategoryType, getCategories } from "@/service/getCategories";
import { getProducts, ProductsType } from "@/service/getProducts";
import { useState } from "react";
import { Pagination } from "@nextui-org/react";



export default function Home() {
  const [categoryName, setCategoryName] = useState<string | null>(null)
  const [tags, setTags] = useState<string | null>(null)
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(10)

  const categories: CategoryType[] = getCategories()
  const products: ProductsType[] = getProducts(categoryName, tags, page, setTotalPage)


  return (
    <main>
      <section className="mb-10 border-b-[2px] border-black">Hero Section</section>
      <section className="flex justify-between">
        <ul className="w-[20%] p-5 space-y-5">
          {[{ category_name: "All", category_id: null }, ...categories].map((item: CategoryType) => <li onClick={() => setCategoryName(item.category_name)} className="cursor-pointer" key={item.category_id}>{item.category_name}</li>)}
        </ul>
        <div className="w-[80%]">
          <ul className="flex items-center space-x-5">
            <li className={`cursor-pointer ${tags == null && "text-green-500"}`} onClick={() => setTags(null)}>All Plants</li>
            <li className={`cursor-pointer ${tags == "new-arrivals" && "text-green-500"}`} onClick={() => setTags("new-arrivals")}>New Arrivals</li>
            <li className={`cursor-pointer ${tags == "sale" && "text-green-500"}`} onClick={() => setTags("sale")}>Sale</li>
          </ul>
          <div className="flex justify-between flex-wrap gap-5">
            {products ? products.map((item: ProductsType) => <ProductCard key={item.product_id} item={item} />) : "Empty..."}
          </div>
          <div className="flex justify-end p-10">
            <Pagination onChange={(e) => setPage(e)} color='success' size="lg" initialPage={page} total={totalPage / 6} />
          </div>
        </div>
      </section>
    </main>
  );
}
