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
        className="w-1/3 max-w-xs">
        <div className="flex flex-col items-center justify-center rounded-3xl gap-2 select-none pb-10">
        <div className="sm:text-2xl">{props.text}</div>
        

          <a href={props.imgurl}>
            <Image
              src={props.imgsrc}
              width={320}
              height={180}
              alt=""
              className="rounded-3xl bg-fixed opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
            ></Image>
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default ShowCaseItem;
