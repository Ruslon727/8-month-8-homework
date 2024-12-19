"use client"
import { Context } from "@/context/AuthContext"
import { instance } from "@/hook/instance"
import { ProductsType } from "@/service/getProducts"
import { useQuery } from "@tanstack/react-query"
import { useContext, useEffect, useState } from "react"

const page = () => {
  const { token } = useContext(Context)
  const { data = [] } = useQuery({
    queryKey: ['basket_get_all'],
    queryFn: () => token ? instance().get("/basket", {
      headers: { "Authorization": `Bearer ${token}` },
      params: { page: 1, limit: 1000 }
    }).then(res => res.data.ProductId) : []
  })

  const [basketProducts, setBasketProducts] = useState<ProductsType[]>(data.map((item: ProductsType) => {
    item.count = 0
    item.totalPrice = item.count * item.cost
    return item
  }))

  useEffect(() => {
    if (data.length > 0) {
      setBasketProducts(data)
    }
  }, [data])
  




  return (
    <div>Products Basket Get All</div>
  )
}

export default page