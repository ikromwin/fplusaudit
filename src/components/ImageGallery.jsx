import Masonry from 'react-masonry-css';
import './test.css';
import { useState } from 'react';

const allImages = [
    { src: '/public/data/team_images/T_1.jpg', title: 'Look 1' },
    { src: '/public/data/team_images/T_2.jpg', title: 'Look 2' },
    { src: '/public/data/team_images/T_3.jpg', title: 'Look 3' },
    { src: '/public/data/team_images/T_4.jpg', title: 'Look 4' },
    { src: '/public/data/team_images/T_5.jpg', title: 'Look 5' },
    { src: '/public/data/team_images/T_6.jpg', title: 'Look 6' },
    { src: '/public/data/team_images/T_7.jpg', title: 'Look 7' },
    { src: '/public/data/team_images/T_8.jpg', title: 'Look 8' },
    { src: '/public/data/team_images/T_8.jpg', title: 'Look 8' },
    { src: '/public/data/team_images/T_8.jpg', title: 'Look 8' },
    { src: '/public/data/team_images/T_8.jpg', title: 'Look 8' },
    { src: '/public/data/team_images/T_8.jpg', title: 'Look 8' },
    { src: '/public/data/team_images/T_8.jpg', title: 'Look 8' },
    { src: '/public/data/team_images/T_8.jpg', title: 'Look 8' },
    { src: '/public/data/team_images/T_8.jpg', title: 'Look 8' },
];

export default function MasonryGallery() {
    const [visibleCount, setVisibleCount] = useState(10);
    const [loading, setLoading] = useState(false);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + 3);
            setLoading(false);
        }, 1000); // simulate loading time
    };

    const breakpointColumnsObj = {
        default: 3,
        768: 2,
        500: 1,
    };

    return (
        <div className="masonry-gallery">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {allImages.slice(0, visibleCount).map((img, index) => (
                    <div key={index} className="masonry-item">
                        <img src={img.src} alt={img.title} />
                        <div className='image_description'>
                            <p>{img.title}</p>
                        </div>
                    </div>
                ))}
            </Masonry>

            {visibleCount < allImages.length && (
                <div className="load-more-wrapper">
                    <button className="load-more-btn" onClick={loadMore} disabled={loading}>
                        {loading ? 'Yuklanmoqda...' : 'Load More'}
                    </button>
                </div>
            )}
        </div>
    );
}