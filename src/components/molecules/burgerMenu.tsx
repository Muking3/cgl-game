import { useState } from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import Modal from 'react-modal'

type ContentProps = {
    text: string
}

export default function BurgerMenu({ text }: ContentProps) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <>
            <div className="relative block laptop:hidden">
                <div>
                    <Button
                        onClick={openModal}
                        className={`w-11 h-11 tablet:w-16 tablet:h-16 flex rounded-full p-3 tablet:p-4 flex-col justify-center items-center transition-transform duration-300 ${modalIsOpen ? 'rotate-0' : 'rotate-0'}`}
                    >
                        <motion.div
                            className={`bar-menu transition-all mb-1 ${modalIsOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'}`}
                        />
                        <motion.div
                            className={`bar-menu transition-opacity mb-1 ${modalIsOpen ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <motion.div
                            className={`bar-menu transition-all ${modalIsOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'}`}
                        />
                    </Button>
                </div>
            </div>
            <nav className="mr-2 hidden laptop:block">
                <ul className="flex space-x-10 font-semibold">
                    <li className={`p-4 text-2xl ${text} font-extrabold`}>
                        <a href="#">
                            A propos de nous
                        </a>
                    </li>
                    <li className={`p-4 text-2xl ${text} font-extrabold`}>
                        <a href="#">
                            Creer un questionnaire
                        </a>
                    </li>
                    <li className={`p-4 text-2xl ${text} font-extrabold`}>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}>
                <nav>
                    <ul className="list-none p-2">
                        <li className="p-4 text-3xl text-white hover:text-base-primary font-extrabold">
                            <a href="#">
                                A propos de nous
                            </a>
                        </li>
                        <li className="p-4 text-3xl text-white hover:text-base-primary font-extrabold">
                            <a href="#">
                                Creer un questionnaire
                            </a>
                        </li>
                        <li className="p-4 text-3xl text-white hover:text-base-primary font-extrabold">
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </Modal>
        </>
    );
}


const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: " 3%",
        transform: 'translate(-50%, -50%)',
        width: '80%',
        borderRadius: '24px',
        backgroundColor: '#000',
        border: 'none',
    },
}