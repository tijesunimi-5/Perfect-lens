import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { lazy } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <main className="h-[350vh] w-[505px] overflow-x-hidden">
      <div className="relative bg-black h-[50vh] w-[500px] mt-12">
        <div className="bg-pictures relative"></div>
        <div className="text">
          <i className="text-stroke">Capturing the essence of life</i>
        </div>
      </div>

      <div className="mt-12 w-[500px]">
        <div>Perfect len's introduction</div>

        <div>
          <h1 className="text-center text-orange-400 text-4xl mt-10 font-medium courgette-regular ">
            Catalog
          </h1>

          <div className="pic-layout mt-6 relative w-[500px]">
            <div>
              <img src={"/lens1.jpg"} className="pic1" />
            </div>
            <div>
              <img src={"/lens2.jpg"} className="pic2" />
            </div>
            <div>
              <img src="/lens3.jpg" className="pic3" />
            </div>
            <div>
              <img src="/lens5.jpg" className="pic4" />
            </div>
            <div>
              <img src="/lens6.jpg" className="pic5" />
            </div>
            <div>
              <img src="/lens7.jpg" className="pic6" />
            </div>
            <div>
              <img src="/lens8.jpg" className="pic7" />
            </div>
          </div>
        </div>

        <div className="mt-40 text-center courgette-regular text-2xl m-auto">
          <h1>Send a message</h1>

          <form className="border-orange-500 border rounded mt-6 ml-1">
            <div className="mb-2 mt-2">
              <label htmlFor="name" className="text-orange-500">
                Name:{" "}
              </label>
              <input
                type="text"
                id="name"
                className="w-[300px] rounded-md text-white font-sans text-xl bg-transparent backdrop-blur-md border-orange-400 border pl-2"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="text-orange-500 ">
                Email:{" "}
              </label>
              <input
                id="email"
                type="email"
                className="w-[300px] ml-1 rounded-md text-white font-sans text-xl bg-transparent backdrop-blur-md border-orange-400 border pl-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="mr-[270px] text-orange-500">
                Message:{" "}
              </label>{" "}
              <br />
              <textarea
                rows={5}
                className="text-white rounded bg-transparent backdrop-blur-md border-orange-400 border"
              ></textarea>
            </div>

            <button className="bg-orange-500 pl-3 pr-3 mb-3 mt-3 rounded font-medium">
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
