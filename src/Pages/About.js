import React, {Component} from 'react';
import {
    Button,
    Card,
    CardGroup,
    CardImg, CarouselItem,
    Col,
    Container,
    Nav,
    Row,
    TabContainer,
    TabContent, Table,
    TabPane, Tabs, ToastContainer
} from "react-bootstrap";
import CarouselBox from "../Components/Carousel.Box";
import Carousel from "react-bootstrap/Carousel";
import Carous from "react-bootstrap/Carousel";
import amimeImg from "../assets/милые картинки _).jpeg";
import damimeImg from "../assets/02.jpeg";

class About extends Component {

    render() {
        return (
            <Container className="bg-dark " >
                <h2 style={{color:"#7B68EE",marginLeft:"200px"}}  >Фильмы</h2>
               <Carous className="carousel-dark  " style={{width: "1300px", marginLeft:"0px",marginTop:"40px"}} >

                       <Carous.Item>
                           <CardGroup style={{width: "900px"}} className=" bg-dark  m-md-auto">


                               <Button className="bg-dark border-light-subtle  " style={{width: "150px"}}>
                                   <a href="/movies/2022" >

                                       <div className="d-inline-block w-100">
                                           <span>
                                               <h6 className="text-center " style={{color:"#7B68EE"}}>2022 год</h6>
                                           </span>

                                       </div>

                                   </a>
                           </Button>


                           <Button className="bg-dark border-light" style={{width: "150px"}}>

                               <a href="/movies/2022" >

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>2021 год</h6>
                                       </span>

                                   </div>

                               </a>
                           </Button>
                               <Button className="bg-dark border-light" style={{width: "150px"}}>

                                   <a href="/movies/2022" className="d-inline-block w-100">

                                       <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>2020 год</h6>
                                       </span>

                                       </div>

                                   </a>

                               </Button>
                               <Button className="bg-dark border-light" style={{width: "150px"}}>

                                   <a href="/movies/2022" className="d-inline-block w-100">

                                       <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>2019 год</h6>
                                       </span>

                                       </div>

                                   </a>

                               </Button>
                               <Button className="bg-dark border-light" style={{width: "150px"}}>

                                   <a href="/movies/2022" className="d-inline-block w-100">

                                       <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>2018 год</h6>
                                       </span>

                                       </div>

                                   </a>

                               </Button>
                               <Button className="bg-dark border-light" style={{width: "150px"}} >

                                   <a href="/movies/2022" className="d-inline-block w-100">

                                       <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>2017 год</h6>
                                       </span>

                                       </div>

                                   </a>

                               </Button>
                           </CardGroup>
                   </Carous.Item>
                   <Carous.Item>
                       <CardGroup style={{width: "1040px"}} className="m-md-auto">
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" >

                                   <div className="d-inline-block w-100">
                                           <span>
                                               <h6 style={{color:"#7B68EE"}} className="text-center">Русские фильмы</h6>
                                           </span>

                                   </div>

                               </a>

                           </Button>

                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 style={{color:"#7B68EE"}} className="text-center ">Советские фильмы</h6>
                                       </span>

                                   </div>

                               </a>
                           </Button>
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Американские фильмы</h6>
                                       </span>

                                   </div>

                               </a>

                           </Button>
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Индийские фильмы</h6>
                                       </span>

                                   </div>

                               </a>

                           </Button>
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Аниме фильмы</h6>
                                       </span>

                                   </div>

                               </a>

                           </Button>
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Турецкие фильмы</h6>
                                       </span>

                                   </div>

                               </a>

                           </Button>
                       </CardGroup>
                   </Carous.Item>
                   <Carous.Item>
                       <CardGroup style={{width: "900px"}} className="m-md-auto">
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" >

                                   <div className="d-inline-block w-100">
                                           <span>
                                               <h6 className="text-center " style={{color:"#7B68EE"}}>Комедии</h6>
                                           </span>

                                   </div>

                               </a>

                           </Button>

                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Ужасы</h6>
                                       </span>

                                   </div>

                               </a>
                           </Button>
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Фантастически</h6>
                                       </span>

                                   </div>

                               </a>

                           </Button>
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Драмы</h6>
                                       </span>

                                   </div>

                               </a>

                           </Button>
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Триллеры</h6>
                                       </span>

                                   </div>

                               </a>

                           </Button>
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Военные</h6>
                                       </span>

                                   </div>

                               </a>

                           </Button>
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Мелодрамы</h6>
                                       </span>

                                   </div>

                               </a>

                           </Button>
                           <Button className="bg-dark border-light">

                               <a href="/movies/2022" className="d-inline-block w-100">

                                   <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Документальные</h6>
                                       </span>

                                   </div>

                               </a>

                           </Button>
                       </CardGroup>
                   </Carous.Item>

               </Carous>










                <Carous style={{marginTop:"50px", width: "1310px",marginRight:"0px"}}>
                   <Carous.Item style={{marginLeft:"40px" }}>
                    <CardGroup style={{width: "1150px"}} className="m-md-auto">
                        <Button className="bg-dark border-light " style={{width: "150px",marginRight:"30px",height:"100px"}}>

                            <a href="/movies/2022" >

                                <div className="d-inline-block w-100">
                                           <span>
                                               <h6 className="text-center " style={{color:"#7B68EE"}}>Комедии</h6>
                                           </span>

                                </div>

                            </a>

                        </Button>

                        <Button className="bg-dark border-light" style={{marginRight:"30px",width: "150px"}}>

                            <a href="/movies/2022" className="d-inline-block w-100">

                                <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Ужасы</h6>
                                       </span>

                                </div>

                            </a>
                        </Button>
                        <Button className="bg-dark border-light" style={{marginRight:"30px",width: "150px"}}>

                            <a href="/movies/2022" className="d-inline-block w-100">

                                <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Фантастически</h6>
                                       </span>

                                </div>

                            </a>

                        </Button>
                        <Button className="bg-dark border-light" style={{marginRight:"30px",width: "150px"}}>

                            <a href="/movies/2022" className="d-inline-block w-100">

                                <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Драмы</h6>
                                       </span>

                                </div>

                            </a>

                        </Button>
                        <Button className="bg-dark border-light" style={{marginRight:"40px",width: "150px"}}>

                            <a href="/movies/2022" className="d-inline-block w-100">

                                <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Драмы</h6>
                                       </span>

                                </div>

                            </a>

                        </Button>
                        <Button className="bg-dark border-light" style={{marginRight:"0",width: "150px"}}>

                            <a href="/movies/2022" className="d-inline-block w-100">

                                <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Драмы</h6>
                                       </span>

                                </div>

                            </a>

                        </Button>
                    </CardGroup>
                    </Carous.Item>
                    <Carous.Item style={{marginLeft:"40px"}}>
                        <CardGroup style={{width: "1150px",marginLeft:"0px"}} className="m-md-auto">
                            <Button className="bg-dark border-light " style={{width: "150px",marginRight:"30px",height:"100px"}}>

                                <a href="/movies/2022" >

                                    <div className="d-inline-block w-100">
                                           <span>
                                               <h6 className="text-center " style={{color:"#7B68EE"}}>Комедии</h6>
                                           </span>

                                    </div>

                                </a>

                            </Button>

                            <Button className="bg-dark border-light" style={{marginRight:"30px",width: "150px"}}>

                                <a href="/movies/2022" className="d-inline-block w-100">

                                    <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Ужасы</h6>
                                       </span>

                                    </div>

                                </a>
                            </Button>
                            <Button className="bg-dark border-light" style={{marginRight:"30px",width: "150px"}}>

                                <a href="/movies/2022" className="d-inline-block w-100">

                                    <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Фантастически</h6>
                                       </span>

                                    </div>

                                </a>

                            </Button>
                            <Button className="bg-dark border-light" style={{marginRight:"30px",width: "150px"}}>

                                <a href="/movies/2022" className="d-inline-block w-100">

                                    <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Драмы</h6>
                                       </span>

                                    </div>

                                </a>

                            </Button>
                            <Button className="bg-dark border-light" style={{marginRight:"40px",width: "150px"}}>

                                <a href="/movies/2022" className="d-inline-block w-100">

                                    <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Драмы</h6>
                                       </span>

                                    </div>

                                </a>

                            </Button>
                            <Button className="bg-dark border-light" style={{marginRight:"0",width: "150px"}}>

                                <a href="/movies/2022" className="d-inline-block w-100">

                                    <div className="d-inline-block w-100">
                                       <span >
                                           <h6 className="text-center " style={{color:"#7B68EE"}}>Драмы</h6>
                                       </span>

                                    </div>

                                </a>

                            </Button>
                        </CardGroup>
                    </Carous.Item>

            </Carous>







                <section >
                <div className="filtersDesktop__container text-bg-light"><div className="filtersDesktop__container-inner">
                    <div className="filtersDesktop__content">
                        <div className="filtersDesktop__plank-list">
                            <div className="filtersDesktop__plank-item filtersDesktop__plank-item_count_5">
                                <div className="filtersDesktop__plank">
                                    <div className="nbl-plank nbl-plank nbl-plank_textVariation_titleOnTop nbl-plank_asideWidthCanShrink_0 nbl-plank_style_sultan nbl-plank_size_frank">
                                        <div className="nbl-plank__textWrapper">
                                            <div className="nbl-plank__title">
                                                <Button >
                                                <p>Жанры</p>
                                                </Button>
                                                </div>
                                        </div>
                                        <div className="nbl-icon nbl-plank__dropdownIcon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filtersDesktop__plank-item filtersDesktop__plank-item_count_5">
                                <div className="filtersDesktop__plank">
                                    <div className="nbl-plank nbl-plank nbl-plank_textVariation_titleOnTop nbl-plank_disabled nbl-plank_asideWidthCanShrink_0 nbl-plank_style_sultan nbl-plank_size_frank">
                                        <div className="nbl-plank__textWrapper">
                                            <div className="nbl-plank__title">
                                                <p>Поджанры</p>
                                            </div>
                                        </div>
                                        <div className="nbl-icon nbl-plank__dropdownIcon">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filtersDesktop__plank-item filtersDesktop__plank-item_count_5 dropdownCenter">
                                <div className="filtersDesktop__plank">
                                    <div className="nbl-plank nbl-plank nbl-plank_textVariation_titleOnTop nbl-plank_asideWidthCanShrink_0 nbl-plank_style_sultan nbl-plank_size_frank">
                                        <div className="nbl-plank__textWrapper">
                                            <div className="nbl-plank__title">
                                                <p>Страны</p>
                                            </div>
                                        </div>
                                        <div className="nbl-icon nbl-plank__dropdownIcon">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filtersDesktop__plank-item filtersDesktop__plank-item_count_5 dropdownRight">
                                <div className="filtersDesktop__plank">
                                    <div className="nbl-plank nbl-plank nbl-plank_textVariation_titleOnTop nbl-plank_asideWidthCanShrink_0 nbl-plank_style_sultan nbl-plank_size_frank">
                                        <div className="nbl-plank__textWrapper"><div className="nbl-plank__title">
                                            <p>Годы</p>
                                        </div>
                                        </div>
                                        <div className="nbl-icon nbl-plank__dropdownIcon">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filtersDesktop__plank-item filtersDesktop__plank-item_count_5 dropdownRight">
                                <div className="filtersDesktop__plank">
                                    <div className="nbl-plank nbl-plank nbl-plank_textVariation_titleOnTop nbl-plank_asideWidthCanShrink_0 nbl-plank_style_sultan nbl-plank_size_frank">
                                        <div className="nbl-plank__textWrapper">
                                            <div className="nbl-plank__title">
                                                <p>Рейтинг Иви</p>
                                            </div>
                                        </div>
                                        <div className="nbl-icon nbl-plank__dropdownIcon">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filtersDesktop__sausage-list">
                            <div className="filtersDesktop__sausage-list-container"><div className="sausage sausage_type_dark filtersDesktop__sausage">
                                <div className="sausage__icon-add">
                                    <div className="nbl-icon nbl-icon_add_16" style={{width:"11px", height:"11px", lineHeight:"11px",fontSize:"11px"}}>

                                    </div>
                                </div>
                                <div className="sausage__title">По подписке</div>
                            </div>
                                <div className="sausage sausage_type_dark filtersDesktop__sausage">
                                    <div className="sausage__icon-add">
                                        <div className="nbl-icon nbl-icon_add_16" style={{width:"11px", height:"11px", lineHeight:"11px",fontSize:"11px"}}>

                                        </div>
                                    </div>
                                    <div className="sausage__title">На языке оригинала</div>
                                </div>
                                <div className="sausage sausage_type_dark filtersDesktop__sausage">
                                    <div className="sausage__icon-add">
                                        <div className="nbl-icon nbl-icon_add_16" style={{width:"11px", height:"11px", lineHeight:"11px",fontSize:"11px"}}>

                                        </div>
                                    </div>
                                    <div className="sausage__title">С субтитрами</div>
                                </div>
                                <div className="sausage sausage_type_dark filtersDesktop__sausage">
                                    <div className="sausage__icon-add">
                                        <div className="nbl-icon nbl-icon_add_16" style={{width:"11px", height:"11px", lineHeight:"11px",fontSize:"11px"}}>

                                        </div>
                                    </div>
                                    <div className="sausage__title">Объёмный звук</div>
                                </div>
                            </div>
                        </div>
                        <div className="filtersDesktop__button-container">
                            <div className="filtersDesktop__button filtersDesktop__button_disabled">
                                <div className="nbl-icon nbl-icon_close_16" style={{width:"11px", height:"11px", lineHeight:"11px",fontSize:"11px"}}>

                                </div>Сбросить фильтры</div>
                        </div>
                    </div>
                </div>
                </div>
                </section>

               <TabContainer id="ledt-tabs-exampe" defaultActiveKey="first" style={{width:"100px"}}>
                   <Row style={{marginRight:"60px",marginTop:"100px"}}>
                       <Col sm={1}>
                           <Nav variant="pills" className="flex-column mt-3">
                               <Nav.Item>
                                   <Nav.Link eventKey="first">
                                       драмы
                                   </Nav.Link>
                                   <Nav.Link eventKey="second">
                                       комедии
                                   </Nav.Link>
                                   <Nav.Link eventKey="third">
                                       приключения
                                   </Nav.Link>
                               </Nav.Item>
                           </Nav>
                       </Col>

                           <TabContent className="mt-3" ><TabPane eventKey="first">
                               <TabContainer >

                              <CardGroup style={{width:"800px"}} >
                                  <Card border="dark" className="bg-dark">
                                      <Button variant="dark">
                                          <CardImg
                                              variant="top"
                                              height="300"
                                              width="30"
                                              src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/84934543-5991-4c93-97eb-beb6186a3ad7/orig"
                                          />
                                      </Button>
                                  </Card >
                                  <Card border="dark" className="bg-dark">
                                      <Button variant="dark">
                                          <CardImg
                                              height="300"
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
                                              height="300"
                                              width="30"
                                              src="https://images-s.kinorium.com/movie/1080/2307718.jpg?1634651189"
                                          />
                                      </Button>
                                  </Card>
                              </CardGroup>

                               </TabContainer></TabPane>
                               <TabPane eventKey="second">
                                   <img src="https://cdn.nur.kz/images/1120x630/ed18139868df1fc7.jpeg"/>
                               </TabPane>
                               <TabPane eventKey="third">
                                   <img src="https://cs12.pikabu.ru/post_img/big/2022/11/08/10/1667929102152124336.jpg"/>
                               </TabPane>
                           </TabContent>

               </Row>
               </TabContainer>

           </Container>
        )
    }
}

export default About;