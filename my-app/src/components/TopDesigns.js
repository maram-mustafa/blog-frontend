import React, {Component} from 'react';
import {Carousel, Container, Navbar} from "react-bootstrap";
import './TopDesigns.css';

class TopDesigns extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Text href="#home" id="editNav">Sugar High Blog</Navbar.Text>
                    </Container>
                </Navbar>
                <Carousel id="editSizeCarousel">
                    <Carousel.Item interval={1000}>
                        <img
                            id="editImage"
                            className=" d-block w-100"
                            src=" https://kaboompics.com/cache/4/d/a/c/5/4dac5f226272f6466a258fa1721a9ab5e52b1b9a.jpeg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="editText">
                            <h1>Anything is good if it's made of chocolate!</h1>
                            <h4>Life is like a box of chocolates</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            id="editImage"
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1586040456399-50595fb77ecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                            alt="Second slide"
                        />
                        <Carousel.Caption className="editText">
                            <h1>There is no sincerer love than the love of food!</h1>
                            <h4>Everyone appreciates good food</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            id="editImage"
                            className="d-block w-100"
                            // src="https://media.istockphoto.com/photos/home-baking-and-coffee-break-picture-id1311399566?k=20&m=1311399566&s=612x612&w=0&h=eQU2tZnggf6Xnf6gcvvyCsSmjmDHVQj_vScR1BeGGD8="
                            src="https://media.istockphoto.com/photos/homemade-chocolate-brownies-shot-from-above-picture-id1130692246?b=1&k=20&m=1130692246&s=170667a&w=0&h=g1GXUeu7Sdf4I-D9AHc6qBrKTU_ZDuz6Ie33Vsf4z4k="
                            alt="Third slide"
                        />
                        <Carousel.Caption className="editText">
                            <h1>Cakes are healthy too, you just eat a small slice!</h1>
                            <h4> be ready to eat slice of heaven</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default TopDesigns;