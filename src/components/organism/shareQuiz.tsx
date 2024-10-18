import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, LinkedinShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon } from 'react-share';

type ContentProps = {
    quizLink: string
}

export default function ShareQuiz({ quizLink }: ContentProps) {
    return (
        <div>
            <p>Partagez ce lien avec vos amis pour qu'ils puissent répondre au questionnaire :</p>
            <a href={quizLink} target="_blank" rel="noopener noreferrer" className="text-white underline font-medium active:text-base-primary">
                {quizLink}
            </a>

            <div className="flex space-x-4 mt-4">
                <FacebookShareButton url={quizLink} title="Venez jouer à ce quiz amusant !">
                    <FacebookIcon size={48} round />
                </FacebookShareButton>

                <TwitterShareButton url={quizLink} title="Venez jouer à ce quiz amusant !">
                    <TwitterIcon size={48} round />
                </TwitterShareButton>

                <WhatsappShareButton url={quizLink} title="Venez jouer à ce quiz amusant !">
                    <WhatsappIcon size={48} round />
                </WhatsappShareButton>

                <LinkedinShareButton url={quizLink}>
                    <LinkedinIcon size={48} round />
                </LinkedinShareButton>
            </div>
        </div>
    );
};
