import React from "react";
import { Nav, Navbar, Offcanvas, Container } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaBars,
  FaCode,
  FaMobile,
  FaSlack,
  FaStar,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Alert, Space } from "antd";
import { useForm, ValidationError } from "@formspree/react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Fancybox from "../components/Fancybox";
import a from "../image/a.png";
import img from "../image/img.png";
import b from "../image/b.png";
import c from "../image/c.png";
import contact from "../image/contact.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";

function Header() {
  const [state, handleSubmit] = useForm("xrgnvyvq");
  const expand = "xl";
  const [typeEffect] = useTypewriter({
    words: ["Developer", "Full-Stack Developer", "Web Designer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  if (state.succeeded) {
    return (
      <Space direction="vertical" style={{ width: "100%" }}>
        <Alert
          message="Mesajınız Gönderildi Ekranı yenileyebilirsiniz"
          type="success"
          showIcon
        />
      </Space>
    );
  }
  return (
    <div className="App">
      <Navbar expand={expand} className="navbar mb-3">
        <Container>
          <Navbar.Brand href="#">Süleyman Ardıç</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 navbar_title">
                <Nav.Link href="#section--1">Anasayfa</Nav.Link>
                <Nav.Link href="#section--2">Özellikler</Nav.Link>
                <Nav.Link href="#section--3">Özgeçmiş</Nav.Link>
                <Nav.Link href="#section--4">İletişim</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <section className="section a" id="section--1">
        <div className="container">
          <div className="header_title">
            <div className="col-lg-7">
              <div className="content">
                <div className="content_alt">
                  <span className="altyazı">Dünyama hoşgeldin</span>
                  <h1 className="baslik">
                    Merhaba, adım <span>Süleyman Ardıç</span> <br />
                    <span>ben |</span>
                    <span className="typewrite ab">{typeEffect}</span>
                  </h1>
                  <p>
                    Yönetim Bilişim Sistemleri bölümü mezunuyum. İşletme ve
                    yazılımı ortak bir bünyede buluşturan yönetim bilişim
                    sistemleri bölümün de yazılım tarafında kendimi geliştirmek
                    istedim. Mesleğimi iyi bir şekilde icra etmek adına
                    öğrenmeyi ve araştırmayı hayatımın merkezine aldım. Hem
                    meslek içi hem meslek dışı kültürel anlamda kendimi
                    geliştirmeye devam ediyorum. Yazılım dilleri arasında
                    severek kullandığım diller HTML, CSS, JAVASCRİPT, REACT.JS,
                    NODE.JS ve NEXT.JS. Veri tabanında aktif olarak MongoDB
                    kullanmaktayım ve projeler gerçekleştirmeye çalışıyorum.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                    <div className="social">
                      <span className="social_title">BENİ BUL</span>
                      <ul className="social_ul">
                        <li className="social_icon">
                          <a className="social_icons" href="">
                            <AiFillInstagram />
                          </a>
                        </li>
                        <li className="social_icon">
                          <a
                            className="social_icons"
                            href="https://www.linkedin.com/in/s%C3%BCleyman-ard%C4%B1%C3%A7-58913b15b/"
                            target="_blank"
                          >
                            <FaLinkedin />
                          </a>
                        </li>
                        <li className="social_icon">
                          <a
                            className="social_icons"
                            href="https://github.com/slym758"
                            target="_blank"
                          >
                            <FaGithub />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                    <div className="social">
                      <span className="yetenek_title">EN İYİ YETENEKLERİM</span>
                      <ul className="social_ul">
                        <li className="social_icon">
                          <a className="social_icons" href="">
                            <FaReact />
                          </a>
                        </li>
                        <li className="social_icon">
                          <a className="social_icons" href="">
                            <IoLogoJavascript />
                          </a>
                        </li>
                        <li className="social_icon">
                          <a className="social_icons" href="">
                            <SiMongodb />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </section>

      <section className="section" id="section--2">
        <div className="container">
          <div className="section_title">
            <span>ÖZELLİKLER</span>
            <h2 className="section_header">Ne Yapıyorum?</h2>
          </div>
          <div className="özellikler">
            <div className="özellikler_alt">
              <div className="bilgi">
                <i>
                  <FaBars />
                </i>
                <h4>Kurumsal Siteler</h4>
                <p>
                  Kurumsal website gerçek hayatta varlığınızın dijital alandada
                  var olması demektir.Özel yazılımlar ile Firmanızı en iyi
                  şekilde tanıtan websitenizi yapabilirim.
                </p>
              </div>
            </div>
            <div className="özellikler_alt">
              <div className="bilgi">
                <i className="fa-solid fa-code">
                  <FaCode />
                </i>
                <h4>Full-Stack Development</h4>
                <p>
                  Websitenizi Full-stack Developer olarak MERN stack mimarisi
                  ile yani MongoDB, Expressjs, Reactjs ve Nodejs ile
                  geliştirmekteyim.
                </p>
              </div>
            </div>
            <div className="özellikler_alt">
              <div className="bilgi">
                <i className="fa-solid fa-at">
                  <MdAlternateEmail />
                </i>
                <h4>E-ticaret Siteleri</h4>
                <p>
                  Bir ürün pazarlayan şirketiniz mi var ve artık ürünlerinizi
                  internet üzerinden satmaya karar verdiniz. Burada devreye biz
                  girerek size en uygun e-ticaret sitesini yapmaktayız.
                </p>
              </div>
            </div>
            <div className="özellikler_alt">
              <div className="bilgi">
                <i className="fa-solid fa-mobile">
                  <FaMobile />
                </i>
                <h4>Responsiv Tasarım</h4>
                <p>
                  Oluşturduğumuz sitenizi sadece masaüstüne değil mobil ve
                  tabletlerde de uygun görünümlü hale getirmekteyiz.
                </p>
              </div>
            </div>
            <div className="özellikler_alt">
              <div className="bilgi">
                <i className="fa-brands fa-slack">
                  <FaSlack />
                </i>

                <h4>Kişisel Portfolyo Siteleri</h4>
                <p>
                  Kendizi tanıtan, kim olduğunuza dair bilgi veren kişisel
                  portfolyo sitenizi şık modern bir şekilde hazırlamaktayız.
                </p>
              </div>
            </div>
            <div className="özellikler_alt">
              <div className="bilgi">
                <i className="fa-solid fa-star">
                  <FaStar />
                </i>
                <h4>Yenilikçi Modern Siteler</h4>
                <p>
                  Bir sitenin en önemli kısımlarından biriside görünümüdür.
                  Yenilikçi ve Modern bir siteniz olması için elimizden geleni
                  yapmaktayız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="section--3">
        <div className="container">
          <div className="section_title">
            <span>EĞİTİM HAYATIM</span>
            <h2 className="section_header">ÖZGEÇMİŞİM</h2>
          </div>
        </div>

        <div className="özgecmis">
          <div className="özgecmis__tab_container container">
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-3"
            >
              <Tab
                eventKey="home"
                title="Eğitimim ve Sertifikalarım"
                className="tab_button"
              >
                <div className="özgeçmis_content_react">
                  <div className="özgeçmiş_header_react">
                    <div>
                      <span>2017-2022</span>
                      <h2 className="section_header_özgecmis">Eğitimim</h2>
                    </div>

                    <div className="özgecmis__header_cizgi">
                      <div className="özgecmis__header_alt">
                        <div>
                          <h5 className="section_header_özgecmis">
                            Amasya Anadolu Lisesi <br />
                            <span>Sayısal (2012/2015)</span>
                            <br />
                          </h5>
                        </div>
                      </div>

                      <div className="özgecmis__header_alt">
                        <div>
                          <h5 className="section_header_özgecmis">
                            Bartın Üniversitesi <br />
                            <span>Yönetim Bilişim Sistemeleri (2017/2021)</span>
                            <br /> <br />
                            <p>Aldığım Dersler</p>
                            <p>
                              <span>-</span> HTML-CSS <br /> <span>-</span> C#{" "}
                              <br />
                              <span>-</span> Delphi <br />
                              <span>-</span> Java
                              <br />
                              <span>-</span> Qbasic <br />
                              <span>-</span> Delphi Mobile
                            </p>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="özgeçmiş_header_react">
                    <div>
                      <span>2017-2022</span>
                      <h2 className="section_header_özgecmis">
                        Sertifikalarım
                      </h2>
                    </div>

                    <div className="özgecmis__header_cizgi">
                      <div className="özgecmis__header_alt">
                        <div>
                          <h5 className="section_header_özgecmis">
                            Komple Uygulamalı Web Geliştirme Eğitimi <br />
                            <span>Sadık Turan (2020)</span>
                            <br />
                          </h5>
                        </div>
                      </div>

                      <div className="özgecmis__header_alt">
                        <div>
                          <h5 className="section_header_özgecmis">
                            The Complete JavaScript Course 2023: From Zero to
                            Expert! <br />
                            <span>Jonas Schmedtmann(2022)</span>
                          </h5>
                        </div>
                      </div>

                      <div className="özgecmis__header_alt">
                        <div>
                          <h5 className="section_header_özgecmis">
                            Hentbol <br />
                            <span>Milli Eğitim Bakanlığı(2010)</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>

              <Tab
                eventKey="profile"
                title="Yeteneklerim"
                className="tab_button"
              >
                <div className="özgeçmis_content_react">
                  <div className="özgeçmiş_header_react">
                    <div>
                      <span>YETENEKLERİM</span>
                      <h2 className="section_header_özgecmis">
                        Yazılım Becerisi
                      </h2>
                    </div>

                    <div className="özgecmis_container">
                      <div className="yuzde">
                        <span>HTML - CSS</span>
                        <span>95</span>
                      </div>
                      <div className="progress progress-striped">
                        <div className="progress_yazılım_1"></div>
                      </div>
                    </div>
                    <div className="özgecmis_container">
                      <div className="yuzde">
                        <span>MONGODB</span>
                        <span>%65</span>
                      </div>

                      <div className="progress progress-striped">
                        <div className="progress_yazılım_2"></div>
                      </div>
                    </div>
                    <div className="özgecmis_container">
                      <div className="yuzde">
                        <span>JAVASCRİPT - NODEJS - EXPRESSJS</span>
                        <span>%60</span>
                      </div>
                      <div className="progress progress-striped">
                        <div className="progress_yazılım_3"></div>
                      </div>
                    </div>
                    <div className="özgecmis_container">
                      <div className="yuzde">
                        <span>REACT JS</span>
                        <span>%75</span>
                      </div>
                      <div className="progress progress-striped">
                        <div className="progress_yazılım_4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="özgeçmiş_header_react">
                    <div>
                      <span>YETENEKLERİM</span>
                      <h2 className="section_header_özgecmis">
                        Tasarım Becerisi
                      </h2>
                    </div>

                    <div className="özgecmis_container">
                      <div className="yuzde">
                        <span>PHOTOSHOP</span>
                        <span>%70</span>
                      </div>
                      <div className="progress progress-striped">
                        <div className="progress-bar-1"></div>
                      </div>
                    </div>
                    <div className="özgecmis_container">
                      <div className="yuzde">
                        <span>ADOBE XD</span>
                        <span>%50</span>
                      </div>

                      <div className="progress progress-striped">
                        <div className="progress-bar-2"></div>
                      </div>
                    </div>
                    <div className="özgecmis_container">
                      <div className="yuzde">
                        <span>FİGMA</span>
                        <span>%50</span>
                      </div>
                      <div className="progress progress-striped">
                        <div className="progress-bar-3"></div>
                      </div>
                    </div>
                    <div className="özgecmis_container">
                      <div className="yuzde">
                        <span>CANVA</span>
                        <span>%80</span>
                      </div>
                      <div className="progress progress-striped">
                        <div className="progress-bar-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="contact" title="Projelerim" className="tab_button">
                <div>
                  <Fancybox
                    options={{
                      Carousel: {
                        infinite: false,
                      },
                    }}
                  >
                    <div className="gallery_card">
                      <div className="card">
                        <div className="card-image">
                          <a
                            href={a}
                            data-fancybox="gallery"
                            data-caption="Caption Images 1"
                          >
                            <img src={a} alt="Image Gallery" />
                          </a>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-image">
                          <a
                            href={img}
                            data-fancybox="gallery"
                            data-caption="Caption Images 1"
                          >
                            <img src={img} alt="Image Gallery" />
                          </a>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-image">
                          <a
                            href={b}
                            data-fancybox="gallery"
                            data-caption="Caption Images 1"
                          >
                            <img src={b} alt="Image Gallery" />
                          </a>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-image">
                          <a
                            href={c}
                            data-fancybox="gallery"
                            data-caption="Caption Images 1"
                          >
                            <img src={c} alt="Image Gallery" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Fancybox>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="section" id="section--4">
        <div className="container">
          <div className="section_title">
            <span>İLETİŞİM</span>
            <h2 className="section_header">Benimle İletişime Geç</h2>
          </div>

          <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
            <div className="col-lg-5 mb-4">
              <div className="iletişim_about">
                <div className="iletişim_img">
                  <img src={contact} alt="" />
                </div>
                <div className="iletişim_title">
                  <h4>Süleyman Ardıç</h4>
                  <span>Full-Stack Developer</span>
                </div>
                <div className="iletişim_bilgi">
                  <p>
                    Freelance işlere açığım. Benimle iletişime geçebilirsin ve
                    telefonumu arayabilirsin.
                  </p>
                  <span>Telefon:05068571364</span> <br />
                  <span>E-posta:slym758@gmail.com</span>
                </div>
                <div className="iletişim_social">
                  <div className="social">
                    <span className="social_title">BENİ BUL</span>
                    <ul className="social_ul">
                      <li className="social_icon">
                        <a className="social_icons" href="">
                          <AiFillInstagram />
                        </a>
                      </li>
                      <li className="social_icon">
                        <a
                          className="social_icons"
                          href="https://www.linkedin.com/in/s%C3%BCleyman-ard%C4%B1%C3%A7-58913b15b/"
                          target="_blank"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                      <li className="social_icon">
                        <a
                          className="social_icons"
                          href="https://github.com/slym758"
                          target="_blank"
                        >
                          <FaGithub />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="iletişim_form">
                <div className="form">
                  <form action="" onSubmit={handleSubmit} className="row">
                    <div className="col-lg-6">
                      <div className="form_grup">
                        <p>ADINIZ</p>
                        <input
                          type="name"
                          name="name"
                          className="grup_control"
                        />
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_grup">
                        <p>SOYADINIZ</p>
                        <input
                          type="surname"
                          name="surname"
                          className="grup_control"
                        />
                        <ValidationError
                          prefix="Surname"
                          field="surname"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_grup">
                        <p>E-POSTA</p>
                        <input
                          type="e-mail"
                          name="e-mail"
                          className="grup_control"
                        />
                        <ValidationError
                          prefix="E-mail"
                          field="e-mail"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_grup">
                        <p>KONU</p>
                        <input
                          type="description"
                          name="description"
                          className="grup_control"
                        />
                        <ValidationError
                          prefix="Description"
                          field="description"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_grup">
                        <p>MESAJIN</p>
                        <textarea
                          name="message"
                          className="grup_control"
                          cols="30"
                          rows="10"
                        ></textarea>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_grup">
                        <button
                          className="iletişim_btn"
                          disabled={state.submitting}
                        >
                          GÖNDER
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer text-center">
                <h1>Süleyman Ardıç</h1>
                <p className="mt-4">© 2024. Tüm hakları saklıdır.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Header;
