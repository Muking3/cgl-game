import EntityForm from "@/components/organism/entityForm";
import HeaderNav from "@/components/organism/headerNav";
import Message from "@/components/ui/message";
import { playerConfig } from "@/config/playerConfig";
import { useMessage } from "@/hooks/useMessage";
import { PlayerFormValues, playerSchema } from "@/schemas/playerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type ContentProps = {
    loader: boolean
    Submit: () => Promise<void>
}

export default function CreatePlayer({ loader, Submit }: ContentProps) {
    const { messageState } = useMessage({
        content: null,
        type: null,
    });
    const defaultValues: PlayerFormValues = {
        name: "",
    }
    const form = useForm<PlayerFormValues>({
        resolver: zodResolver(playerSchema),
        defaultValues: defaultValues,
    })
    return (
        <>
            <div className="bg-white card">
                <HeaderNav />
                <div className="laptop:w-1/3 mt-10 mb-0 laptop:mt-20 laptop:mb-4 space-y-10 laptop:space-y-20">
                    <h2 className="text-2xl laptop:text-4xl font-bold text-center">
                        Créer un joueur
                    </h2>
                    {messageState.content && (
                        <Message
                            message={messageState.content}
                            className={messageState.type === "success" ? "bg-base-bg-primary" : "bg-base-bg-tertiary"}
                        />
                    )}
                    <EntityForm
                        onSubmit={form.handleSubmit(Submit)}
                        inputSection={playerConfig}
                        form={form}
                        loader={loader}
                        text="Prêt 😈"
                    />
                </div>
            </div>
        </>
    );
};