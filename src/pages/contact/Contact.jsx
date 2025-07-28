
import Linetitle from "../../components/LineTitleComponent";
import ErrorContent from "../../components/ErrorContent"

import EmailForm from "../../assets/Email form.svg"
import PhoneForm from "../../assets/Phone form.svg"
import UserForm from "../../assets/User.svg"


export default function Contact({ translations }) {
    const t = translations
    const content = t.contact_content

    return (
        <div className="page__contact maxWidth">
            <Linetitle title={content.LineTitle}></Linetitle>

            <div className="info-text">
                <p className="info">{content.info}</p>
                <br />
                <p className="subInfo">{content.subInfo} (info@f-plusaudit.uz)</p>
            </div>

            <form>
                <div className="input-group">
                    <input type="text" required placeholder={content.fullName} />

                    <div className="form-icon">
                        <img src={UserForm} alt="User Icon" width={20} />
                    </div>
                </div>

                <div className="input-group">
                    <input type="email" required placeholder={content.email} />

                    <div className="form-icon">
                        <img src={EmailForm} alt="Email Icon" width={20} />
                    </div>
                </div>

                <div className="input-group">
                    <input type="number" placeholder={content.phone} />

                    <div className="form-icon">
                        <img src={PhoneForm} alt="Phone Icon" width={20} />
                    </div>
                </div>

                <div className="input-group">
                    <textarea name="msgs" placeholder={content.message}></textarea>
                </div>

                <button className="send-button">
                    <p>
                        {content.Send}
                    </p>
                </ button>
            </form>


        </div>
    );
}