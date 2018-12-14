import React from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";



const styles = { height: 400, width: "100%" };

class Carosel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        autoplay: true
        };
    }
    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
    visiableOnSelect = active => {
        console.log(`visiable onSelect active=${active}`);
    };
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };
    goToSlide = () => {
        this.slider.goToSlide(4);
    };
    autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };
    _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
        rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
        this.setState({ leftIcon, rightIcon });
    };
    render() {
        return (
        <div className="container-fluid">
            <Row>
            <Col span={12} style={{ paddingTop: "20px" }}>
                <RBCarousel version={4} className="carousel-fade">
                <div style={{ ...styles, backgroundColor: "skyblue" }}>
                    <div className="carousel-center">
                    <h2>Interests</h2>
                        <ul>
                            <li>
                                Computer Science
                            </li>
                            <li>
                                Robotics
                            </li>
                            <li>
                                Music
                            </li>
                            <li>
                                Engineering
                            </li>
                            <li>
                                Math
                            </li>
                        </ul>
                    </div>
                    <div className="carousel-caption">Interests</div>
                </div>
                <div style={{ ...styles, backgroundColor: "yellowgreen" }}>
                    <span className="carousel-center">
                    <h2>Education</h2>
                        <ul>
                            <li>
                                Helio Training FullStack Web Development Certification
                                <br/>
                                In Progress
                            </li>
                            <li>
                                Utah State University Computer Science
                                <br/>
                                In Progress
                            </li>
                            <li>
                                JATC Engineering Graduate
                            </li>
                            <li>
                                Alta High School Graduate
                            </li>
                        </ul>
                    </span>
                    <div className="carousel-caption">Education</div>
                </div>
                </RBCarousel>
            </Col>
            </Row>
        </div>
        );
    }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
    <div className={`col-${props.span}`} style={props.style}>
        {props.children}
    </div>
);
export default Carosel;