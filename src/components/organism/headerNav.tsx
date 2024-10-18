import BurgerMenu from "@/components/molecules/burgerMenu";
import { Link } from "react-router-dom";

export default function HeaderNav() {
    return (
        <Link to='/' className="w-full flex justify-between items-center">
            <img src="./src/assets/IMG-7467__1_-removebg-preview.png" alt="logo" className="h-8 mobilesm:h-12 w-auto" />
            <BurgerMenu />
        </Link>
    );
}