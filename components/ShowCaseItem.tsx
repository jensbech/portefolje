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
        initial={{ x: 10 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="flex w-1/3 rounded-2xl max-w-xs">
        <div className="flex flex-col items-center justify-center rounded-3xl gap-2 select-none">

        {props.text}

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
