import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import amimeImg from '../assets/милые картинки _).jpeg';
import damimeImg from '../assets/02.jpeg';
class CarouselBox extends Component {
    render() {
        return (
            <Carousel className="carousel-dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ amimeImg }
                        height="500"
                        alt="Anime"
                    />
                    <Carousel.Caption>
                        <h3> Anime image </h3>
                        <p>131245367678889087865433423534</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="500"
                        src={ damimeImg }
                        alt="Anime 2"
                    />
                    <Carousel.Caption>
                        <h3> Anime2 image </h3>
                        <p>145673124536767888908786543342</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselBox;