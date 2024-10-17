import EntityForm from "@/components/organism/entityForm";
import { Button } from "@/components/ui/button";
import Message from "@/components/ui/message";
import { registerConfig } from "@/config/registerConfig";
import { useMessage } from "@/hooks/useMessage";
import { RegisterFormValues, registerSchema } from "@/schemas/registerSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/configuration";


export default function Register() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const { clearMessage, messageState, setMessageState } = useMessage({
        content: null,
        type: null,
    });
    const defaultValues: RegisterFormValues = {
        name: "",
        email: "",
        password: "",
    }
    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: defaultValues,
    })

    // const Submit = async (data: RegisterFormValues) => {
    //     setLoader(true);
    //     setMessageState({
    //         content: "Une erreur est survenue lors de la connexion.",
    //         type: "error",

    //     })
    // }

    const Submit = async (data: RegisterFormValues) => {
        const { name, email, password } = data
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "creator", user.uid), {
                username: name,
                email: email,
                createdAt: new Date(),
            });

            console.log("Utilisateur créé avec succès !");
            setLoading(false);
        } catch (error) {
            console.error("Erreur lors de la création de l'utilisateur :", error);
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div className="bg-white w-full rounded-3xl m-auto flex flex-col justify-center items-center px-4 py-8 space-y-10">
            <header className="w-full flex justify-between">
                <img src="./src/assets/IMG-7467__1_-removebg-preview.png" alt="logo" className="h-8 w-auto" />
                <Button className="rounded-full w-10 h-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faBars} size="lg" className="text-white" />
                </Button>
            </header>
            <h2 className="text-2xl font-bold text-center mb-10">
                Créer un compte
            </h2>
            {messageState.content && (
                <Message
                    message={messageState.content}
                    className={messageState.type === "success" ? "bg-base-bg-primary" : "bg-base-bg-tertiary"}
                />
            )}
            <div className="space-y-3">
                <EntityForm
                    onSubmit={form.handleSubmit(Submit)}
                    inputSection={registerConfig}
                    form={form}
                    loader={loader}
                    clearMessage={clearMessage}
                    text="Clique ici"
                />
                <Button className="w-full text-xs tablet:text-lg rounded-full gap-3">
                    <FontAwesomeIcon icon={faGoogle} size="lg" />
                    <span>S'inscrire avec Google</span>
                </Button>
                <Button className="w-full text-xs tablet:text-lg rounded-full gap-3">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    <span>S'inscrire avec Facebook</span>
                </Button>
            </div>
        </div>
    );
}
