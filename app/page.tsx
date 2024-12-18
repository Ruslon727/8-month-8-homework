"use client"
import ProductCard from "@/components/ProductCard";
import { CategoryType, getCategories } from "@/service/getCategories";
import { getProducts, ProductsType } from "@/service/getProducts";
import { useState } from "react";
import { Pagination, Slider } from "@nextui-org/react";
import debounce from "@/hook/debounce";
import Image from "next/image";
import SecFlower1 from '../public/images/flower-section-2-1.png'
import SecFlower2 from '../public/images/image 15.png'
import Sec3Img1 from '../public/images/section-3-img-1.png'
import Sec3Img2 from '../public/images/02.png'
import Sec3Img3 from '../public/images/03.png'
import Sec3Img4 from '../public/images/04 (1).png'
import FooterCard3 from '../public/images/Group 19.png'
import Button from "@/components/Button";
import { ArrowRightIcon, CallIcon, EmailIcon, FacebookIcon, InstagramIcon, LeftIcon, LinkedinIcon, LocationIcon, TwitterIcon, UnionIcon } from "@/public/icon/Icon";
import LogoGreenShop from '../public/images/LogoGreenShop.png'
import MethodPayment from '../public/images/MethodPayment.png'




export default function Home() {
  const [categoryName, setCategoryName] = useState<string | null>(null)
  const [tags, setTags] = useState<string | null>(null)
  const [size, setSize] = useState<string | null>(null)
  const [price, setPrice] = useState<number[] | number>([39, 1230])
  const fullPrice = debounce(price, 1000)
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(10)

  const categories: CategoryType[] = getCategories()
  const products: ProductsType[] = getProducts(categoryName, tags, page, setTotalPage, fullPrice, size)


  return (
    <main>
      <section className="mb-10 border-b-[2px] border-black">Hero Section</section>
      <section className="flex justify-between">
        <ul className="w-[20%] p-5 space-y-5">
          {[{ category_name: "All", category_id: null }, ...categories].map((item: CategoryType) => <li onClick={() => setCategoryName(item.category_name)} className="cursor-pointer" key={item.category_id}>{item.category_name}</li>)}
          <Slider
            onChange={(e) => setPrice(e)}
            className="max-w-md"
            defaultValue={[39, 1230]}
            formatOptions={{ style: "currency", currency: "USD" }}
            maxValue={1000}
            minValue={0}
            step={2}
            size="sm"
            color="success"
          />
          <div>
            <strong>{fullPrice[0] - fullPrice[1]}</strong>
          </div>
          <ul>
            <li className="cursor-pointer" onClick={() => setSize("Small")}>Small</li>
            <li className="cursor-pointer" onClick={() => setSize("Medium")}>Medium</li>
            <li className="cursor-pointer" onClick={() => setSize("Large")}>Large</li>
          </ul>
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
      <section className="h-[302px] bg-[#FBFBFB] flex items-center justify-between px-[120px] mt-[150px]">
        <div className="bg-[#FBFBFB] flex">
          <Image src={SecFlower1} alt="Flower Image" priority />
          <div className="mr-[30px]">
            <h2 className="text-[#3D3D3D] mt-[40px] text-[18px] font-black leading-[24px] text-right">SUMMER CACTUS <br /> & SUCCELUNTS</h2>
            <p className="text-[#727272] mt-[10px] text-[14px] leading-[24px] font-normal text-right">We are an online plant shop offering a wide <br /> range of cheap and trendy plants</p>
            <Button extraStyle="ml-[150px] mt-[15px]" type="button" title="Find More" rightIcon={<ArrowRightIcon />} />
          </div>
        </div>
        <div className="bg-[#FBFBFB] flex">
          <Image src={SecFlower2} alt="Flower Image" priority />
          <div className="mr-[30px]">
            <h2 className="text-[#3D3D3D] mt-[40px] text-[18px] font-black leading-[24px] text-right">STYLING TRENDS<br /> & MUCH MORE</h2>
            <p className="text-[#727272] mt-[10px] text-[14px] leading-[24px] font-normal text-right">We are an online plant shop offering a wide <br /> range of cheap and trendy plants</p>
            <Button extraStyle="ml-[150px] mt-[15px]" type="button" title="Find More" rightIcon={<ArrowRightIcon />} />
          </div>
        </div>
      </section>
      <section className="mt-[140px] px-[120px] h-[500px]">
        <h1 className="text-[#3D3D3D] ml-[550px] text-[30px] leading-[16px] font-bold">Our Blog Posts</h1>
        <p className="text-[#727272] text-[14px] ml-[400px] mt-[15px] leading-[24px] font-normal">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
        <div className="flex gap-[50px]">
          <div className="mt-[35px]">
            <Image src={Sec3Img1} alt="Section 3 Image" priority />
            <div className="bg-[#FBFBFB] w-[270px]">
              <div className="ml-[15px] ">
                <span className="text-[14px] leading-[16px] font-medium text-[#46A358] mt-[9px]">September 12 | Read in 6 minutes</span>
                <h3 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] mt-[5px]">Cactus & Succulent <br />Care Tips</h3>
                <p className="mt-[5px] text-[#727272] text-[14px] font-normal leading-[22px] ">Cacti are succulents are easy care <br /> plants for any home or patio. </p>
                <div className="flex items-center gap-[4px] mt-3">
                  <button className="hover:text-[#46A358] text-[#3D3D3D] text-[14px] leading-[16px] font-medium">Read More</button>
                  <span><LeftIcon /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[35px]">
            <Image src={Sec3Img2} alt="Section 3 Image" priority />
            <div className="bg-[#FBFBFB] w-[270px]">
              <div className="ml-[15px] ">
                <span className="text-[14px] leading-[16px] font-medium text-[#46A358] mt-[9px]">September 13  I Read in 2 minutes</span>
                <h3 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] mt-[5px]">Top 10 Succulents for <br /> Your Home</h3>
                <p className="mt-[5px] text-[#727272] text-[14px] font-normal leading-[22px] ">Best in hanging baskets. Prefers <br /> medium to high light.</p>
                <div className="flex items-center gap-[4px] mt-3">
                  <button className="hover:text-[#46A358] text-[#3D3D3D] text-[14px] leading-[16px] font-medium">Read More</button>
                  <span><LeftIcon /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[35px]">
            <Image src={Sec3Img3} alt="Section 3 Image" priority />
            <div className="bg-[#FBFBFB] w-[270px]">
              <div className="ml-[15px] ">
                <span className="text-[14px] leading-[16px] font-medium text-[#46A358] mt-[9px]">September 15  I Read in 3 minutes</span>
                <h3 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] mt-[5px]">Cacti & Succulent <br /> Care Tips</h3>
                <p className="mt-[5px] text-[#727272] text-[14px] font-normal leading-[22px] ">Cacti and succulents thrive in <br /> containers and because most are..</p>
                <div className="flex items-center gap-[4px] mt-3">
                  <button className="text-[#3D3D3D] text-[14px] leading-[16px] hover:text-[#46A358] font-medium">Read More</button>
                  <span><LeftIcon /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[35px]">
            <Image src={Sec3Img4} alt="Section 3 Image" priority />
            <div className="bg-[#FBFBFB] w-[270px]">
              <div className="ml-[15px] ">
                <span className="text-[14px] leading-[16px] font-medium text-[#46A358] mt-[9px]">September 15  I Read in 2 minutes</span>
                <h3 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] mt-[5px]">Best Houseplants <br />Room by Room</h3>
                <p className="mt-[5px] text-[#727272] text-[14px] font-normal leading-[22px] ">The benefits of houseplants are <br /> endless. In addition to..</p>
                <div className="flex items-center gap-[4px] mt-3">
                  <button className="text-[#3D3D3D] text-[14px] leading-[16px] font-medium hover:text-[#46A358]">Read More</button>
                  <span><LeftIcon /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-[100px] px-[120px]">
        <div className="bg-[#FBFBFB] h-[250px]">
          <div className="flex items-center pt-[25px] h-[205px] gap-[65px]">
            <div className="ml-[25px] w-[205px] h-[205px]">
              <Image width={80} height={80} src={FooterCard3} alt="Kaktus Photo" priority />
              <h2 className="text-[#3D3D3D] text-[17px] leading-[16px] font-bold mt-[17px]">Garden Care</h2>
              <p className="text-[#727272] text-[14px] leading-[22px] font-normal mt-[10px]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className="ml-[25px] w-[205px] h-[205px]">
              <Image width={80} height={80} src={FooterCard3} alt="Kaktus Photo" priority />
              <h2 className="text-[#3D3D3D] text-[17px] leading-[16px] font-bold mt-[17px]">Plant Renovation</h2>
              <p className="text-[#727272] text-[14px] leading-[22px] font-normal mt-[10px]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className="ml-[25px] w-[205px] h-[205px]">
              <Image width={80} height={80} src={FooterCard3} alt="Kaktus Photo" priority />
              <h2 className="text-[#3D3D3D] text-[17px] leading-[16px] font-bold mt-[17px]">Watering Graden</h2>
              <p className="text-[#727272] text-[14px] leading-[22px] font-normal mt-[10px]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div>
              <h1 className="text-[#3D3D3D] text-[18px] font-bold leading-[16px] ">Would you like to join newsletters?</h1>
              <div className="flex mt-[20px]">
                <input className="placeholder-[#ACACAC] text-black text-[14px] font-normal leading-[16px] bg-white border-[1px] border-white focus:border-white pt-[12px] pr-[86px] pb-[12px] pl-[12px]" type="email" placeholder="enter your email address..." />
                <Button extraStyle="rounded-l-none" type="button" title="Join" />
              </div>
              <p className="text-[#727272] text-[13px] font-normal leading-[22px] mt-[17px] ">We usually post offers and challenges in newsletter. We’re <br /> your online houseplant destination. We offer a wide range <br /> of houseplants and accessories shipped directly from our <br /> (green)house to yours! </p>
            </div>
          </div>
        </div>
        <div className="bg-[#46A3581A] h-[90px]">
          <div className="flex items-center pt-[28px]">
            <Image className="ml-[23px]" src={LogoGreenShop} alt="Logo Green Shop" priority />
            <div className="flex items-center ml-[100px] gap-[10px]">
              <span><LocationIcon /></span>
              <p className="text-[#3D3D3D] text-[14px leading-[22px] font-normal">70 West Buckingham Ave. <br />Farmingdale, NY 11735</p>
            </div>
            <div className="flex gap-[10px] items-center ml-[80px]">
              <span><EmailIcon /></span>
              <p className="text-[14px] text-[#3D3D3D] leading-[22px] font-normal ">contact@greenshop.com</p>
            </div>
            <div className="flex items-center gap-[10px] ml-[90px]">
              <span><CallIcon /></span>
              <p className="text-[#3D3D3D] text-[14px] leading-[22px] font-normal">+88 01911 717 490</p>
            </div>
          </div>
        </div>
        <div className="h-[250px] bg-[#FBFBFB]">
          <div className="pt-[33px] pl-[25px] flex ">
            <div>
              <h2 className="text-[#3D3D3D] text-[18px] font-bold leading-[16px] ">My Account</h2>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal mt-[8px]">My Account</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">Our stores</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">Contact us</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">Career</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">Specials</h5>
            </div>
            <div className=" ml-[190px]">
              <h2 className="text-[#3D3D3D] text-[18px] font-bold leading-[16px] ">Help & Guide</h2>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal mt-[8px]">Help Center</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">How to Buy</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">Shipping & Delivery</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">Product Policy</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">How to Return</h5>
            </div>
            <div className=" ml-[150px]">
              <h2 className="text-[#3D3D3D] text-[18px] font-bold leading-[16px] ">Categories</h2>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal mt-[8px]">House Plants</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">Potter Plants</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">Seeds</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">Small Plants</h5>
              <h5 className="text-[#3D3D3D] text-[14px] leading-[30px] font-normal">Accessories</h5>
            </div>
            <div className="ml-[180px]">
              <h1 className="text-[#3D3D3D] text-[18px] leading-[16px] font-bold">Social Media</h1>
              <div className="flex gap-[10px] items-center mt-[20px]">
                <span><FacebookIcon/></span>
                <span><InstagramIcon/></span>
                <span><TwitterIcon/></span>
                <span><LinkedinIcon/></span>
                <span><UnionIcon/></span>
              </div>
              <h3 className="text-[#3D3D3D] text-[18px] font-bold leading-[16px] mt-[35px]">We accept</h3>
              <Image className="mt-[15px]" src={MethodPayment} alt="Method Payment" priority/>
            </div>
          </div>
        </div>
        <div className="w-full h-[40px] mx-auto">
          <span className="text-[#3D3D3D] ml-[500px] text-[14px] leading-[30px] font-normal">© 2021 GreenShop. All Rights Reserved.</span>
        </div>
      </footer>
    </main>
  );
}
