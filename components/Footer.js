import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer md:w-full">
      <div className="row border-orange-500 border-t rounded-tl-2xl lg:rounded-tl-[125px] rounded-tr-2xl bg-gradient-to-r from-black via-gray-800 md:w-full ">
        <div className="col">
          <h1 className="logos  ml-40 md:ml-[260px] lg:ml-[360px]">
            <motion.img
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              src="/lenslogo.png"
              width={150}
              className="md:w-[220px]"
            />
          </h1>
          <p className="text-center md:text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            doloribus aliquam cupiditate, magni incidunt, facilis eaque
            voluptate provident assumenda sit similique tempora eius aliquid
            suscipit architecto voluptatum blanditiis, aut aperiam.
          </p>
        </div>

        <div className="flex justify-between">
          <div className="col ml-8 lg:ml-32 lg:mr-32">
            <h3 className="md:text-4xl">
              Office
              <div className="underline md:mt-5">
                <span></span>
              </div>
            </h3>
            <p className="md:text-2xl">Lagos state</p>
            <p className="md:text-2xl">Lekki/Ajah</p>
            <p className="md:text-2xl">Nigeria</p>
            <p className="md:text-2xl">perfectlens@gmail.com</p>
          </div>

          <div className="col w-[230px] md:ml-10 lg:ml-40">
            <h3 className="md:text-4xl">
              Socials
              <div className="underline md:mt-5">
                <span></span>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
