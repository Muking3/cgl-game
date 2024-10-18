type CardSelectProps = {
    option: {
        answer: string;
        id: number;
    };
    isSelected: boolean;
    onClick: () => any;
}

export const CardSelect = ({ option, isSelected, onClick }: CardSelectProps) => (
    <div
        className={`p-4 paragraph rounded-lg cursor-pointer ${isSelected ? 'bg-[#e5e3a3] text-black font-medium' : 'bg-white'}`}
        onClick={onClick}
    >
        {option.answer}
    </div>
);