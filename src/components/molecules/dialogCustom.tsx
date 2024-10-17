import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Message from "@/components/ui/message";
import { MessageState } from "@/types/message";

type ContentProps = {
    open: boolean
    onOpenChange: () => void;
    title: string;
    description: string;
    action: string;
    handleDelete: () => void;
    messageState: MessageState
}

export default function DialogCustom({ onOpenChange, title, description, action, handleDelete, messageState, open }: ContentProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {messageState.content && (
                <Message
                    message={messageState.content}
                    className={messageState.type === "success" ? "bg-base-bg-primary" : "bg-base-bg-tertiary"}
                />
            )}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription className='py-4'>{description}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={handleDelete}>{action}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}