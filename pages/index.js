import { Inter } from "next/font/google";
import { easeIn, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <main className="h-[400vh] w-[505px] overflow-x-hidden md:w-full md:h-[390vh] lg:h-[490vh]">
      <div className="relative bg-black h-[50vh] w-[500px] mt-12 md:w-full ">
        <div className="bg-pictures relative h-[60vh] lg:h-[100vh]"></div>
        <div className="text md:w-full lg:h-[100vh]">
          <motion.i
            initial={{
              x: -30,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-stroke md:ml-[30px] md:text-4xl lg:ml-[370px] lg:text-5xl"
          >
            Capturing the essence of life
          </motion.i>
        </div>
      </div>

      <div className="mt-60 w-[500px] md:w-full lg:mt-[500px]">
        <div>Perfect len's introduction</div>

        <div>
          <motion.h1
            initial={{
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="text-center text-orange-400 text-4xl mt-10 font-medium courgette-regular md:text-6xl"
          >
            Catalog
          </motion.h1>

          <div className="pic-layout mt-6 relative w-[500px] md:w-full lg:w-full">
            <div className="lg:m-auto lg:ml-[60px]">
              <motion.div
                initial={{
                  x: -90,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                }}
                className="container lg:ml-[40px] "
              >
                <img
                  src={"/lens1.jpg"}
                  className="pic1 md:w-[420px] md:h-[500px] lg:w-[600px]  lg:h-[700px] lg:mt-[30px]"
                />
              </motion.div>

              <div className="container">
                <motion.img
                  initial={{
                    x: 60,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1,
                    duration: 1,
                    ease: easeIn,
                  }}
                  src={"/lens2.jpg"}
                  className="pic2 md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[600px] lg:right-[390px] "
                />
              </div>

              <div className="container">
                <motion.img
                  initial={{
                    x: 60,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                    ease: easeIn,
                  }}
                  src="/lens3.jpg"
                  className="pic3 md:w-[320px] md:h-[320px] md:top-[330px] lg:right-[20px] lg:w-[350px] lg:h-[500px] lg:top-[150px]"
                />
              </div>

              <div className="container lg:ml-[100px] lg:w-[950px] ">
                <motion.img
                  initial={{
                    x: -90,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.1,
                    duration: 1.5,
                  }}
                  src="/lens5.jpg"
                  className="pic4 md:w-[420px] md:h-[370px] lg-w[950px] lg:h-[450px]"
                />
              </div>

              <div>
                <motion.img
                  initial={{
                    x: 60,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.2,
                    duration: 1.5,
                  }}
                  src="/lens6.jpg"
                  className="pic5 md:w-[320px] md:top-[660px] "
                />
              </div>

              <div>
                <img
                  src="/lenslogo.png"
                  className="hidden lg:absolute lg:flex lg:top-[600px] lg:left-[750px] hover:none"
                />
              </div>

              <div>
                <motion.img
                  initial={{
                    x: -90,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  src="/lens7.jpg"
                  className="pic6 md:w-[420px] md:h-[420px] lg:w-[580px] lg:h-[650px] lg:mt-[-420px] lg:ml-[540px]"
                />
              </div>

              <div>
                <motion.img
                  initial={{
                    x: 60,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 1.2,
                  }}
                  src="/lens8.jpg"
                  className="pic7 md:w-[320px] md:top-[1070px] lg:h-[450px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-64 text-center courgette-regular text-2xl m-auto lg:w-full">
          <motion.h1
            initial={{
              y: -20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="text-3xl font-bold"
          >
            Send a message
          </motion.h1>

          <motion.form
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 0.9,
            }}
            className="border-orange-500 border rounded mt-6 ml-1 md:h-[500px] lg:w-[700px] lg:ml-[400px]"
          >
            <div className="mb-2 mt-2 md:mt-12">
              <label htmlFor="name" className="text-orange-500 md:text-4xl">
                Name:{" "}
              </label>
              <input
                type="text"
                id="name"
                className="w-[300px] rounded-md text-white font-sans text-xl bg-transparent backdrop-blur-md border-orange-400 border pl-2 md:mb-5 md:p-2"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="text-orange-500 md:text-4xl">
                Email:{" "}
              </label>
              <input
                id="email"
                type="email"
                className="w-[300px] ml-1 rounded-md text-white font-sans text-xl bg-transparent backdrop-blur-md border-orange-400 border pl-2 md:p-2"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mr-[270px] text-orange-500 md:text-4xl"
              >
                Message:{" "}
              </label>{" "}
              <br />
              <textarea
                rows={5}
                className="text-white rounded bg-transparent backdrop-blur-md border-orange-400 border md:w-[410px]"
              ></textarea>
            </div>

            <button className="bg-orange-500 pl-3 pr-3 mb-3 mt-3 rounded font-medium">
              Send
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
}
