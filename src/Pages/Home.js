import React, {Component} from 'react';
import CarouselBox from "../Components/Carousel.Box";
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    CardImg,
    CardText,
    CardTitle,
    Container,
    TabContainer, ToastContainer
} from "react-bootstrap";
class Home extends Component {
    render() {
        return (<div className="bg-dark">

                <CarouselBox/>
                <TabContainer  >
                    <CardGroup >
                        <Card border="dark" className="bg-dark">
                            <Button variant="dark">
                                <CardImg
                                    variant="top"
                                    height="610"
                                    width="30"
                                    src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/84934543-5991-4c93-97eb-beb6186a3ad7/orig"
                                />
                            </Button>
                        </Card >
                        <Card border="dark" className="bg-dark">
                            <Button variant="dark">
                                <CardImg
                                    height="610"
                                    width="30"
                                    variant="top"
                                    src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/f6b2f7b0-8a46-4c39-88e3-8d6b1bfb2aa6/960x960"
                                />
                            </Button>
                        </Card>
                        <Card border="dark" className="bg-dark">
                            <Button variant="dark">
                                <CardImg
                                    variant="top"
                                    height="610"
                                    width="30"
                                    src="https://images-s.kinorium.com/movie/1080/2307718.jpg?1634651189"
                                    />
                            </Button>
                        </Card>
                    </CardGroup>
                </TabContainer>
                <Container className="bg-dark">

                    <h2 className="text-center m-4"> Наша команда </h2>
                    <CardGroup >
                        <Card  bg="dark" text="light" >
                            <CardBody  >
                            <CardImg

                                height="300"

                                src="https://ae04.alicdn.com/kf/Sdc12d5eae7ba458995dc920e9c5e29cb0.jpg"
                            />
                            </CardBody>
                            <CardBody>
                                <CardTitle> Контакты </CardTitle>
                                <CardText> 123423536475 </CardText>
                                <Button variant="outline-light"> Свяжись с нами </Button>
                            </CardBody>

                        </Card>

                    </CardGroup>

                </Container>

        </div>
        );
    }
}

export default Home;