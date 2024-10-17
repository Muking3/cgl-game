// // import { useState, useEffect } from 'react';
// // import { doc, getDoc } from 'firebase/firestore';
// // import { useParams } from 'react-router-dom'; // Utilisez ceci si vous utilisez React Router
// // import { db } from '@/configuration';

// // const AnswerQuiz = () => {
// //     const { quizId } = useParams();  // Récupérer l'ID du questionnaire depuis l'URL
// //     const [questions, setQuestions] = useState([]);
// //     const [answers, setAnswers] = useState([]);

// //     useEffect(() => {
// //         const fetchQuiz = async () => {
// //             const docRef = doc(db, "quizResponses", quizId);
// //             const docSnap = await getDoc(docRef);

// //             if (docSnap.exists()) {
// //                 const quizData = docSnap.data();
// //                 setQuestions(quizData.questions);
// //                 setAnswers(Array(quizData.questions.length).fill(null));  // Initialiser les réponses
// //             } else {
// //                 console.log("Aucun questionnaire trouvé");
// //             }
// //         };

// //         fetchQuiz();
// //     }, [quizId]);

// //     const handleOptionChange = (index, selectedOption) => {
// //         const updatedAnswers = [...answers];
// //         updatedAnswers[index] = selectedOption;
// //         setAnswers(updatedAnswers);
// //     };

// //     const handleSubmit = () => {
// //         // Logique pour soumettre les réponses
// //         console.log("Réponses : ", answers);
// //     };

// //     return (
// //         <div>
// //             {questions.length > 0 ? (
// //                 questions.map((question, index) => (
// //                     <div key={index}>
// //                         <h3>{question.question}</h3>
// //                         {question.options.map((option, optionIndex) => (
// //                             <div
// //                                 key={optionIndex}
// //                                 className={`p-4 border rounded-lg cursor-pointer ${answers[index] === option.answer ? 'bg-blue-500 text-white' : 'bg-white'}`}
// //                                 onClick={() => handleOptionChange(index, option.answer)}
// //                             >
// //                                 {option.answer}
// //                             </div>
// //                         ))}
// //                     </div>
// //                 ))
// //             ) : (
// //                 <p>Chargement du questionnaire...</p>
// //             )}
// //             <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded">
// //                 Soumettre mes réponses
// //             </button>
// //         </div>
// //     );
// // };

// // export default AnswerQuiz;








// import { useState, useEffect } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { useParams } from 'react-router-dom'; // Utilisez ceci si vous utilisez React Router
// import { db } from '@/configuration';

// const AnswerQuiz = () => {
//     const { quizId } = useParams();  // Récupérer l'ID du questionnaire depuis l'URL
//     const [questions, setQuestions] = useState([]);
//     const [answers, setAnswers] = useState([]);

//     useEffect(() => {
//         const fetchQuiz = async () => {
//             if (quizId) { // Vérification de la présence de quizId
//                 const docRef = doc(db, "quizResponses", quizId);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     const quizData = docSnap.data();
//                     setQuestions(quizData.questions);
//                     setAnswers(Array(quizData.questions.length).fill(null));  // Initialiser les réponses
//                 } else {
//                     console.log("Aucun questionnaire trouvé");
//                 }
//             } else {
//                 console.log("Quiz ID est manquant");
//             }
//         };

//         fetchQuiz();
//     }, [quizId]);

//     const handleOptionChange = (index, selectedOption) => {
//         const updatedAnswers = [...answers];
//         updatedAnswers[index] = selectedOption;
//         setAnswers(updatedAnswers);
//     };

//     const handleSubmit = () => {
//         // Logique pour soumettre les réponses
//         console.log("Réponses : ", answers);
//     };

//     return (
//         <div>
//             {questions.length > 0 ? (
//                 questions.map((question, index) => (
//                     <div key={index}>
//                         <h3>{question.question}</h3>
//                         {question.options.map((option, optionIndex) => (
//                             <div
//                                 key={optionIndex}
//                                 className={`p-4 border rounded-lg cursor-pointer ${answers[index] === option.answer ? 'bg-blue-500 text-white' : 'bg-white'}`}
//                                 onClick={() => handleOptionChange(index, option.answer)}
//                             >
//                                 {option.answer}
//                             </div>
//                         ))}
//                     </div>
//                 ))
//             ) : (
//                 <p>Chargement du questionnaire...</p>
//             )}
//             <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded">
//                 Soumettre mes réponses
//             </button>
//         </div>
//     );
// };

