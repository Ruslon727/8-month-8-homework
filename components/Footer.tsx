import { CallIcon, EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, TwitterIcon, UnionIcon } from '@/public/icon/Icon'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import MethodPayment from '../public/images/MethodPayment.png'
import FooterCard3 from '../public/images/Group 19.png'
import LogoGreenShop from '../public/images/LogoGreenShop.png'

const Footer = () => {
    return (
        <>
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
                                <span><FacebookIcon /></span>
                                <span><InstagramIcon /></span>
                                <span><TwitterIcon /></span>
                                <span><LinkedinIcon /></span>
                                <span><UnionIcon /></span>
                            </div>
                            <h3 className="text-[#3D3D3D] text-[18px] font-bold leading-[16px] mt-[35px]">We accept</h3>
                            <Image className="mt-[15px]" src={MethodPayment} alt="Method Payment" priority />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[40px] mx-auto">
                    <span className="text-[#3D3D3D] ml-[500px] text-[14px] leading-[30px] font-normal">© 2021 GreenShop. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}

export default Footer