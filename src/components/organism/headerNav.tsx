import BurgerMenu from "@/components/molecules/burgerMenu";
import { Link } from "react-router-dom";

type ContentProps = {
    text: string
}

export default function HeaderNav({ text }: ContentProps) {
    return (
        <div className="w-full flex justify-between items-center">
            <Link to='/'>
                <img src="../src/assets/IMG-7467__1_-removebg-preview.png" alt="logo" className="h-8 mobilesm:h-12 w-auto" />
            </Link>
            <BurgerMenu text={text} />
        </div>
    );
}