// export default AnswerQuiz;







// import { useState, useEffect } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { useParams } from 'react-router-dom';
// import { db } from '@/configuration';

// const AnswerQuiz = () => {
//     const { quizId } = useParams();
//     const [questions, setQuestions] = useState([]);
//     const [answers, setAnswers] = useState([]);
//     const [score, setScore] = useState(null);
//     const [showCorrection, setShowCorrection] = useState(false);

//     useEffect(() => {
//         const fetchQuiz = async () => {
//             if (quizId) {
//                 const docRef = doc(db, "quizResponses", quizId);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     const quizData = docSnap.data();
//                     setQuestions(quizData.questions);
//                     setAnswers(Array(quizData.questions.length).fill(null));
//                 } else {
//                     console.log("Aucun questionnaire trouvé");
//                 }
//             } else {
//                 console.log("Quiz ID est manquant");
//             }
//         };

//         fetchQuiz();
//     }, [quizId]);

//     const handleOptionChange = (index, selectedOption) => {
//         const updatedAnswers = [...answers];
//         updatedAnswers[index] = selectedOption;
//         setAnswers(updatedAnswers);
//     };

//     const handleSubmit = () => {
//         let calculatedScore = 0;

//         questions.forEach((question, index) => {
//             if (answers[index] === question.selectedAnswer) {  // Comparer avec la réponse correcte
//                 calculatedScore += 1;
//             }
//         });

//         setScore(calculatedScore);
//         setShowCorrection(true);  // Afficher la correction après soumission
//     };

//     return (
//         <div>
//             {questions.length > 0 ? (
//                 questions.map((question, index) => (
//                     <div key={index}>
//                         <h3>{question.question}</h3>
//                         {question.options.map((option, optionIndex) => (
//                             <div
//                                 key={optionIndex}
//                                 className={`p-4 border rounded-lg cursor-pointer ${answers[index] === option.answer ? 'bg-blue-500 text-white' : 'bg-white'}`}
//                                 onClick={() => handleOptionChange(index, option.answer)}
//                             >
//                                 {option.answer}
//                             </div>
//                         ))}
//                         {showCorrection && (
//                             <p className={answers[index] === question.selectedAnswer ? 'text-green-500' : 'text-red-500'}>
//                                 {answers[index] === question.selectedAnswer ? 'Correct!' : `Incorrect. Correct answer: ${question.selectedAnswer}`}
//                             </p>
//                         )}
//                     </div>
//                 ))
//             ) : (
//                 <p>Chargement du questionnaire...</p>
//             )}

//             <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded">
//                 Soumettre mes réponses
//             </button>

//             {showCorrection && (
//                 <div className="mt-4">
//                     <h3>Score: {score}/{questions.length}</h3>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AnswerQuiz;








// import { useState, useEffect } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { useParams } from 'react-router-dom';
// import { db } from '@/configuration';

// const AnswerQuiz = () => {
//     const { quizId } = useParams();
//     const [questions, setQuestions] = useState([]);
//     const [answers, setAnswers] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(null);
//     const [showScore, setShowScore] = useState(false);
//     const [showCorrection, setShowCorrection] = useState(false);

//     useEffect(() => {
//         const fetchQuiz = async () => {
//             if (quizId) {
//                 const docRef = doc(db, "quizResponses", quizId);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     const quizData = docSnap.data();
//                     setQuestions(quizData.questions);
//                     setAnswers(Array(quizData.questions.length).fill(null));
//                 } else {
//                     console.log("Aucun questionnaire trouvé");
//                 }
//             } else {
//                 console.log("Quiz ID est manquant");
//             }
//         };

//         fetchQuiz();
//     }, [quizId]);

//     const handleOptionChange = (selectedOption) => {
//         const updatedAnswers = [...answers];
//         updatedAnswers[currentQuestionIndex] = selectedOption;
//         setAnswers(updatedAnswers);
//     };

//     const handleNextQuestion = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         }
//     };

//     const handleSubmit = () => {
//         let calculatedScore = 0;

//         questions.forEach((question, index) => {
//             if (answers[index] === question.selectedAnswer) {
//                 calculatedScore += 1;
//             }
//         });

//         setScore(calculatedScore);
//         setShowScore(true);
//     };

