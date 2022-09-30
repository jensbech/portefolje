import { filterProps, motion } from "framer-motion";
import React from "react";
import Showcase from "./Showcase";
import Image from "next/image";

type Props = {};

const pic = "/bt.png";

function ShowCaseItem(props:any) {
  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        className="w-1/2 max-w-sm">
        <div className="flex flex-col items-center justify-center rounded-3xl select-none">
        <div className="sm:text-2xl">{props.text}</div>

          <a href={props.imgurl} className="pt-4 pb-2">
            <Image
              src={props.imgsrc}
              width={320}
              height={180}
              alt=""
              className="opacity-60 hover:opacity-100 transition duration-300 ease-in-out"
            ></Image>
            
          </a>
          <div className="flex flex-col items-center justify-center rounded-3xl gap-2 select-none sm:text-md pl-6 pr-6">
            {props.description}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ShowCaseItem;
