"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'

const Header = () => {
 return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/icons/logo.png" alt="StockZen logo" width={140} height={32} className="h-8 w-auto cursor-pointer" />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems/> 
                </nav>

                {/* <UserDropdown user={user} initialStocks={initialStocks} /> */}
            </div>
        </header>
    )
}

export default Header