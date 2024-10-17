import React, { useState } from 'react';
import { db } from '@/configuration';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const CreatePlayer = () => {
    const [playerName, setPlayerName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (playerName) {
            try {
                // Enregistrer le nom du joueur dans Firestore
                await addDoc(collection(db, 'players'), {
                    name: playerName,
                    createdAt: new Date(),
                });
                // Naviguer vers la page du questionnaire après l'enregistrement
                navigate('/quiz'); // Remplace '/quiz' par le chemin vers ton questionnaire
            } catch (error) {
                console.error('Erreur lors de l\'ajout du joueur :', error);
            }
        } else {
            alert('Veuillez entrer un nom.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="mb-4 text-2xl">Créer un Avatar</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="text"
                    placeholder="Entrez votre nom"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="p-2 mb-4 border rounded"
                    required
                />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                    Créer
                </button>
            </form>
        </div>
    );
};

export default CreatePlayer;
