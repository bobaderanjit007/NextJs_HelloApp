"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Links = () => {

    const pathName = usePathname();

    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        }
    ]

  return (
    <div>
        {links.map((link, index)=>{
            return (
                <Link key={index} href={link.path} className={`${pathName === link.path && 'bg-orange-500 text-black'}`}>{link.title}</Link>
            )
        })}
    </div>
  )
}

export default Links