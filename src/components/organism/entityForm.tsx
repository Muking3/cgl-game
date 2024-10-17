import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Field, renderField } from "@/utils/renderField";
import { UseFormReturn } from "react-hook-form";

interface EntityFormProps {
    form: UseFormReturn<any>;
    clearMessage?: () => void;
    url?: string | null;
    onSubmit: (data: any) => void;
    loader: boolean;
    inputSection: Field[]
    text: string
}

export default function EntityForm({ onSubmit, inputSection, form, loader, clearMessage, url, text }: EntityFormProps) {
    return (
        <>
            <div className="w-full tablet:w-1/2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-input w-full laptop:w-80% text-center">
                        <div className="space-y-6">
                            {inputSection.map(field => (
                                <div key={field.name}>
                                    {renderField({ field, form, clearMessage, url })}
                                </div>
                            ))}
                        </div>
                        <Button type="submit" className="btn hover:bg-kingfisher-950">
                            {loader && <Loader2 className="loader" />}
                            {text}
                        </Button>
                    </form>
                </Form>
            </div>
        </>
    );
}

