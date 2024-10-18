import Quiz from "@/pages/quiz";
import { Route, Routes } from 'react-router-dom';
import AnswerQuiz from "./pages/answerQuiz";
import HomePage from "./pages/homePage";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BurgerMenu from "@/components/molecules/burgerMenu";
import Register from "./pages/register";

export default function App() {

  return (

    <>
      <div className="py-4 px-2 laptop:py-10 laptop:px-4">
        {/* <BurgerMenu /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/:quizId" element={<AnswerQuiz />} />
        </Routes>
      </div>
    </>
  );
};



// import { useEffect, useState } from "react";
// import { auth, db } from "./configuration";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await setDoc(doc(db, "creator", user.uid), {
//         username: username,
//         email: email,
//         createdAt: new Date(),
//       });

//       console.log("Utilisateur créé avec succès !");
//       setLoading(false);
//     } catch (error) {
//       console.error("Erreur lors de la création de l'utilisateur :", error);
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white">
//       <h2>Créer un Compte</h2>
//       <form onSubmit={handleSignup}>
//         <div>
//           <label>Nom d'utilisateur:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Mot de passe:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <button type="submit" disabled={loading}>
//           {loading ? "Création en cours..." : "Créer un Compte"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;