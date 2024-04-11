"use client"

import React, { useState, useEffect } from "react"
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs"
import { usePathname } from "next/navigation"
import Link from "next/link"
import MobileNav from "./MobileNav"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { contactsButton } from "@/constant"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { MdOutlineSell } from "react-icons/md"
import { MdSell } from "react-icons/md"
import { GoHome } from "react-icons/go"
import { GoHomeFill } from "react-icons/go"

const Navbar = () => {
    const navButtons = [
        {
            title: "Home",
            url: "/",
            filledIcons: <GoHomeFill />,
            outlineIcons: <GoHome />,
        },
        {
            title: "Products",
            url: "/products",
            filledIcons: <MdSell />,
            outlineIcons: <MdOutlineSell />,
        },
    ]

    const path = usePathname()

    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme")
            return storedTheme !== null ? storedTheme : "light"
        }
        return "light" // Default theme for server-side rendering
    })
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", theme)
        }
    }, [theme])

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <nav className='w-full z-50'>
            <div className='backdrop-blur-sm dark:bg-dark-600 bg-gray-100/30 rounded-[20px] py-2 flex px-6 justify-between items-center shadow-lg shadow-black/25 dark:shadow-black/70'>
                <Link href='/' className='flex items-center gap-3 select-none'>
                    <Image
                        src='/icons/QueenCrownLight.webp'
                        alt='Queen Of Nature'
                        width={50}
                        height={50}
                        className='py-2 hidden dark:block'
                    />
                    <Image
                        src='/icons/QueenCrown.webp'
                        alt='Queen Of Nature'
                        width={50}
                        height={50}
                        className='py-2 dark:hidden'
                    />
                    <span className='md:text-2xl text-xl'>Queen Of Nature</span>
                </Link>
                <div className='flex items-center justify-between gap-5 lg:gap-10'>
                    <div className='max-md:hidden flex lg:text-md'>
                        <div className='flex lg:gap-7 gap-5 items-start'>
                            {navButtons.map((nav, i) => (
                                <Link
                                    href={nav.url}
                                    key={i}
                                    className={`${
                                        path === nav.url
                                            ? "font-black transition-transform duration-700"
                                            : ""
                                    } dark:text-gray-400 flex items-center gap-1 justify-center py-2 md:text-sm font-medium group`}
                                >
                                    {path === nav.url
                                        ? nav.filledIcons
                                        : nav.outlineIcons}
                                    {nav.title}
                                    {/* <div
                                        className={`${
                                            nav.LineColor
                                        } rounded-full w-full h-1 flex ${
                                            path === nav.url
                                                ? "opacity-100"
                                                : "opacity-0 group-hover:opacity-100"
                                        }`}
                                    /> */}
                                </Link>
                            ))}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className='dark:text-gray-400 flex items-center gap-1 py-2 md:text-sm font-medium group cursor-pointer'>
                                        Contact
                                        <MdOutlineKeyboardArrowDown className='text-xl' />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='grid grid-cols-3 gap-1 overflow-hidden !p-0 shadow-lg rounded-xl bg-gray-100 bg-gradient-to-bl from-light-850 from-15% via-light-850 to-gray-100 border-2 dark:border-[#0d0d0d]/80 dark:from-[#181818] dark:from-15% dark:via-[#1f1f1f] via-30% dark:to-[#2c2c2c] to-90% '>
                                    {contactsButton.map((cont): any => (
                                        <Link
                                            href={cont.url}
                                            className='flex gap-2 dark:hover:bg-white/20 hover:bg-black/20 w-full p-3 justify-center items-center text-dark-800 dark:text-gray-300'
                                            key={cont.url}
                                            target='_blank'
                                        >
                                            {cont.icon}
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-3 md:gap-5 lg:gap-5'>
                        <button
                            onClick={handleThemeSwitch}
                            className='relative items-center justify-center p-2 transition-transform duration-500 max-md:dark:bg-white/10 md:bg-black/5 hover:dark:bg-white/10 hover:bg-black/5 rounded-full'
                        >
                            <BsSunFill className='absolute text-lg opacity-0 dark:opacity-100 lg:text-xl duration-500 text-dark-800 dark:text-gray-300' />
                            <BsFillMoonStarsFill className='text-lg dark:opacity-0 lg:text-xl duration-500 text-dark-800 dark:text-gray-300' />
                        </button>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