//     const handleViewCorrections = () => {
//         setShowCorrection(true);
//     };

//     return (
//         <div>
//             {!showScore && questions.length > 0 ? (
//                 <div>
//                     <h3>{questions[currentQuestionIndex].question}</h3>
//                     {questions[currentQuestionIndex].options.map((option, optionIndex) => (
//                         <div
//                             key={optionIndex}
//                             className={`p-4 border rounded-lg cursor-pointer ${answers[currentQuestionIndex] === option.answer ? 'bg-blue-500 text-white' : 'bg-white'}`}
//                             onClick={() => handleOptionChange(option.answer)}
//                         >
//                             {option.answer}
//                         </div>
//                     ))}

//                     <div className="mt-4">
//                         {currentQuestionIndex < questions.length - 1 ? (
//                             <button onClick={handleNextQuestion} className="p-2 bg-blue-500 text-white rounded">
//                                 Suivant
//                             </button>
//                         ) : (
//                             <button onClick={handleSubmit} className="p-2 bg-green-500 text-white rounded">
//                                 Soumettre mes réponses
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             ) : null}

//             {showScore && (
//                 <div className="mt-4">
//                     <h3>Score: {score}/{questions.length}</h3>
//                     <button onClick={handleViewCorrections} className="mt-2 p-2 bg-yellow-500 text-white rounded">
//                         Voir les corrections
//                     </button>
//                 </div>
//             )}

//             {showCorrection && questions.length > 0 && (
//                 <div className="mt-4">
//                     {questions.map((question, index) => (
//                         <div key={index}>
//                             <h3>{question.question}</h3>
//                             {question.options.map((option, optionIndex) => (
//                                 <div
//                                     key={optionIndex}
//                                     className={`p-4 border rounded-lg ${answers[index] === option.answer ? (answers[index] === question.selectedAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-white'}`}
//                                 >
//                                     {option.answer}
//                                 </div>
//                             ))}
//                             <p className="mt-2">
//                                 Réponse correcte : <strong>{question.selectedAnswer}</strong>
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AnswerQuiz;










// import { useState, useEffect } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { useParams } from 'react-router-dom';
// import { db } from '@/configuration';

// const AnswerQuiz = () => {
//     const { quizId } = useParams();
//     const [questions, setQuestions] = useState([]);
//     const [answers, setAnswers] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(null);
//     const [showScore, setShowScore] = useState(false);
//     const [showCorrection, setShowCorrection] = useState(false);

//     useEffect(() => {
//         const fetchQuiz = async () => {
//             if (quizId) {
//                 const docRef = doc(db, "quizResponses", quizId);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     const quizData = docSnap.data();
//                     setQuestions(quizData.questions);
//                     setAnswers(Array(quizData.questions.length).fill(null));
//                 } else {
//                     console.log("Aucun questionnaire trouvé");
//                 }
//             } else {
//                 console.log("Quiz ID est manquant");
//             }
//         };

//         fetchQuiz();
//     }, [quizId]);

//     const handleOptionChange = (selectedOption) => {
//         const updatedAnswers = [...answers];
//         updatedAnswers[currentQuestionIndex] = selectedOption;
//         setAnswers(updatedAnswers);
//     };

//     const handleNextQuestion = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         }
//     };

//     const handleSubmit = () => {
//         let calculatedScore = 0;

//         questions.forEach((question, index) => {
//             if (answers[index] === question.selectedAnswer) {
//                 calculatedScore += 1;
//             }
//         });

//         setScore(calculatedScore);
//         setShowScore(true);
//     };

//     const handleViewCorrections = () => {
//         setShowCorrection(true);
//     };

//     return (
//         <div>
//             {!showScore && questions.length > 0 ? (
//                 <div>
//                     <h3>{questions[currentQuestionIndex].question}</h3>
//                     {questions[currentQuestionIndex].options.map((option, optionIndex) => (
//                         <div
//                             key={optionIndex}
//                             className={`p-4 border rounded-lg cursor-pointer 
//                             ${showCorrection ? (
//                                 answers[currentQuestionIndex] === option.answer 
//                                 ? (option.answer === questions[currentQuestionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') 
//                                 : (option.answer === questions[currentQuestionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-white') 
//                             ) : 
//                             (answers[currentQuestionIndex] === option.answer ? 'bg-blue-500 text-white' : 'bg-white')}`}
//                             onClick={() => !showCorrection && handleOptionChange(option.answer)}
//                         >
//                             {option.answer}
//                         </div>
//                     ))}

