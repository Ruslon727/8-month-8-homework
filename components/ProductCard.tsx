"use client"
import { Context } from "@/context/AuthContext"
import { instance } from "@/hook/instance"
import { KorzinaIcon, LikeIcon } from "@/public/icon/Icon"
import { ProductsType } from "@/service/getProducts"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Image from "next/image"
import React, { useContext } from "react"

const ProductCard: React.FC<{ item: ProductsType }> = ({ item }) => {
    const queryClient = useQueryClient()
    const { token } = useContext(Context)

    const likeMutation = useMutation({
        mutationFn: (id: string) => instance().post(`/like/${id}`, {}, {
            headers: { "Authorization": `Bearer ${token}` }
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] })
        }
    })

    return (
        <div className="w-[300px]">
            <Image style={{ width: "250px", height: "250px" }} src={item.image_url ? item.image_url[0] : "/images/flower-img.jpg"} alt="Products Img" width={250} height={250} priority />
            <h2 className="mt-5">{item.product_name}</h2>
            <div className="flex items-center space-x-2">
                {item.discount && <strong>{item.discount}$</strong>}
                <del>{item.cost}$</del>
            </div>
            <div className="space-x-2">
                <button onClick={() => token ? likeMutation.mutate(item.product_id) : {}} className={`text-[20px] font-semibold ${item.liked && "text-red-500"}`}><LikeIcon/></button>
                <button className={`text-[20px] font-semibold ${item.basket && "bg-green-500"}`}><KorzinaIcon/></button>
            </div>
        </div>
    )
}

export default ProductCard