export type Action<T> = {
    label: string;
    to: (item: T) => string;
    onClick: (item: T) => void;
};

export type Column<T> = {
    label: string;
    accessor: keyof T | ((item: T) => any);
    isImage?: boolean;
    className?: string;
    pdf?: boolean;
};

export type Tab = {
    label: string;
    value: string;
    className?: string
};