//                     <div className="mt-4">
//                         {currentQuestionIndex < questions.length - 1 ? (
//                             <button onClick={handleNextQuestion} className="p-2 bg-blue-500 text-white rounded">
//                                 Suivant
//                             </button>
//                         ) : (
//                             <button onClick={handleSubmit} className="p-2 bg-green-500 text-white rounded">
//                                 Soumettre mes réponses
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             ) : null}

//             {showScore && (
//                 <div className="mt-4">
//                     <h3>Score: {score}/{questions.length}</h3>
//                     <button onClick={handleViewCorrections} className="mt-2 p-2 bg-yellow-500 text-white rounded">
//                         Voir les corrections
//                     </button>
//                 </div>
//             )}

//             {showCorrection && questions.length > 0 && (
//                 <div className="mt-4">
//                     {questions.map((question, index) => (
//                         <div key={index}>
//                             <h3>{question.question}</h3>
//                             {question.options.map((option, optionIndex) => (
//                                 <div
//                                     key={optionIndex}
//                                     className={`p-4 border rounded-lg 
//                                     ${answers[index] === option.answer 
//                                         ? (option.answer === question.selectedAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') 
//                                         : (option.answer === question.selectedAnswer ? 'bg-green-500 text-white' : 'bg-white')}`}
//                                 >
//                                     {option.answer}
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AnswerQuiz;










// import { useState, useEffect } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { useParams, useNavigate } from 'react-router-dom'; // Importation de useNavigate pour la redirection
// import { db } from '@/configuration';

// const AnswerQuiz = () => {
//     const { quizId } = useParams();
//     const navigate = useNavigate(); // Initialisation pour la redirection
//     const [questions, setQuestions] = useState([]);
//     const [answers, setAnswers] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(null);
//     const [showScore, setShowScore] = useState(false);
//     const [showCorrection, setShowCorrection] = useState(false);
//     const [currentCorrectionIndex, setCurrentCorrectionIndex] = useState(0); // Index pour la correction

//     useEffect(() => {
//         const fetchQuiz = async () => {
//             if (quizId) {
//                 const docRef = doc(db, "quizResponses", quizId);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     const quizData = docSnap.data();
//                     setQuestions(quizData.questions);
//                     setAnswers(Array(quizData.questions.length).fill(null));
//                 } else {
//                     console.log("Aucun questionnaire trouvé");
//                 }
//             } else {
//                 console.log("Quiz ID est manquant");
//             }
//         };

//         fetchQuiz();
//     }, [quizId]);

//     const handleOptionChange = (selectedOption) => {
//         const updatedAnswers = [...answers];
//         updatedAnswers[currentQuestionIndex] = selectedOption;
//         setAnswers(updatedAnswers);
//     };

//     const handleNextQuestion = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         }
//     };

//     const handleSubmit = () => {
//         let calculatedScore = 0;

//         questions.forEach((question, index) => {
//             if (answers[index] === question.selectedAnswer) {
//                 calculatedScore += 1;
//             }
//         });

//         setScore(calculatedScore);
//         setShowScore(true);
//     };

//     const handleViewCorrections = () => {
//         setShowCorrection(true);
//     };

//     const handleNextCorrection = () => {
//         if (currentCorrectionIndex < questions.length - 1) {
//             setCurrentCorrectionIndex(currentCorrectionIndex + 1);
//         } else {
//             // Une fois que toutes les corrections sont affichées, on peut retourner à l'accueil
//             navigate('/'); // Redirection à la page d'accueil
//         }
//     };

//     return (
//         <div>
//             {!showScore && questions.length > 0 ? (
//                 <div>
//                     <h3>{questions[currentQuestionIndex].question}</h3>
//                     {questions[currentQuestionIndex].options.map((option, optionIndex) => (
//                         <div
//                             key={optionIndex}
//                             className={`p-4 border rounded-lg cursor-pointer 
//                             ${showCorrection ? (
//                                 answers[currentQuestionIndex] === option.answer 
//                                 ? (option.answer === questions[currentQuestionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') 
//                                 : (option.answer === questions[currentQuestionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-white') 
//                             ) : 
//                             (answers[currentQuestionIndex] === option.answer ? 'bg-blue-500 text-white' : 'bg-white')}`}
//                             onClick={() => !showCorrection && handleOptionChange(option.answer)}
//                         >
//                             {option.answer}
//                         </div>
//                     ))}

