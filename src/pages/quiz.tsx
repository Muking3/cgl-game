// import FormFieldCustom from "@/components/molecules/formFieldCustom";
// import { Button } from "@/components/ui/button";
// import { Form } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import Message from "@/components/ui/message";
// import { useMessage } from "@/hooks/useMessage";
// import { RegisterFormValues, registerSchema } from "@/schemas/registerSchema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Loader2 } from "lucide-react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// export default function Quiz() {
//     // const { login, error } = useAuthContext()
//     // const navigate = useNavigate()
//     // const [loader, setLoader] = useState(false)
//     // const { messageState, setMessageState } = useMessage({
//     //     content: null,
//     //     type: null,
//     // });
//     // const defaultValues: RegisterFormValues = {
//     //     name: "",
//     //     lastName: "",
//     // }
//     // const form = useForm<RegisterFormValues>({
//     //     resolver: zodResolver(registerSchema),
//     //     defaultValues: defaultValues,
//     // })

//     // const Submit = async (data: RegisterFormValues) => {
//     //     setLoader(true);
//     //     setMessageState({
//     //         content: "Une erreur est survenue lors de la connexion.",
//     //         type: "error",

//     //     })
//     // }        
//     return (
// <div>
//     <div className="w-95% tablet:w-1/2 flex justify-end">
//         <Form {...form}>
//             <form onSubmit={form.handleSubmit(Submit)} className="space-input w-full laptop:w-80% text-center">
//                 <h2 className="text-2xl tablet:text-4xl font-extrabold text-white">
//                     Creer un pseudo
//                 </h2>
//                 {messageState.content && (
//                     <Message
//                         message={messageState.content}
//                         className={messageState.type === "success" ? "bg-base-bg-primary" : "bg-base-bg-tertiary"}
//                     />
//                 )}
//                 {/* <FormFieldCustom
//                     form={form}
//                     label="Prénom"
//                     name="name"
//                     labelClassName="text-white"
//                 />
//                 <FormFieldCustom
//                     form={form}
//                     label="Post-nom"
//                     name="lastName"
//                     labelClassName="text-white"
//                 />
//                 <FormFieldCustom
//                     form={form}
//                     label="Pseudo"
//                     name="pseudo"
//                     labelClassName="text-white"
//                 /> */}
//                 <h3>Lors d'un date qui </h3>
//                 <Button type="submit" className="w-95% bg-salem-600 text-xs tablet:text-lg hover:bg-salem-900">
//                     {loader && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//                     Se connecter
//                 </Button>
//             </form>
//         </Form>
//     </div>
// </div>
//             <div>

//             </div>
//         );
//     }






// const Card = ({ option, isSelected, onClick }) => (
//     <div
//         className={`p-4 border rounded-lg cursor-pointer ${isSelected ? 'bg-blue-500 text-white' : 'bg-white'}`}
//         onClick={onClick}
//     >
//         {option.answer}
//     </div>
// );

// const Quiz = () => {
//     const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

//     const handleOptionChange = (questionIndex, option) => {
//         const updatedAnswers = [...selectedAnswers];
//         updatedAnswers[questionIndex] = option;
//         setSelectedAnswers(updatedAnswers);
//     };

//     return (
//         <div>
//             {questions.map((q, index) => (
//                 <div key={index}>
//                     <h3 className="text-xl font-bold">{q.question}</h3>
//                     <div className="grid grid-cols-2 gap-4 mt-2">
//                         {q.options.map((option) => (
//                             <Card
//                                 key={option.id}
//                                 option={option}
//                                 isSelected={selectedAnswers[index] === option.answer}
//                                 onClick={() => handleOptionChange(index, option.answer)}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             ))}
//             {/* Bouton pour soumettre les réponses */}
//             <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={() => console.log(selectedAnswers)}>Soumettre</button>
//         </div>
//     );
// };

// export default Quiz;





// const Card = ({ option, isSelected, onClick }) => (
//     <div
//         className={`p-4 border rounded-lg cursor-pointer ${isSelected ? 'bg-blue-500 text-white' : 'bg-white'}`}
//         onClick={onClick}
//     >
//         {option.answer}
//     </div>
// );

