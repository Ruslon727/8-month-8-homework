"use client"
import { instance } from "@/hook/instance"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"

const page = () => {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ['get_single_products'],
    queryFn: () => instance().get(`/product/${id}`).then(res => res.data)
  })

  return (
    <div>Single Product Page</div>

  )
}

export default page