import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function ShowCaseItem(props: any) {
  return (
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className="w-1/2 max-w-sm"
      >
        <div className="flex flex-col items-center justify-center select-none">

          <a href={props.imgurl} className="pt-4">

            <div className="sm:text-2xl pb-2">{props.text}</div>

            <Image
              src={props.imgsrc}
              width={320}
              height={180}
              alt=""
              className="opacity-60 hover:opacity-100 transition duration-300 ease-in-out"
            ></Image>
          </a>

          <div className="flex flex-col items-center justify-center rounded-3xl select-none sm:text-md pl-4 pr-4">
            {props.description}
          </div>
        </div>
      </motion.div>
  );
}

