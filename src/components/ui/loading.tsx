type ContentProps = {
    heigth?: string
}
export default function Loading({ heigth }: ContentProps) {
    const styleHeigth = heigth ? heigth : "h-96"
    return (
        <div className={`flex items-center justify-center w-full ${styleHeigth}`}>
            <div className="animate-spin rounded-full border-2 border-t-4 
            border-t-custom-green border-green-200 h-12 w-12">
            </div>
        </div>
    )
}
