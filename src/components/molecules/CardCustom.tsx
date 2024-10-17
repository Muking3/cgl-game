import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ContentProps = {
    title?: string;
    children: React.ReactNode
    className?: string
}

export function CardCustom({ title, children, className }: ContentProps) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="title">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}