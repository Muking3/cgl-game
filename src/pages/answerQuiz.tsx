import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '@/configuration';
import CreatePlayer from './createPlayer';
import { Questions } from '@/types/question';
import { Button } from '@/components/ui/button';
import { PlayerFormValues } from '@/schemas/playerSchema';
import { Loader2 } from 'lucide-react';
import HeaderNav from '@/components/organism/headerNav';

export default function AnswerQuiz() {
    const { quizId } = useParams();
    const navigate = useNavigate();
    const [questions, setQuestions] = useState<Questions[]>([]);
    const [answers, setAnswers] = useState<(string | null)[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState<number | null>(null);
    const [showScore, setShowScore] = useState(false);
    const [showCorrection, setShowCorrection] = useState(false);
    const [currentCorrectionIndex, setCurrentCorrectionIndex] = useState(0);
    const [playerCreated, setPlayerCreated] = useState(false);
    const [active, setActive] = useState(false);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchQuiz = async () => {
            if (quizId) {
                const docRef = doc(db, "quizResponses", quizId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const quizData = docSnap.data();
                    setQuestions(quizData.questions);
                    setAnswers(Array(quizData.questions.length).fill(null));
                } else {
                    console.log("Aucun questionnaire trouvé");
                }
            } else {
                console.log("Quiz ID est manquant");
            }
        };

        fetchQuiz();
    }, [quizId]);

    useEffect(() => {
        const checkPlayerSession = () => {
            const playerId = localStorage.getItem('playerId');
            if (playerId) {
                setPlayerCreated(true);
            }
        };
        checkPlayerSession();
    }, []);

    const handleOptionChange = (selectedOption: any) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = selectedOption;
        setAnswers(updatedAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleScore = () => {
        let calculatedScore = 0;
        questions.forEach((question, index) => {
            if (answers[index] === question.selectedAnswer) {
                calculatedScore += 1;
            }
        });
        setScore(calculatedScore);
        setShowScore(true);
    };

    const handleViewCorrections = () => {
        setShowCorrection(true);
    };

    const handleNextCorrection = () => {
        if (currentCorrectionIndex < questions.length - 1) {
            setCurrentCorrectionIndex(currentCorrectionIndex + 1);
        } else {
            navigate('/');
        }
    };

    const handlePlayerCreation = async (data: PlayerFormValues) => {
        const { name } = data
        setLoader(true)
        if (name.trim()) {
            try {
                const playerId = `player_${Date.now()}`;
                const playerRef = doc(db, 'players', playerId);

                await setDoc(playerRef, {
                    name: name,
                    createdAt: new Date(),
                    questionnairePlayed: quizId,
                });
                localStorage.setItem('playerId', playerId);
                setPlayerCreated(true);
            } catch (error) {
                console.error('Erreur lors de la création du joueur :', error);
            } finally {
                setLoader(false)
                setActive(true)
            }
        }
    };

    return (
        <>
            {!playerCreated ? (
                <CreatePlayer
                    loader={loader}
                    Submit={handlePlayerCreation}
                />
            ) : (
                <div className='card bg-gradient-to-t from-base-secondary to-base-primary'>
                    <HeaderNav text="text-white hover:text-black" />
                    {!showScore && questions.length > 0 ? (
                        <div className='w-full laptop:w-1/2 mt-10 mb-0 laptop:mt-20 laptop:mb-4 space-y-10 laptop:space-y-20'>
                            <h3 className='text-2xl laptop:text-4xl font-bold text-white'>{questions[currentQuestionIndex].question}</h3>
                            <div className="grid grid-cols-2 gap-4 laptop:gap-14 mt-2">
                                {questions[currentQuestionIndex].options.map((option) => (
                                    <div
                                        key={option.id}
                                        className={`p-4 rounded-lg cursor-pointer 
                                    ${showCorrection ? (
                                                answers[currentQuestionIndex] === option.answer
                                                    ? (option.answer === questions[currentQuestionIndex].selectedAnswer ? 'bg-[#e5e3a3] text-black' : 'bg-red-600 text-white')
                                                    : (option.answer === questions[currentQuestionIndex].selectedAnswer ? 'bg-[#e5e3a3] text-black' : 'bg-white')
                                            ) :
                                                (answers[currentQuestionIndex] === option.answer ? 'bg-[#e5e3a3] font-medium' : 'bg-white')}`}
                                        onClick={() => !showCorrection && handleOptionChange(option.answer)}
                                    >
                                        {option.answer}
                                    </div>
                                ))}
                            </div>
                            <div className='text-center'>
                                {currentQuestionIndex < questions.length - 1 ? (
                                    <Button onClick={handleNextQuestion} className='w-full laptop:w-3/4 paragraph rounded-full gap-1 p-5'>
                                        Suivant
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleScore}
                                        className='w-full laptop:w-3/4 paragraph rounded-full gap-1 p-5'
                                        disabled={loader || !questions[currentQuestionIndex].selectedAnswer || active}
                                    >
                                        {loader && <Loader2 className="loader" />}
                                        Terminer 😌
                                    </Button>
                                )}
                            </div>
                        </div>
                    ) : null}

                    {showScore && !showCorrection && (
                        <div className="mt-14 space-y-10">
                            <h3 className='text-center text-2xl font-semibold text-white'>Score: {score}/{questions.length}</h3>
                            <Button onClick={handleViewCorrections} className="w-auto px-4 py-6 laptop:w-full laptop:p-8 paragraph rounded-full gap-1">
                                Tu veux voir les reponses de ton ami(e) 😉
                            </Button>
                        </div>
                    )}

                    {showCorrection && questions.length > 0 && (
                        <div className='w-full laptop:w-1/2 mt-10 mb-0 laptop:mt-20 laptop:mb-4 space-y-10 laptop:space-y-20'>
                            <h3 className='text-2xl laptop:text-4xl font-bold text-white'>{questions[currentQuestionIndex].question}</h3>
                            <div className="grid grid-cols-2 gap-4 laptop:gap-14 mt-2">
                                {questions[currentCorrectionIndex].options.map((option) => (
                                    <div
                                        key={option.id}
                                        className={`p-4 paragraph rounded-lg cursor-pointer
                                    ${answers[currentCorrectionIndex] === option.answer
                                                ? 'bg-base-bg-primary text-black font-medium'
                                                : (option.answer === questions[currentCorrectionIndex].selectedAnswer ? 'bg-[#29a745] text-white' : 'bg-white')}`}
                                    >
                                        {option.answer}
                                    </div>
                                ))}
                            </div>
                            <div className='text-center'>
                                <Button
                                    className='w-full laptop:w-3/4 paragraph rounded-full gap-1 p-5'
                                    onClick={handleNextCorrection}
                                >
                                    {currentCorrectionIndex < questions.length - 1 ? 'Suivant' : "Retour à la page d'accueil"}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};