import Navbar from "../components/Navbar";
import { Button, Col, Row } from "react-bootstrap";
import img from "../assets/images/casual-life-3d-girl-meditating.png";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <div className="Home">
        <Navbar />
        <div className="home-container">
          <div className="center-text">
            <h1>Hey you!</h1>
            <p>
              Breathe into the essence of yoga, where each pose unfolds a
              journey of self-discovery and holistic well-being.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="imgContainer">
        <Row>
          <Col md={6}>
            <div className="h_footer">
              <div className="h_ftCona">
                <img src={img} alt="header-footer" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="h_ftright">
              <div className="containerBox">
                <h1 style={{ color: "#3D3F42", fontWeight: "bold" }}>
                  Mindful Asanas: Balancing Breath and Movement for Inner
                  Harmony
                </h1>
                <p className="text-secondary my-4">
                  Embark on a transformative journey, harmonizing breath and
                  movement in yoga's mindful asanas. Each pose becomes a portal
                  to self-discovery, weaving together the rhythm of breath and
                  the fluidity of motion, fostering a deeper connection between
                  mind, body, and spirit.
                </p>
                <p className="text-secondary">
                  Discover the profound impact of synchronized breath and
                  movement on the mat, extending its benefits into everyday
                  life. This topic invites practitioners to embrace a holistic
                  approach to well-being, offering tools to navigate the
                  complexities of modern life with grace and centeredness.
                </p>
                <div>
                  <Button>Browser Cources</Button>

                  <Button className="contact_btn">Contact us</Button>
                </div>
              </div>
            </div>
          </Col>
          <Footer />
        </Row>
      </div>
    </>
  );
}

export default Home;
