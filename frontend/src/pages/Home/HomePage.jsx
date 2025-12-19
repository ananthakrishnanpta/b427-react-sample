import Carousel from "../../components/Carousel/Carousel";
import './HomePage.css';

const carousel_images = [
    {
        id : 1,
        img_src : '/images/carousel/img1.jpg',
        title: 'buhahahaha',
        caption : "yuhoooo!!!"
    },
    {
        id : 2,
        img_src : '/images/carousel/img2.jpg',
        title: 'buhahahaha',
        caption : "yuhoooo!!!"
    },
    {
        id : 3,
        img_src : '/images/carousel/img3.jpg',
        title: 'buhahahaha',
        caption : "yuhoooo!!!"
    }
]

function HomePage() {
    return (
        <div className="container h-100">
            <div className="row home_banner ">
                <div className="col d-flex flex-column h-100">
                    <Carousel images = {carousel_images} />
                </div>
                <div className="col bg-success h-100"></div>
            </div>
        </div>
    );
}

export default HomePage;
