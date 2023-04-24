import {useState} from "react";
import {Carousel} from "react-bootstrap";

export default function SlideShows()
{

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container" >
            <div className="row  justify-content-md-center" >
                <div className="col-8 col-md-8 col-sm-6">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://127.0.0.1:8000/api/BImage/7"
                                alt="First slide"
                                width="800"
                                height="400"
                            />
                            <Carousel.Caption>

                                <h3> گیفت کارت های پلی استیشن</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://127.0.0.1:8000/api/BImage/8"
                                alt="Second slide"
                                width="800"
                                height="400"
                            />

                            <Carousel.Caption>
                                <h3>گیفت کارت های پلی استور</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://127.0.0.1:8000/api/BImage/9"
                                alt="Third slide"
                                width="800"
                                height="400"
                            />

                            <Carousel.Caption>
                                <h3>گیفت کارت های ایکس باکس</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        </div>


    )
}