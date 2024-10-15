import { Button } from "@/components/ui/button";
import { useTypewriter } from "./hooks/useTypewriter";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function App() {
  const displayText = useTypewriter("Découvre qui sont tes vrais potes 😎");
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      y: -10,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <>
      <div>
        <div className="rounded-t-3xl bg-gradient-to-t from-base-secondary to-base-primary m-4 p-6 space-y-10">
          <header className="flex justify-between items-center">
            <img src="./src/assets/IMG-7467__1_-removebg-preview.png" alt="logo" className="h-12 w-auto" />
            <nav className="mr-2">
              <ul className="flex space-x-14 font-semibold">
                <li>
                  <a href="#home" className="text-white hover:text-base-secondary">
                    A propos de nous
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white hover:text-base-secondary">
                    Creer un questionnaire
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white hover:text-base-secondary">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="flex justify-center items-center w-3/4 m-auto gap-24 py-20 h-full">
            <div className="w-7/12 space-y-16">
              <h1 className="text-3xl laptop:text-9xl text-white font-extrabold tracking-tight h-96">
                {displayText}
              </h1>
              <Button className="rounded-full p-10 text-2xl">
                Creer un questionnaire
              </Button>
            </div>
            <div className="w-4/12 flex items-center justify-end">
              <img ref={imgRef} src="./src/assets/083041df-7176-4a51-a95b-a21d67bc960a.jpeg" alt="" className="rounded-3xl h-auto w-2/4 rotate-[-10deg]" />
              <img ref={imgRef} src="./src/assets/fd32ff5f-9b4a-4d50-aac0-6898705f7c5d.jpeg" alt="" className="rounded-3xl h-auto w-2/4 rotate-[10deg]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
