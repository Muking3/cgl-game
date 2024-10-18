import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Field, renderField } from "@/utils/renderField";
import { UseFormReturn } from "react-hook-form";
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface EntityFormProps {
    form: UseFormReturn<any>;
    clearMessage?: () => void;
    url?: string | null;
    onSubmit: (data: any) => void;
    loader: boolean;
    inputSection: Field[]
    text: string
    google?: string
    facebook?: string
    handleGoogle?: () => any
    handleFacebook?: () => any
}

export default function EntityForm({
    onSubmit,
    inputSection,
    form,
    loader,
    clearMessage,
    url,
    text,
    google,
    facebook,
    handleGoogle,
    handleFacebook }: EntityFormProps) {
    return (
        <>
            <div className="w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-input text-center">
                        <div className="space-y-6 laptop:space-y-8">
                            {inputSection.map(field => (
                                <div key={field.name}>
                                    {renderField({ field, form, clearMessage, url })}
                                </div>
                            ))}
                        </div>
                        <div className="space-y-3 laptop:space-y-4">
                            <Button type="submit" className="btn hover:bg-poppy-500 p-5">
                                {loader && <Loader2 className="loader" />}
                                {text}
                            </Button>
                            {google && <Button className="w-full paragraph rounded-full gap-3 p-5" onClick={handleGoogle}>
                                <FontAwesomeIcon icon={faGoogle} size="lg" />
                                <span>{google}</span>
                            </Button>}
                            {facebook && <Button className="w-full paragraph rounded-full gap-3 p-5" onClick={handleFacebook}>
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                                <span>{facebook}</span>
                            </Button>}
                        </div>
                    </form>
                </Form>
            </div>
        </>
    );
}
