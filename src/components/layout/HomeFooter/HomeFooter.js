import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function HomeFooter(props) {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            {/* <span>Get connected with us on social networks:</span> */}
          </div>

          <div>
            <a href="https://www.facebook.com/" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="https://www.facebook.com/" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>

            <a href="https://www.facebook.com/" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-2">
            <MDBRow className="mt-3">
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h2 className="text-uppercase fw-bold mb-4">SHOES</h2>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Liên Hệ</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  admin@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 0336909524
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 :
        </div>
      </MDBFooter>
    </div>
  );
}

export default HomeFooter;
