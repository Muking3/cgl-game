import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';


export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative">
            <Button
                onClick={toggleMenu}
                className={`flex rounded-full flex-col justify-center items-center w-12 h-12 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-0'}`}
            >
                <motion.div
                    className={`bar-menu transition-all  mb-1 ${isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'}`}
                />
                <motion.div
                    className={`bar-menu transition-opacity  mb-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <motion.div
                    className={`bar-menu transition-all ${isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'}`}
                />
            </Button>
            {isOpen && (
                <ul className="list-none p-2">
                    <li className="p-2 hover:bg-gray-200">Accueil</li>
                    <li className="p-2 hover:bg-gray-200">À propos</li>
                    <li className="p-2 hover:bg-gray-200">Contact</li>
                </ul>
            )}
        </div>
    );
}

