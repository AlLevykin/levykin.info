import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import "./index.css";
import photo from "./photo.png";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <section className="my-5">
        <MDBRow>
          <p className="lead white-text w-responsive text-center mx-auto mb-5">
            <img className="mr-10" alt="Цифровой прорыв" src={logo}/>
          </p>
        </MDBRow>
        <MDBRow className="my-5">
        <MDBCol>
          <h2 className="h1-responsive font-weight-bold white-text text-center">
          Алексей Левыкин
          </h2>
        </MDBCol>
        <MDBCol>
          <p className="lead white-text w-responsive text-center mx-auto">
            Портфолио участника хакатона "Цифровой прорыв".
          </p>
        </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="graduation-cap"
                  size="2x"
                  className="white-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3"><mark>Образование</mark></h5>
                <p className="white-text">
                  Московский инженерно-физический институт
                </p>
                <ul className="white-text">
                  <li>
                    1996 - 1999 Прикладная математика
                  </li>
                  <li>
                    1999 - 2001 Вычислительные машины, комплексы, системы и сети
                  </li>
                </ul>
                <p className="white-text">
                  Корпоративная Академия Росатома
                </p>
                <ul className="white-text">
                  <li>
                    2018 - 2019 Управленческий кадровый резерв
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="thumbs-up" size="2x" className="white-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3"><mark>Компетенции</mark></h5>
                <ul className="white-text">
                  <li>
                    разработка программного обеспечения
                  </li>
                  <li>
                    управление проектами
                  </li>
                  <li>
                    работа с людьми
                  </li>
                  <li>
                    системный анализ
                  </li>
                  <li>
                    организация бережливого производства
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="at" size="2x" className="white-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href="mailto:a.a.levykin@gmail.com">a.a.levykin@gmail.com</a></h5>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <i class="fab fa-github fa-2x white-text"></i>
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href="https://github.com/AlLevykin" target="_blank">github.com/AlLevykin</a></h5>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-name">
          <MDBRow>
            <img
              className="img-fluid rounded-circle z-depth-5"
              src={photo}
              alt=""
            />
          </MDBRow>
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="tools" size="2x" className="white-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3"><mark>Технологии</mark></h5>
                <p className="white-text">
                  Desktop
                </p>
                <ul className="white-text">
                  <li>
                    C#, VB.net, SQL
                  </li>
                  <li>
                    WinForms, WPF, XAML
                  </li>
                  <li>
                    Интеграция с CAD-системами
                  </li>
                </ul>
                <p className="white-text">
                  WEB
                </p>
                <ul className="white-text">
                  <li>
                    JavaScript
                  </li>
                  <li>
                    React, Redux, jQuery, Bootstrap
                  </li>
                  <li>
                    Single page applications
                  </li>
                </ul>
                <p className="white-text">
                  Enterprise
                </p>
                <ul className="white-text">
                  <li>
                    1C
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="chart-line" size="2x" className="white-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3"><mark>Карьера</mark></h5>
                <p className="white-text">
                  РФЯЦ-ВНИИТФ
                </p>
                <ul className="white-text">
                  <li>
                    Начальник отдела САПР
                  </li>
                  <li>
                    Начальник группы
                  </li>
                  <li>
                    Инженер-программист
                  </li>
                </ul>
                <p className="white-text">
                  ООО "ЗКС"
                </p>
                <ul className="white-text">
                  <li>
                    Разработчик 1С
                  </li>
                </ul>
                <p className="white-text">
                  Оптово-розничное торговое предприятие
                </p>
                <ul className="white-text">
                  <li>
                    Администратор баз данных
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
      </MDBContainer>
    );
  }
}

export default App;
