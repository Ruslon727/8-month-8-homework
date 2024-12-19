"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import heroImg from '../../public/images/hero-img.png'

import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';

import { Pagination } from 'swiper/modules';
import Button from '../Button';
import Image from 'next/image';

export default function Carusel() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div>
                        <div className='ml-[40px]'>
                            <p className='text-[#3D3D3D] text-[14px] font-medium leading-[16px]'>Welcome to GreenShop</p>
                            <h2 className='text-[#3D3D3D] mt-[7px] leading-[70px] text-[70px] font-black '>Let’s Make a <br />Better <span className='text-green-500'>Planet</span></h2>
                            <p className='text-[#727272] mt-[7px] text-[14px] leading-[24px] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                            <Button extraStyle='mt-[40px]' type='button' title='SHOP NOW' />
                        </div>
                    </div>
                    <div className='ml-[120px]'>
                        <Image src={heroImg} alt='Hero Image' priority />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='ml-[40px]'>
                            <p className='text-[#3D3D3D] text-[14px] font-medium leading-[16px]'>Welcome to GreenShop</p>
                            <h2 className='text-[#3D3D3D] mt-[7px] leading-[70px] text-[70px] font-black '>Let’s Make a <br />Better <span className='text-green-500'>Planet</span></h2>
                            <p className='text-[#727272] mt-[7px] text-[14px] leading-[24px] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                            <Button extraStyle='mt-[40px]' type='button' title='SHOP NOW' />
                        </div>
                    </div>
                    <div className='ml-[120px]'>
                        <Image src={heroImg} alt='Hero Image' priority />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className='ml-[40px]'>
                            <p className='text-[#3D3D3D] text-[14px] font-medium leading-[16px]'>Welcome to GreenShop</p>
                            <h2 className='text-[#3D3D3D] mt-[7px] leading-[70px] text-[70px] font-black '>Let’s Make a <br />Better <span className='text-green-500'>Planet</span></h2>
                            <p className='text-[#727272] mt-[7px] text-[14px] leading-[24px] font-normal'>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                            <Button extraStyle='mt-[40px]' type='button' title='SHOP NOW' />
                        </div>
                    </div>
                    <div className='ml-[120px]'>
                        <Image src={heroImg} alt='Hero Image' priority />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
