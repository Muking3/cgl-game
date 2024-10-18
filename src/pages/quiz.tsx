import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/configuration';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { questions } from '@/config/questionConfig';
import HeaderNav from '@/components/organism/headerNav';
import { Button } from '@/components/ui/button';

// const Card = ({ option, isSelected, onClick }) => (
//     <div
//         className={`p-4 border rounded-lg cursor-pointer ${isSelected ? 'bg-blue-500 text-white' : 'bg-white'}`}
//         onClick={onClick}
//     >
//         {option.answer}
//     </div>
// );

type Questions = {
    question: string;
    options: {
        answer: string;
        id: number;
    }[];
}

// type Options = {
//     answer: string;
//     id: number;
// }
export default function Quiz() {
    const [randomQuestions, setRandomQuestions] = useState<Questions[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>([]);
    const [quizLink, setQuizLink] = useState("");

    useEffect(() => {
        const shuffledQuestions: Questions[] = questions
            .sort(() => 0.5 - Math.random())
            .slice(0, 10);
        setRandomQuestions(shuffledQuestions);
        setSelectedAnswers(Array(10).fill(null));
    }, []);

    const handleOptionChange = (option: any) => {
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

    const handleSubmitAnswers = async () => {
        const questionsWithAnswers = randomQuestions.map((question, index) => ({
            question: question.question,
            options: question.options,
            selectedAnswer: selectedAnswers[index],
        }));

        const quizId = uuidv4();

        try {
            await setDoc(doc(db, "quizResponses", quizId), {
                questions: questionsWithAnswers,
                timestamp: new Date(),
            });

            const generatedLink = `http://localhost:5173/quiz/${quizId}`;
            setQuizLink(generatedLink);
        } catch (error) {
            console.error("Erreur lors de l'envoi des réponses: ", error);
        }
    };

    return (
        <div className='card bg-gradient-to-t from-base-secondary to-base-primary'>
            <HeaderNav />
            <div className='w-full laptop:w-3/4 mt-10 mb-0 laptop:mt-20 laptop:mb-4'>
                {randomQuestions.length > 0 && (
                    <div className='space-y-14'>
                        <h3 className='text-2xl laptop:text-4xl font-bold text-white'>{randomQuestions[currentQuestionIndex].question}</h3>
                        <div className="grid grid-cols-2 gap-4 laptop:gap-14 mt-2">
                            {randomQuestions[currentQuestionIndex].options.map((option) => (
                                <div
                                    key={option.id}
                                    className={`p-4 paragraph rounded-lg cursor-pointer ${selectedAnswers[currentQuestionIndex] === option.answer ? 'bg-[#f5f5dc] text-black font-medium' : 'bg-white'}`}
                                    onClick={() => handleOptionChange(option.answer)}
                                >
                                    {option.answer}
                                </div>
                            ))}
                        </div>
                        <Button
                            className='w-full paragraph rounded-full gap-3 p-5'
                            onClick={handleNextQuestion}
                        >
                            {currentQuestionIndex < randomQuestions.length - 1 ? 'Suivant' : 'Terminer'}
                        </Button>
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
        </div>
    );
};

