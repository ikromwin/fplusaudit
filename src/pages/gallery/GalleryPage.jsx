import ImageTabs from "../../components/ImageTabs"
import Linetitle from "../../components/LineTitleComponent"

function GalleryPage({ translations }) {

    const t = translations

    return (
        <div className="page__contact maxWidth">
            <Linetitle title={t.teamImages}></Linetitle>


            <div className="aboutUs-employee">
                <div className="items">
                    <ImageTabs />
                </div>
            </div>

        </div>
    )
}

export default GalleryPage