//                     <div className="mt-4">
//                         {currentQuestionIndex < questions.length - 1 ? (
//                             <button onClick={handleNextQuestion} className="p-2 bg-blue-500 text-white rounded">
//                                 Suivant
//                             </button>
//                         ) : (
//                             <button onClick={handleSubmit} className="p-2 bg-green-500 text-white rounded">
//                                 Soumettre mes réponses
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             ) : null}

//             {showScore && (
//                 <div className="mt-4">
//                     <h3>Score: {score}/{questions.length}</h3>
//                     <button onClick={handleViewCorrections} className="mt-2 p-2 bg-yellow-500 text-white rounded">
//                         Voir les corrections
//                     </button>
//                 </div>
//             )}

//             {showCorrection && questions.length > 0 && (
//                 <div className="mt-4">
//                     <h3>{questions[currentCorrectionIndex].question}</h3>
//                     {questions[currentCorrectionIndex].options.map((option, optionIndex) => (
//                         <div
//                             key={optionIndex}
//                             className={`p-4 border rounded-lg 
//                             ${answers[currentCorrectionIndex] === option.answer 
//                                 ? (option.answer === questions[currentCorrectionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') 
//                                 : (option.answer === questions[currentCorrectionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-white')}`}
//                         >
//                             {option.answer}
//                         </div>
//                     ))}

//                     <div className="mt-4">
//                         {currentCorrectionIndex < questions.length - 1 ? (
//                             <button onClick={handleNextCorrection} className="p-2 bg-blue-500 text-white rounded">
//                                 Suivant
//                             </button>
//                         ) : (
//                             <button onClick={handleNextCorrection} className="p-2 bg-red-500 text-white rounded">
//                                 Retour à la page d'accueil
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AnswerQuiz;








// import { useState, useEffect } from 'react';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { useParams, useNavigate } from 'react-router-dom'; 
// import { db } from '@/configuration';

// const AnswerQuiz = () => {
//     const { quizId } = useParams();
//     const navigate = useNavigate(); 
//     const [questions, setQuestions] = useState([]);
//     const [answers, setAnswers] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(null);
//     const [showScore, setShowScore] = useState(false);
//     const [showCorrection, setShowCorrection] = useState(false);
//     const [currentCorrectionIndex, setCurrentCorrectionIndex] = useState(0);
    
//     // État pour le nom du joueur
//     const [playerName, setPlayerName] = useState('');
//     const [playerCreated, setPlayerCreated] = useState(false);

//     useEffect(() => {
//         const fetchQuiz = async () => {
//             if (quizId) {
//                 const docRef = doc(db, "quizResponses", quizId);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     const quizData = docSnap.data();
//                     setQuestions(quizData.questions);
//                     setAnswers(Array(quizData.questions.length).fill(null));
//                 } else {
//                     console.log("Aucun questionnaire trouvé");
//                 }
//             } else {
//                 console.log("Quiz ID est manquant");
//             }
//         };

//         fetchQuiz();
//     }, [quizId]);

//     const handleOptionChange = (selectedOption) => {
//         const updatedAnswers = [...answers];
//         updatedAnswers[currentQuestionIndex] = selectedOption;
//         setAnswers(updatedAnswers);
//     };

//     const handleNextQuestion = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         }
//     };

//     const handleSubmit = () => {
//         let calculatedScore = 0;

//         questions.forEach((question, index) => {
//             if (answers[index] === question.selectedAnswer) {
//                 calculatedScore += 1;
//             }
//         });

//         setScore(calculatedScore);
//         setShowScore(true);
//     };

//     const handleViewCorrections = () => {
//         setShowCorrection(true);
//     };

//     const handleNextCorrection = () => {
//         if (currentCorrectionIndex < questions.length - 1) {
//             setCurrentCorrectionIndex(currentCorrectionIndex + 1);
//         } else {
//             navigate('/'); 
//         }
//     };