// const Quiz = () => {
//     // État pour stocker les 10 questions aléatoires
//     const [randomQuestions, setRandomQuestions] = useState([]);

//     // Mélanger les questions et en sélectionner 10 au premier rendu
//     useEffect(() => {
//         const shuffledQuestions = questions
//             .sort(() => 0.5 - Math.random())  // Mélange aléatoire
//             .slice(0, 10);  // Prendre les 10 premières questions
//         setRandomQuestions(shuffledQuestions);
//     }, []);

//     const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));

//     const handleOptionChange = (questionIndex, option) => {
//         const updatedAnswers = [...selectedAnswers];
//         updatedAnswers[questionIndex] = option;
//         setSelectedAnswers(updatedAnswers);
//     };

//     return (
//         <div>
//             {randomQuestions.map((q, index) => (
//                 <div key={index}>
//                     <h3 className="text-xl font-bold">{q.question}</h3>
//                     <div className="grid grid-cols-2 gap-4 mt-2">
//                         {q.options.map((option) => (
//                             <Card
//                                 key={option.id}
//                                 option={option}
//                                 isSelected={selectedAnswers[index] === option.answer}
//                                 onClick={() => handleOptionChange(index, option.answer)}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             ))}
//             {/* Bouton pour soumettre les réponses */}
//             <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={() => console.log(selectedAnswers)}>Soumettre</button>
//         </div>
//     );
// };

// export default Quiz;





// const Card = ({ option, isSelected, onClick }) => (
//     <div
//         className={`p-4 border rounded-lg cursor-pointer ${isSelected ? 'bg-blue-500 text-white' : 'bg-white'}`}
//         onClick={onClick}
//     >
//         {option.answer}
//     </div>
// );

// export default function Quiz() {
//     const [randomQuestions, setRandomQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [selectedAnswers, setSelectedAnswers] = useState([]);

//     useEffect(() => {
//         const shuffledQuestions = questions
//             .sort(() => 0.5 - Math.random())
//             .slice(0, 10);
//         setRandomQuestions(shuffledQuestions);
//         setSelectedAnswers(Array(10).fill(null));
//     }, []);

//     const handleOptionChange = (option) => {
//         const updatedAnswers = [...selectedAnswers];
//         updatedAnswers[currentQuestionIndex] = option;
//         setSelectedAnswers(updatedAnswers);
//     };

//     const handleNextQuestion = () => {
//         if (currentQuestionIndex < randomQuestions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//             console.log('Quiz terminé, réponses soumises :', selectedAnswers);
//         }
//     };

//     return (
//         <div>
//             {randomQuestions.length > 0 && (
//                 <div>
//                     <h3 className="text-xl font-bold">{randomQuestions[currentQuestionIndex].question}</h3>
//                     <div className="grid grid-cols-2 gap-4 mt-2">
//                         {randomQuestions[currentQuestionIndex].options.map((option) => (
//                             <Card
//                                 key={option.id}
//                                 option={option}
//                                 isSelected={selectedAnswers[currentQuestionIndex] === option.answer}
//                                 onClick={() => handleOptionChange(option.answer)}
//                             />
//                         ))}
//                     </div>
//                     <button
//                         className="mt-4 p-2 bg-blue-500 text-white rounded"
//                         onClick={handleNextQuestion}
//                     >
//                         {currentQuestionIndex < randomQuestions.length - 1 ? 'Suivant' : 'Terminer'}
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };



import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '@/configuration';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; 



