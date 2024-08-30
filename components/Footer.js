import React from "react";

const Footer = () => {
  return (
    <footer className="footer  ">
      <div className="row border-orange-500 border-t rounded-tl-2xl rounded-tr-2xl bg-gradient-to-r from-black via-gray-800">
        <div className="col">
          <h1 className="logos  ml-40">
            <img src="/lenslogo.png" width={150} />
          </h1>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
            doloribus aliquam cupiditate, magni incidunt, facilis eaque
            voluptate provident assumenda sit similique tempora eius aliquid
            suscipit architecto voluptatum blanditiis, aut aperiam.
          </p>
        </div>

        <div className="flex justify-between">
          <div className="col ml-8">
            <h3>
              Office
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>Lagos state</p>
            <p>Lekki/Ajah</p>
            <p>Nigeria</p>
            <p>perfectlens@gmail.com</p>
          </div>

          <div className="col w-[230px]">
            <h3>
              Socials
              <div className="underline">
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