//     const handlePlayerCreation = async (event) => {
//         event.preventDefault();
//         if (playerName) {
//             try {
//                 // Créer le joueur dans Firestore
//                 const playerRef = doc(db, 'players', playerName);
//                 await setDoc(playerRef, { name: playerName, createdAt: new Date() });
//                 setPlayerCreated(true); // Indiquer que le joueur a été créé
//             } catch (error) {
//                 console.error('Erreur lors de la création du joueur :', error);
//             }
//         } else {
//             alert('Veuillez entrer un nom.');
//         }
//     };

//     return (
//         <div>
//             {!playerCreated ? (
//                 <div className="flex flex-col items-center justify-center min-h-screen">
//                     <h2 className="mb-4 text-2xl">Créer un Avatar</h2>
//                     <form onSubmit={handlePlayerCreation} className="flex flex-col">
//                         <input
//                             type="text"
//                             placeholder="Entrez votre nom"
//                             value={playerName}
//                             onChange={(e) => setPlayerName(e.target.value)}
//                             className="p-2 mb-4 border rounded"
//                             required
//                         />
//                         <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//                             Créer
//                         </button>
//                     </form>
//                 </div>
//             ) : (
//                 <>
//                     {!showScore && questions.length > 0 ? (
//                         <div>
//                             <h3>{questions[currentQuestionIndex].question}</h3>
//                             {questions[currentQuestionIndex].options.map((option, optionIndex) => (
//                                 <div
//                                     key={optionIndex}
//                                     className={`p-4 border rounded-lg cursor-pointer 
//                                     ${showCorrection ? (
//                                         answers[currentQuestionIndex] === option.answer 
//                                         ? (option.answer === questions[currentQuestionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') 
//                                         : (option.answer === questions[currentQuestionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-white') 
//                                     ) : 
//                                     (answers[currentQuestionIndex] === option.answer ? 'bg-blue-500 text-white' : 'bg-white')}`}
//                                     onClick={() => !showCorrection && handleOptionChange(option.answer)}
//                                 >
//                                     {option.answer}
//                                 </div>
//                             ))}

//                             <div className="mt-4">
//                                 {currentQuestionIndex < questions.length - 1 ? (
//                                     <button onClick={handleNextQuestion} className="p-2 bg-blue-500 text-white rounded">
//                                         Suivant
//                                     </button>
//                                 ) : (
//                                     <button onClick={handleSubmit} className="p-2 bg-green-500 text-white rounded">
//                                         Soumettre mes réponses
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     ) : null}

//                     {showScore && (
//                         <div className="mt-4">
//                             <h3>Score: {score}/{questions.length}</h3>
//                             <button onClick={handleViewCorrections} className="mt-2 p-2 bg-yellow-500 text-white rounded">
//                                 Voir les corrections
//                             </button>
//                         </div>
//                     )}

//                     {showCorrection && questions.length > 0 && (
//                         <div className="mt-4">
//                             <h3>{questions[currentCorrectionIndex].question}</h3>
//                             {questions[currentCorrectionIndex].options.map((option, optionIndex) => (
//                                 <div
//                                     key={optionIndex}
//                                     className={`p-4 border rounded-lg 
//                                     ${answers[currentCorrectionIndex] === option.answer 
//                                         ? (option.answer === questions[currentCorrectionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') 
//                                         : (option.answer === questions[currentCorrectionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-white')}`}
//                                 >
//                                     {option.answer}
//                                 </div>
//                             ))}

//                             <div className="mt-4">
//                                 {currentCorrectionIndex < questions.length - 1 ? (
//                                     <button onClick={handleNextCorrection} className="p-2 bg-blue-500 text-white rounded">
//                                         Suivant
//                                     </button>
//                                 ) : (
//                                     <button onClick={handleNextCorrection} className="p-2 bg-red-500 text-white rounded">
//                                         Retour à la page d'accueil
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default AnswerQuiz;




















// import { useState, useEffect } from 'react';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { useParams, useNavigate } from 'react-router-dom'; 
// import { db } from '@/configuration';

// const AnswerQuiz = () => {
//     const { quizId } = useParams();
//     const navigate = useNavigate(); 
//     const [questions, setQuestions] = useState([]);
//     const [answers, setAnswers] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(null);
//     const [showScore, setShowScore] = useState(false);
//     const [showCorrection, setShowCorrection] = useState(false);
//     const [currentCorrectionIndex, setCurrentCorrectionIndex] = useState(0);
    
//     const [playerName, setPlayerName] = useState('');
//     const [playerCreated, setPlayerCreated] = useState(false);

