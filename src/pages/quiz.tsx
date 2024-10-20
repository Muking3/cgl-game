import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/configuration';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { questions } from '@/config/questionConfig';
import HeaderNav from '@/components/organism/headerNav';
import { Button } from '@/components/ui/button';
import { CardSelect } from '@/components/ui/cardselect';
import { Questions } from '@/types/question';
import ShareQuiz from '@/components/organism/shareQuiz';
import { Loader2 } from 'lucide-react';

export default function Quiz() {
    const [randomQuestions, setRandomQuestions] = useState<Questions[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>([]);
    const [quizLink, setQuizLink] = useState("");
    const [loader, setLoader] = useState(false);
    const [active, setActive] = useState(false);
    const linkRef = useRef<HTMLDivElement>(null)

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
        setLoader(true);

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

            const generatedLink = `https://cgl-games.web.app/quiz/${quizId}` || `https://cgl-games.firebaseapp.com/quiz/${quizId}`;
            setQuizLink(generatedLink);
        } catch (error) {
            console.error("Erreur lors de l'envoi des réponses: ", error);
        } finally {
            setLoader(false);
            setActive(true)
        }
    };

    useEffect(() => {
        if (quizLink && linkRef.current) {
            linkRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [quizLink]);

    return (
        <div className='card bg-gradient-to-t from-base-secondary to-base-primary'>
            <HeaderNav text="text-white hover:text-black" />
            <div className='w-full laptop:w-1/2 mt-10 mb-0 laptop:mt-20 laptop:mb-4 space-y-10'>
                {randomQuestions.length > 0 && (
                    <div className='space-y-14'>
                        <h3 className='text-2xl laptop:text-4xl font-bold text-white'>{randomQuestions[currentQuestionIndex].question}</h3>
                        <div className="grid grid-cols-2 gap-4 laptop:gap-14 mt-2">
                            {randomQuestions[currentQuestionIndex].options.map((option) => (
                                <CardSelect
                                    key={option.id}
                                    option={option}
                                    isSelected={selectedAnswers[currentQuestionIndex] === option.answer}
                                    onClick={() => handleOptionChange(option.answer)}
                                />
                            ))}
                        </div>
                        <div className='text-center'>
                            <Button
                                className='w-full laptop:w-3/4 paragraph rounded-full gap-1 p-5'
                                onClick={handleNextQuestion}
                                disabled={loader || !selectedAnswers[currentQuestionIndex] || active}
                            >
                                {loader && <Loader2 className="loader" />}
                                {currentQuestionIndex < randomQuestions.length - 1 ? 'Suivant' : 'Terminer'}
                            </Button>
                        </div>
                    </div>
                )}

                {quizLink && (
                    <div ref={linkRef}>
                        <ShareQuiz quizLink={quizLink} />
                    </div>
                )}
            </div>
        </div>
    );
};
