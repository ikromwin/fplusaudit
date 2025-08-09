import { useState } from "react";




export default function Contact({ translations }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState(false);

    const TELEGRAM_BOT_TOKEN = "7463275144:AAFZD2hgf3K_B1yHdKPBXH7InDrdmKb378A"; // replace with your token
    const TELEGRAM_CHAT_ID = "7614065503"; // replace with your group/chat ID




    const t = translations
    const content = t.contact_content




    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const text = `<b>New Form Submission:</b>
                    👤 <b>Name:</b> ${formData.fullName}
                    📧 <b>Email:</b> ${formData.email}
                    📞 <b>Phone:</b> ${formData.phone}
                    📝 <b>Message:</b> ${formData.message}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: text,
                    parse_mode: "HTML",
                }),
            });

            if (response.ok) {
                setStatus(true)
                setTimeout(() => {
                    setStatus(false)
                }, 5000);
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus("Error sending message.");
        }
    };

    return (
        <div className="page__contact maxWidth">
            <Linetitle title={content.LineTitle}></Linetitle>

            <div className="info-text">
                <p className="info">{content.info}</p>
                <br />
                <p className="subInfo">{content.subInfo} (info@f-plusaudit.uz)</p>
            </div>

            <form onSubmit={handleSubmit} >
                <div className="input-group">
                    <input
                        type="text"
                        required
                        placeholder={content.fullName}
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />

                    <div className="form-icon">
                        <User color="white" size={20} />
                    </div>
                </div>

                <div className="input-group">
                    <input
                        type="email"
                        required
                        name="email"
                        placeholder={content.email}
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <div className="form-icon">
                        <Mail color="#ffffff" size={20} />
                    </div>
                </div>

                <div className="input-group">
                    <input
                        type="number"
                        name="phone"
                        placeholder={content.phone}
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <div className="form-icon">
                        <Phone size={20} color="#ffffff" />
                    </div>
                </div>

                <div className="input-group">
                    <textarea
                        name="message"
                        placeholder={content.message}
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type="submit" className={status ? "send-button sent" : "send-button"} disabled={status}>
                    <p>
                        {!status ? <p>{content.Send}</p> : <p>{content.Sent}</p>}
                    </p>
                </ button>
            </form>


        </div>
    );
}