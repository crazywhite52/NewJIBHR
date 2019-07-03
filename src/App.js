import React from "react";
import BackgroundSlideshow from "react-background-slideshow";
import img1 from "./image_main/jib1.jpg";
import img2 from "./image_main/jib2.jpg";
import img3 from "./image_main/jib3.jpg";

import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.OpenReg = this.OpenReg.bind(this);
  }
  OpenReg() {
    window.location.replace("/main");
  }
  render() {
    return (
      // <div onClick={this.OpenReg}>
      //   <BackgroundSlideshow {...fadeProperties} images={[img1, img2, img3]} />
      // </div>
      <div onClick={this.OpenReg} style={{ marginTop: "1rem" }}>
        <MDBContainer fluid>
          <MDBCarousel
            interval={6000}
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    height={940}
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    height={940}
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    height={940}
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}
export default App;
