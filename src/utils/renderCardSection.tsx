import { CardCustom } from "@/components/molecules/CardCustom";
import { renderField } from "@/utils/renderField";
import { CardSection } from "@/types/cardSection";
import { UseFormReturn } from "react-hook-form";

interface RenderCardSectionProps {
    section: string;
    cardSections: CardSection[];
    form: UseFormReturn<any>;
    clearMessage?: () => void;
    url?: string | null;
}

export const renderCardSection = ({ section, cardSections, form, clearMessage, url }: RenderCardSectionProps) =>
    cardSections
        .filter(card => card.section === section)
        .map((card, index) => (
            <CardCustom key={index} title={card.title}>
                <div className={`${card.position === 'col' ? 'space-input' : 'flex justify-between gap-6 tablet:gap-8'}`}>
                    {card.fields.map(field => (
                        <div className={`${card.position === 'col' ? 'w-full' : 'w-1/2'}`} key={field.name}>
                            {renderField({ field, form, clearMessage, url })}
                        </div>
                    ))}
                </div>
            </CardCustom>
        ));
