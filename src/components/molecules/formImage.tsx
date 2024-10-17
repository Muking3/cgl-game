import React, { useEffect, useState } from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { imageSchema } from '@/schemas/imageSchema';

type ContentProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    name: Path<T>;
    label?: string;
    labelClassName?: string;
    onFocus?: () => void;
    url?: string | null;
};

export default function FormImage<T extends FieldValues>({
    form,
    name,
    label,
    labelClassName,
    onFocus,
    url = null
}: ContentProps<T>) {
    const [src, setSrc] = useState<string | null>(url);
    const [message, setMessage] = useState<string | null>(null);
    const [color, setColor] = useState<string>('');

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const result = imageSchema.safeParse({ file });
        if (result.success) {
            const reader = new FileReader();
            reader.readAsDataURL(file!);
            reader.onload = () => setSrc(reader.result as string);
            setMessage(null);
            setColor('');
        } else {
            setMessage(result.error.errors[0]?.message);
            setColor('text-red-500');
            setSrc(null);
        }
    };
    const colorBorder = message
        ? 'border-red-500 border-solid hover:border-base-bg-primary hover:border-solid'
        : 'border-gray-400 border-dashed hover:border-base-bg-primary hover:border-solid';

    useEffect(() => {
        setSrc(url);
    }, [url]);
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className='cursor-pointer'>
                    {label && (
                        <FormLabel className={`flex justify-start ${labelClassName}`}>
                            {label}
                        </FormLabel>
                    )}
                    <FormControl>
                        <div className={`w-full h-52 desktop:h-80 laptop:h-48 rounded-md border ${colorBorder} flex justify-center items-center relative bg-gray-100`}>
                            {!src ? (
                                <p className={`p-4 absolute z-0 font-extrabold text-center text-xs laptop:text-base ${color}`}>
                                    {message || 'Cliquez pour sélectionner une image'}
                                </p>
                            ) : (
                                <div className="absolute w-full h-full top-0 left-0">
                                    <img
                                        src={src}
                                        alt="Image sélectionnée"
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>
                            )}
                            <Input
                                type="file"
                                accept="image/png, image/jpeg, image/jpg"
                                className="opacity-0 w-full h-full z-10 cursor-pointer"
                                onChange={(e) => {
                                    field.onChange(e.target.files?.[0]);;
                                    handleImage(e);
                                }}
                                onFocus={onFocus}
                            />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