//     useEffect(() => {
//         const fetchQuiz = async () => {
//             if (quizId) {
//                 const docRef = doc(db, "quizResponses", quizId);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     const quizData = docSnap.data();
//                     setQuestions(quizData.questions);
//                     setAnswers(Array(quizData.questions.length).fill(null));
//                 } else {
//                     console.log("Aucun questionnaire trouvé");
//                 }
//             } else {
//                 console.log("Quiz ID est manquant");
//             }
//         };

//         fetchQuiz();
//     }, [quizId]);

//     useEffect(() => {
//         const checkPlayerExists = async () => {
//             if (playerName) {
//                 const playerRef = doc(db, 'players', playerName);
//                 const playerSnap = await getDoc(playerRef);
//                 if (playerSnap.exists()) {
//                     setPlayerCreated(true);
//                 }
//             }
//         };

//         checkPlayerExists();
//     }, [playerName]);

//     const handleOptionChange = (selectedOption) => {
//         const updatedAnswers = [...answers];
//         updatedAnswers[currentQuestionIndex] = selectedOption;
//         setAnswers(updatedAnswers);
//     };

//     const handleNextQuestion = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         }
//     };

//     const handleSubmit = () => {
//         let calculatedScore = 0;

//         questions.forEach((question, index) => {
//             if (answers[index] === question.selectedAnswer) {
//                 calculatedScore += 1;
//             }
//         });

//         setScore(calculatedScore);
//         setShowScore(true);
//     };

//     const handleViewCorrections = () => {
//         setShowCorrection(true);
//     };

//     const handleNextCorrection = () => {
//         if (currentCorrectionIndex < questions.length - 1) {
//             setCurrentCorrectionIndex(currentCorrectionIndex + 1);
//         } else {
//             navigate('/'); 
//         }
//     };

//     const handlePlayerCreation = async (event) => {
//         event.preventDefault();
//         if (playerName) {
//             try {
//                 const playerRef = doc(db, 'players', playerName);
//                 await setDoc(playerRef, { name: playerName, createdAt: new Date() });
//                 setPlayerCreated(true);
//             } catch (error) {
//                 console.error('Erreur lors de la création du joueur :', error);
//             }
//         } else {
//             alert('Veuillez entrer un nom.');
//         }
//     };

//     return (
//         <div>
//             {!playerCreated ? (
//                 <div className="flex flex-col items-center justify-center min-h-screen">
//                     <h2 className="mb-4 text-2xl">Créer un Avatar</h2>
//                     <form onSubmit={handlePlayerCreation} className="flex flex-col">
//                         <input
//                             type="text"
//                             placeholder="Entrez votre nom"
//                             value={playerName}
//                             onChange={(e) => setPlayerName(e.target.value)}
//                             className="p-2 mb-4 border rounded"
//                             required
//                         />
//                         <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//                             Créer
//                         </button>
//                     </form>
//                 </div>
//             ) : (
//                 <>
//                     {!showScore && questions.length > 0 ? (
//                         <div>
//                             <h3>{questions[currentQuestionIndex].question}</h3>
//                             {questions[currentQuestionIndex].options.map((option, optionIndex) => (
//                                 <div
//                                     key={optionIndex}
//                                     className={`p-4 border rounded-lg cursor-pointer 
//                                     ${showCorrection ? (
//                                         answers[currentQuestionIndex] === option.answer 
//                                         ? (option.answer === questions[currentQuestionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') 
//                                         : (option.answer === questions[currentQuestionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-white') 
//                                     ) : 
//                                     (answers[currentQuestionIndex] === option.answer ? 'bg-blue-500 text-white' : 'bg-white')}`}
//                                     onClick={() => !showCorrection && handleOptionChange(option.answer)}
//                                 >
//                                     {option.answer}
//                                 </div>
//                             ))}

//                             <div className="mt-4">
//                                 {currentQuestionIndex < questions.length - 1 ? (
//                                     <button onClick={handleNextQuestion} className="p-2 bg-blue-500 text-white rounded">
//                                         Suivant
//                                     </button>
//                                 ) : (
//                                     <button onClick={handleSubmit} className="p-2 bg-green-500 text-white rounded">
//                                         Soumettre mes réponses
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     ) : null}

