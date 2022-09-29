import React from "react";
import { motion } from "framer-motion"
import Image from 'next/image'

const pic = '/pic.jpg'

type Props = {};

function ProfileImage({ }: Props) {

    return (

        <div className="flex flex-col items-center justify-center ">
            <Image src={pic} 
                width={200} 
                height={200} 
                alt=""
                className="rounded-full"/>
        </div>
    )
}

export default ProfileImage;