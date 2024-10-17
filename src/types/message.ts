export type MessageState = {
    content: string | null;
    type: "success" | "error" | "warning" | null;
};