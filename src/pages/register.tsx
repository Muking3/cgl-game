import EntityForm from "@/components/organism/entityForm";
import Message from "@/components/ui/message";
import { registerConfig } from "@/config/registerConfig";
import { useMessage } from "@/hooks/useMessage";
import { RegisterFormValues, registerSchema } from "@/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/configuration";
import HeaderNav from "@/components/organism/headerNav";
import { useNavigate } from "react-router-dom";


export default function Register() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
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

    const handleGoogle = () => {

    }

    const handleFacebook = () => {

    }

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
            navigate("/quiz");
            console.log("Utilisateur créé avec succès !");
            setLoading(false);
        } catch (error) {
            console.error("Erreur lors de la création de l'utilisateur :", error);
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div className="bg-white card">
            <HeaderNav />
            <div className="laptop:w-1/3 mt-10 mb-0 laptop:mt-20 laptop:mb-4 space-y-10 laptop:space-y-20">
                <h2 className="text-2xl laptop:text-4xl font-bold text-center">
                    Créer un compte
                </h2>
                {messageState.content && (
                    <Message
                        message={messageState.content}
                        className={messageState.type === "success" ? "bg-base-bg-primary" : "bg-base-bg-tertiary"}
                    />
                )}
                <EntityForm
                    onSubmit={form.handleSubmit(Submit)}
                    inputSection={registerConfig}
                    form={form}
                    loader={loader}
                    clearMessage={clearMessage}
                    text="Clique ici"
                    google="S'inscrire avec Google"
                    facebook="S'inscrire avec Facebook"
                    handleFacebook={handleFacebook}
                    handleGoogle={handleGoogle}
                />
            </div>
        </div>
    );
}
