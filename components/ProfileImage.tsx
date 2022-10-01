import React from "react";
import Image from 'next/image'

export default function ProfileImage() {
    return (
        <div className="flex flex-col items-center justify-center pointer-events-none pt-12">
            <Image src="/pic.jpg" 
                width={200} 
                height={200} 
                alt=""
                className="rounded-full"/>
        </div>
    )
}
