import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FieldValues, Path, PathValue, UseFormReturn } from 'react-hook-form';
import { useState } from 'react';

type ContentProps<T extends FieldValues, O extends Record<string, string>> = {
    form: UseFormReturn<T>;
    name: Path<T>;
    label?: string;
    placeholder?: string;
    labelClassName?: string;
    onFocus?: () => void;
    fetchOptions?: (field: string, value: string) => Promise<O[]>
    optionLabelKey?: keyof O
};

export default function FormSearchSelect<T extends FieldValues, O extends Record<string, any>>({
    form,
    name,
    label,
    placeholder,
    labelClassName,
    onFocus,
    fetchOptions,
    optionLabelKey,
}: ContentProps<T, O>) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<O[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value && fetchOptions) {
            const filtered = await fetchOptions(optionLabelKey as string, value);
            const filteredArray = Array.isArray(filtered) ? filtered : typeof filtered === 'object' ? [filtered] : filtered;
            setFilteredOptions(filteredArray);
            setIsDropdownOpen(true);
        } else {
            setIsDropdownOpen(false);
        }
    };

    const handleSelectItem = (option: O) => {
        if (optionLabelKey !== undefined) {
            const typedValue = option[optionLabelKey] as PathValue<T, Path<T>>;
            form.setValue(name, typedValue);
            setSearchTerm(option[optionLabelKey] as string);
            setIsDropdownOpen(false);
        }
    };

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="h-full">
                    <FormLabel className={`flex justify-start paragraph ${labelClassName}`}>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <div className="relative" tabIndex={0} onFocus={onFocus}>
                            <Input
                                type="text"
                                {...field}
                                value={searchTerm}
                                onChange={(e) => {
                                    handleInputChange(e);
                                    field.onChange(e.target.value);
                                }}
                                onBlur={() => setIsDropdownOpen(false)}
                                placeholder={placeholder}
                                className="w-full paragraph"
                            />
                            {isDropdownOpen && (
                                <div className="absolute w-full z-10 bg-white shadow-md border rounded-md max-h-40 overflow-y-auto">
                                    {filteredOptions.length > 0 ? (
                                        filteredOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                onClick={() => handleSelectItem(option)}
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                            >
                                                {optionLabelKey !== undefined ? option[optionLabelKey] as string : 'Inconnu'}
                                            </div>
                                        ))
                                    )
                                        : (
                                            <div className="px-4 py-2">Aucun résultat</div>
                                        )}
                                </div>
                            )}
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}