const questions = [
    {
        question: "Comment Marc préfère-t-il rencontrer quelqu'un ?",
        options: [
            { answer: "En soirée.", id: 1 },
            { answer: "Par des amis communs.", id: 2 },
            { answer: "Sur une application de rencontre.", id: 3 },
            { answer: "Par hasard dans la rue.", id: 4 }
        ],
    },
    {
        question: "Quelle est la chose la plus mignonne qu’une personne peut faire pour Marc ?",
        options: [
            { answer: "Lui envoyer un message mignon le matin.", id: 1 },
            { answer: "Lui préparer son plat préféré.", id: 2 },
            { answer: "Lui offrir un petit cadeau inattendu.", id: 3 },
            { answer: "Lui écrire une lettre d'amour.", id: 4 }
        ],
    },
    {
        question: "Quel est le geste le plus romantique selon Marc ?",
        options: [
            { answer: "Organiser une surprise.", id: 1 },
            { answer: "Tenir la main en public.", id: 2 },
            { answer: "Un baiser sous la pluie.", id: 3 },
            { answer: "Faire un long trajet pour voir quelqu'un.", id: 4 }
        ],
    },
    {
        question: "Quelle qualité Marc recherche-t-il le plus chez un partenaire ?",
        options: [
            { answer: "L’humour.", id: 1 },
            { answer: "L’intelligence.", id: 2 },
            { answer: "La gentillesse.", id: 3 },
            { answer: "La créativité.", id: 4 }
        ],
    },
    {
        question: "Quel est le type de rendez-vous préféré de Marc ?",
        options: [
            { answer: "Aller au cinéma.", id: 1 },
            { answer: "Dîner dans un bon restaurant.", id: 2 },
            { answer: "Faire une activité en plein air.", id: 3 },
            { answer: "Rester à la maison pour un marathon de films.", id: 4 }
        ],
    },
    {
        question: "Quelle est la première chose que Marc remarque chez quelqu'un ?",
        options: [
            { answer: "Le sourire.", id: 1 },
            { answer: "Les yeux.", id: 2 },
            { answer: "La voix.", id: 3 },
            { answer: "La manière de s’habiller.", id: 4 }
        ],
    },
    {
        question: "Qu’est-ce qui impressionne Marc le plus chez un partenaire ?",
        options: [
            { answer: "La passion pour quelque chose.", id: 1 },
            { answer: "La confiance en soi.", id: 2 },
            { answer: "La sincérité.", id: 3 },
            { answer: "La générosité.", id: 4 }
        ],
    },
    {
        question: "Quelle est la meilleure façon de séduire Marc ?",
        options: [
            { answer: "Lui faire rire.", id: 1 },
            { answer: "Être direct et honnête.", id: 2 },
            { answer: "Le surprendre.", id: 3 },
            { answer: "Avoir des conversations profondes.", id: 4 }
        ],
    },
    {
        question: "Quelle chanson Marc chanterait-il pour impressionner quelqu'un ?",
        options: [
            { answer: "Une chanson romantique classique.", id: 1 },
            { answer: "Un morceau de rap ou R&B.", id: 2 },
            { answer: "Une chanson pop du moment.", id: 3 },
            { answer: "Une vieille chanson nostalgique.", id: 4 }
        ],
    },
    {
        question: "Quel genre de cadeau Marc offrirait-il lors d'un premier rendez-vous ?",
        options: [
            { answer: "Un bouquet de fleurs.", id: 1 },
            { answer: "Un petit livre.", id: 2 },
            { answer: "Un objet unique ou personnalisé.", id: 3 },
            { answer: "Rien, il préfère attendre.", id: 4 }
        ],
    },
    {
        question: "Quelle est la première chose qui attire Marc chez quelqu'un physiquement ?",
        options: [
            { answer: "Les yeux.", id: 1 },
            { answer: "La silhouette.", id: 2 },
            { answer: "Le sourire.", id: 3 },
            { answer: "La manière de marcher.", id: 4 }
        ],
    },
    {
        question: "Comment Marc montre-t-il qu'il est attiré par quelqu'un ?",
        options: [
            { answer: "Il devient plus tactile.", id: 1 },
            { answer: "Il cherche à être seul avec cette personne.", id: 2 },
            { answer: "Il envoie des messages flirtants.", id: 3 },
            { answer: "Il la taquine gentiment.", id: 4 }
        ],
    },
    {
        question: "Quelle est la chose la plus coquine que Marc ferait lors d’un date ?",
        options: [
            { answer: "Murmurer quelque chose d’audacieux à l’oreille.", id: 1 },
            { answer: "Tenir la main sous la table.", id: 2 },
            { answer: "Offrir un baiser à l’improviste.", id: 3 },
            { answer: "Complimenter d'une manière suggestive.", id: 4 }
        ],
    },
    {
        question: "Qu’est-ce qui rend Marc fou amoureux ?",
        options: [
            { answer: "L’intensité du regard.", id: 1 },
            { answer: "La sensualité de la voix.", id: 2 },
            { answer: "La manière dont l’autre touche.", id: 3 },
            { answer: "L'odeur naturelle de la personne.", id: 4 }
        ],
    },
    {
        question: "Quel est le type de flirt préféré de Marc ?",
        options: [
            { answer: "Le flirt visuel intense.", id: 1 },
            { answer: "La conversation subtilement coquine.", id: 2 },
            { answer: "Les gestes tendres et doux.", id: 3 },
            { answer: "L’humour piquant et sexy.", id: 4 }
        ],
    },
    {
        question: "Comment Marc aimerait qu’on lui montre de l’affection ?",
        options: [
            { answer: "Par un long baiser.", id: 1 },
            { answer: "Par des câlins fréquents.", id: 2 },
            { answer: "Par des caresses discrètes.", id: 3 },
            { answer: "Par des messages suggestifs.", id: 4 }
        ],
    },
    {
        question: "Comment Marc réagit-il à un compliment audacieux ?",
        options: [
            { answer: "Il sourit et devient un peu timide.", id: 1 },
            { answer: "Il renvoie le compliment.", id: 2 },
            { answer: "Il fait une blague pour dévier l'attention.", id: 3 },
            { answer: "Il joue la carte de la confiance et en profite.", id: 4 }
        ],
    },
    {
        question: "Qu’est-ce qui pourrait instantanément rendre Marc nerveux lors d’un rendez-vous ?",
        options: [
            { answer: "Un compliment trop direct.", id: 1 },
            { answer: "Un geste inattendu de la personne.", id: 2 },
            { answer: "Une question personnelle ou intime.", id: 3 },
            { answer: "Le silence prolongé.", id: 4 }
        ],
    },
    {
        question: "Quelle est la plus grande faiblesse de Marc en séduction ?",
        options: [
            { answer: "Il est trop direct.", id: 1 },
            { answer: "Il devient nerveux et maladroit.", id: 2 },
            { answer: "Il est parfois trop taquin.", id: 3 },
            { answer: "Il a du mal à détecter les signaux.", id: 4 }
        ],
    },
    {
        question: "Comment Marc pourrait rendre un rendez-vous plus... intense ?",
        options: [
            { answer: "En créant une ambiance romantique.", id: 1 },
            { answer: "En trouvant une excuse pour être seul.", id: 2 },
            { answer: "En envoyant des signes de son intérêt physique.", id: 3 },
            { answer: "En rendant la conversation plus osée.", id: 4 }
        ],
    }
];



