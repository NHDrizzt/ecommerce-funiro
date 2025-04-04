'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";

import ShoppingCart from "@/public/assets/icons/shopping-cart.svg"
import Search from "@/public/assets/icons/search.svg"
import Heart from "@/public/assets/icons/heart.svg"
import Account from "@/public/assets/icons/account.svg"
import {useRouter} from "next/navigation";


const Header = () => {
    const router = useRouter()
    return (
        <div className={'py-8 px-10 lg:px-14'}>
            <div className={'flex items-center justify-between'}>
                <div className={'cursor-pointer'} onClick={() => router.push('/')}>
                    <Image src={'/assets/logo.png'} alt={'logo image'} width={180} height={41}/>
                </div>
                <div className={'space-x-10 lg:space-x-18 font-medium text-base pt-1'}>
                    <Link className={'hover:text-primary'} href={'/home'}>
                        Home
                    </Link>
                    <Link className={'hover:text-primary'} href={'/shop'}>
                        Shop
                    </Link>
                    <Link className={'hover:text-primary'} href={'/about'}>
                        About
                    </Link>
                    <Link className={'hover:text-primary'} href={'/contact'}>
                        Contact
                    </Link>
                </div>
                <div className={'flex justify-between gap-x-7 lg:gap-x-10'}>
                    <Image src={Account} alt={'Account Icon'} width={28} height={28}/>
                    <Image src={Search} alt={'Search Icon'} width={28} height={28}/>
                    <Image src={Heart} alt={'Heart Icon'} width={28} height={28}/>
                    <Image src={ShoppingCart} alt={'Shopping Cart Icon'} width={28} height={28}/>
                </div>
            </div>
        </div>
    );
};

export default Header;
