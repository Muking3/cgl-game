import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ContentProps = {
    message: string
    className: string
}

export default function Message({ message, className } : ContentProps) {
    return (
        <div className={`alert ${className}`}>
            <FontAwesomeIcon icon={faCircleExclamation} size='lg'/>
            <span>{message}</span>
        </div>
    );
}