//                     {showScore && (
//                         <div className="mt-4">
//                             <h3>Score: {score}/{questions.length}</h3>
//                             <button onClick={handleViewCorrections} className="mt-2 p-2 bg-yellow-500 text-white rounded">
//                                 Voir les corrections
//                             </button>
//                         </div>
//                     )}

//                     {showCorrection && questions.length > 0 && (
//                         <div className="mt-4">
//                             <h3>{questions[currentCorrectionIndex].question}</h3>
//                             {questions[currentCorrectionIndex].options.map((option, optionIndex) => (
//                                 <div
//                                     key={optionIndex}
//                                     className={`p-4 border rounded-lg 
//                                     ${answers[currentCorrectionIndex] === option.answer 
//                                         ? (option.answer === questions[currentCorrectionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white') 
//                                         : (option.answer === questions[currentCorrectionIndex].selectedAnswer ? 'bg-green-500 text-white' : 'bg-white')}`}
//                                 >
//                                     {option.answer}
//                                 </div>
//                             ))}

//                             <div className="mt-4">
//                                 {currentCorrectionIndex < questions.length - 1 ? (
//                                     <button onClick={handleNextCorrection} className="p-2 bg-blue-500 text-white rounded">
//                                         Suivant
//                                     </button>
//                                 ) : (
//                                     <button onClick={handleNextCorrection} className="p-2 bg-red-500 text-white rounded">
//                                         Retour à la page d'accueil
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                 </>
//             )}
//         </div>
//     );
// };

// export default AnswerQuiz;


























import { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom'; 
import { db } from '@/configuration'; // Import Firebase configuration

const AnswerQuiz = () => {
    const { quizId } = useParams();
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [playerCreated, setPlayerCreated] = useState(false);
    const [playerName, setPlayerName] = useState('');

    useEffect(() => {
        const checkPlayerSession = () => {
            const playerId = localStorage.getItem('playerId');
            if (playerId) {
                setPlayerCreated(true);
            }
        };
        checkPlayerSession();
    }, []);

    const handlePlayerCreation = async () => {
        if (playerName.trim()) {
            const playerId = `player_${Date.now()}`; // Génération d'un ID unique
            const playerRef = doc(db, 'players', playerId);
            
            // Stockage du joueur dans Firestore
            await setDoc(playerRef, {
                name: playerName,
                createdAt: new Date(),
                questionnairePlayed: quizId,
            });

            // Enregistrement de l'ID du joueur dans le localStorage
            localStorage.setItem('playerId', playerId);
            setPlayerCreated(true);
        }
    };

    const fetchQuiz = async () => {
        const docRef = doc(db, "quizResponses", quizId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const quizData = docSnap.data();
            setQuestions(quizData.questions);
            setAnswers(Array(quizData.questions.length).fill(null));
        } else {
            console.log("Aucun questionnaire trouvé");
        }
    };

    useEffect(() => {
        if (quizId && playerCreated) {
            fetchQuiz();
        }
    }, [quizId, playerCreated]);

    return (
        <div>
            {!playerCreated ? (
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h2>Créez votre joueur pour commencer le quiz</h2>
                    <input
                        type="text"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder="Entrez votre nom"
                        className="p-2 border rounded mt-4"
                    />
                    <button
                        onClick={handlePlayerCreation}
                        className="mt-4 p-2 bg-green-500 text-white rounded"
                    >
                        Créer le joueur
                    </button>
                </div>
            ) : (
                <div>
                    {questions.length > 0 ? (
                        <div>
                            <h3>{questions[currentQuestionIndex].question}</h3>
                            {/* Affichage des questions */}
                            {questions[currentQuestionIndex].options.map((option, optionIndex) => (
                                <div
                                    key={optionIndex}
                                    className={`p-4 border rounded-lg cursor-pointer 
                                    ${answers[currentQuestionIndex] === option.answer ? 'bg-blue-500 text-white' : 'bg-white'}`}
                                    onClick={() => handleOptionChange(option.answer)}
                                >
                                    {option.answer}
                                </div>
                            ))}

                            <div className="mt-4">
                                {currentQuestionIndex < questions.length - 1 ? (
                                    <button onClick={handleNextQuestion} className="p-2 bg-blue-500 text-white rounded">
                                        Suivant
                                    </button>
                                ) : (
                                    <button onClick={handleSubmit} className="p-2 bg-green-500 text-white rounded">
                                        Soumettre mes réponses
                                    </button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <p>Chargement du questionnaire...</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AnswerQuiz;
