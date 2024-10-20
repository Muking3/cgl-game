export type Questions = {
    question: string;
    options: {
        answer: string;
        id: number;
    }[];
    selectedAnswer?: string | null
}