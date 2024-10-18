// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '../ui/button';


// export default function BurgerMenu() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };
//     return (
//         <div className="relative">
//             <Button
//                 onClick={toggleMenu}
//                 className={`flex rounded-full flex-col justify-center items-center w-12 h-12 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-0'}`}
//             >
//                 <motion.div
//                     className={`bar-menu transition-all  mb-1 ${isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'}`}
//                 />
//                 <motion.div
//                     className={`bar-menu transition-opacity  mb-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
//                 />
//                 <motion.div
//                     className={`bar-menu transition-all ${isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'}`}
//                 />
//             </Button>
//             {isOpen && (
//                 <ul className="list-none p-2">
//                     <li className="p-2 hover:bg-gray-200">Accueil</li>
//                     <li className="p-2 hover:bg-gray-200">À propos</li>
//                     <li className="p-2 hover:bg-gray-200">Contact</li>
//                 </ul>
//             )}
//         </div>
//     );
// }

import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div>
                <Menu>
                    <MenuButton>
                        <Button
                            onClick={toggleMenu}
                            className={`w-11 h-11 tablet:w-16 tablet:h-16 flex rounded-full p-3 tablet:p-4 flex-col justify-center items-center transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-0'}`}
                        >
                            <motion.div
                                className={`bar-menu transition-all mb-1 ${isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'}`}
                            />
                            <motion.div
                                className={`bar-menu transition-opacity mb-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                            />
                            <motion.div
                                className={`bar-menu transition-all ${isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'}`}
                            />
                        </Button>
                    </MenuButton>
                    <MenuItems
                        transition
                        anchor="bottom end"
                        className=""
                    >
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
                                Edit
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘E</kbd>
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
                                Duplicate
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘D</kbd>
                            </button>
                        </MenuItem>
                        <div className="my-1 h-px bg-white/5" />
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
                                Archive
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘A</kbd>
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
                                Delete
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘D</kbd>
                            </button>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </div>
    );
}
