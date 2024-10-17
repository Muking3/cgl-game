import { MessageState } from "@/types/message";
import { useEffect, useState } from "react";

export function useMessage(initialState: MessageState) {
    const [messageState, setMessageState] = useState<MessageState>(initialState);

    useEffect(() => {
        if (messageState.content) {
            const timer = setTimeout(() => {
                clearMessage();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [messageState.content]);

    const clearMessage = () => setMessageState({ content: null, type: null });

    return { messageState, setMessageState, clearMessage };
}