const Card = ({ option, isSelected, onClick }) => (
    <div
        className={`p-4 border rounded-lg cursor-pointer ${isSelected ? 'bg-blue-500 text-white' : 'bg-white'}`}
        onClick={onClick}
    >
        {option.answer}
    </div>
);

// const Quiz = () => {
//     const [randomQuestions, setRandomQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
//     const [selectedAnswers, setSelectedAnswers] = useState([]);

//     useEffect(() => {
//         const shuffledQuestions = questions
//             .sort(() => 0.5 - Math.random())  
//             .slice(0, 10);  
//         setRandomQuestions(shuffledQuestions);
//         setSelectedAnswers(Array(10).fill(null));
//     }, []);

//     const handleOptionChange = (option) => {
//         const updatedAnswers = [...selectedAnswers];
//         updatedAnswers[currentQuestionIndex] = option;
//         setSelectedAnswers(updatedAnswers);
//     };

//     const handleNextQuestion = () => {
//         if (currentQuestionIndex < randomQuestions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//             handleSubmitAnswers(); 
//         }
//     };

//     const handleSubmitAnswers = async () => {
//         const questionsWithAnswers = randomQuestions.map((question, index) => ({
//             question: question.question,
//             options: question.options, 
//             selectedAnswer: selectedAnswers[index], 
//         }));

