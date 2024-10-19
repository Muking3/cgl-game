import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import HeaderNav from "@/components/organism/headerNav";

export default function HomePage() {
    const displayText = useTypewriter("Découvre qui sont tes vrais potes 😎");
    const navigate = useNavigate()
    const imgRefOne = useRef(null);
    const imgRefTwo = useRef(null);

    useEffect(() => {
        gsap.to(imgRefOne.current, {
            y: -10,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }, []);

    useEffect(() => {
        gsap.to(imgRefTwo.current, {
            y: 10,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }, []);

    const handleQuiz = async () => {
        const token = await localStorage.getItem('token');
        if (token) {
            navigate("/quiz");
        }
        else {
            navigate("/register");
        }
    };


    return (
        <div className="rounded-t-3xl bg-gradient-to-t from-base-secondary to-base-primary p-6 space-y-10">
            <HeaderNav text="text-white hover:text-black" />
            <div className="flex flex-col laptop:flex-row justify-center items-center gap-12 tablet:gap-28 laptop:gap-24 w-full h-full laptop:w-3/4 m-0 laptop:m-auto py-10 laptop:py-20">
                <div className="w-3/4 laptop:w-4/12 flex items-center justify-end">
                    <img ref={imgRefOne} src="./src/assets/083041df-7176-4a51-a95b-a21d67bc960a.jpeg" alt="" className="rounded-3xl h-auto w-2/4 rotate-[-10deg] border-white border-4 tablet:border-8" />
                    <img ref={imgRefTwo} src="./src/assets/fd32ff5f-9b4a-4d50-aac0-6898705f7c5d.jpeg" alt="" className="rounded-3xl h-auto w-2/4 rotate-[10deg] border-white border-4 tablet:border-8" />
                </div>
                <div className="w-full laptop:w-7/12 m-auto space-y-0 laptop:space-y-16">
                    <h1 className="w-full text-4xl mobilesm:text-6xl laptop:text-9xl text-white text-center font-extrabold tracking-tight h-40 mobilesm:h-60 tablet:h-52 laptop:h-96">
                        {displayText}
                    </h1>
                    <div className="w-full text-center">
                        <Button
                            className="rounded-full p-4 mobilesm:p-8 laptop:p-10 text-base mobilesm:text-lg tablet:text-2xl"
                            onClick={handleQuiz}
                        >
                            Clique ici
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}