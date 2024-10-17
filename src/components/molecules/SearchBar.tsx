import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../ui/input';

interface SearchBarProps {
    setValueSearch: (value: string) => void;
    className?: string
}

export default function SearchBar({ setValueSearch, className }: SearchBarProps) {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value);
    };
    return (
        <div className={`flex ml-auto items-center space-x-4 ${className}`}>
            <div className="relative rounded-lg bg-gray-100 dark:bg-gray-800 w-48 laptop:w-full flex items-center justify-center">
                <Input
                    type="search"
                    placeholder="Recherhe"
                    className="rounded-lg appearance-none w-48 pl-8 laptop:w-full text-[10px] tablet:text-sm placeholder:text-sm"
                    onChange={handleSearch}
                />
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-2.5 top-3 w-4 h-4 text-gray-400 dark:text-gray-600"
                />
            </div>
        </div>
    )
}
