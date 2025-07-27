
import Linetitle from "../../components/LineTitleComponent";
import ErrorContent from "../../components/ErrorContent"


export default function Contact({ translations }) {
    const t = translations
    const content = t.contact_content
    
    return (
        <div className="page__contact maxWidth">
            <Linetitle title={content.LineTitle}></Linetitle>
        </div>
    );
}