//         try {
//             const docRef = await addDoc(collection(db, "quizResponses"), {
//                 questions: questionsWithAnswers,
//                 timestamp: new Date(),
//             });
//             console.log("Réponses soumises avec succès avec l'ID: ", docRef.id);
//         } catch (e) {
//             console.error("Erreur lors de l'envoi des réponses: ", e);
//         }
//     };

//     return (
//         <div>
//             {randomQuestions.length > 0 && (
//                 <div>
//                     <h3 className="text-xl font-bold">{randomQuestions[currentQuestionIndex].question}</h3>
//                     <div className="grid grid-cols-2 gap-4 mt-2">
//                         {randomQuestions[currentQuestionIndex].options.map((option) => (
//                             <Card
//                                 key={option.id}
//                                 option={option}
//                                 isSelected={selectedAnswers[currentQuestionIndex] === option.answer}
//                                 onClick={() => handleOptionChange(option.answer)}
//                             />
//                         ))}
//                     </div>
//                     <button 
//                         className="mt-4 p-2 bg-blue-500 text-white rounded" 
//                         onClick={handleNextQuestion}
//                     >
//                         {currentQuestionIndex < randomQuestions.length - 1 ? 'Suivant' : 'Terminer'}
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Quiz;






const Quiz = () => {
    const [randomQuestions, setRandomQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [quizLink, setQuizLink] = useState("");  // État pour stocker le lien

    useEffect(() => {
        const shuffledQuestions = questions
            .sort(() => 0.5 - Math.random())
            .slice(0, 10);
        setRandomQuestions(shuffledQuestions);
        setSelectedAnswers(Array(10).fill(null));
    }, []);

    const handleOptionChange = (option) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestionIndex] = option;
        setSelectedAnswers(updatedAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < randomQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            handleSubmitAnswers();
        }
    };

    // Fonction pour soumettre les réponses et générer un lien
    const handleSubmitAnswers = async () => {
        const questionsWithAnswers = randomQuestions.map((question, index) => ({
            question: question.question,
            options: question.options,
            selectedAnswer: selectedAnswers[index],
        }));

        // Créer un identifiant unique pour ce questionnaire
        const quizId = uuidv4();

        try {
            // Enregistrer les questions et réponses dans Firestore
            await setDoc(doc(db, "quizResponses", quizId), {
                questions: questionsWithAnswers,
                timestamp: new Date(),
            });

            // Générer un lien à partir de cet identifiant
            const generatedLink = `http://localhost:5173/quiz/${quizId}`;
            setQuizLink(generatedLink);  // Stocker le lien
        } catch (e) {
            console.error("Erreur lors de l'envoi des réponses: ", e);
        }
    };

    return (
        <div>
            {randomQuestions.length > 0 && (
                <div>
                    <h3>{randomQuestions[currentQuestionIndex].question}</h3>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        {randomQuestions[currentQuestionIndex].options.map((option) => (
                            <div
                                key={option.id}
                                className={`p-4 border rounded-lg cursor-pointer ${selectedAnswers[currentQuestionIndex] === option.answer ? 'bg-blue-500 text-white' : 'bg-white'}`}
                                onClick={() => handleOptionChange(option.answer)}
                            >
                                {option.answer}
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={handleNextQuestion}
                    >
                        {currentQuestionIndex < randomQuestions.length - 1 ? 'Suivant' : 'Terminer'}
                    </button>
                </div>
            )}

            {quizLink && (
                <div className="mt-4">
                    <p>Partagez ce lien avec vos amis pour qu'ils puissent répondre au questionnaire :</p>
                    <a href={quizLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        {quizLink}
                    </a>
                </div>
            )}
        </div>
    );
};

export default Quiz;