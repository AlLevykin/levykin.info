import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBView, MDBAnimation } from "mdbreact";
import "./index.css";
import photo from "./photo.png";
import logo from "./logo.svg";
import chel from "./chel.pdf";
import chel_diplom from "./chel_diplom.pdf";
import chel_photo from "./chel_photo.jpg";
import kazan from "./kazan.pdf";
import kazan_diplom from "./kazan_diplom.pdf";
import kazan_photo from "./kazan_photo.jpg";
import online from "./online.pdf";
import online_diplom from "./online_diplom.pdf";
import ekb from "./ekb.pdf";
import ekb_diplom from "./ekb_diplom.pdf";
import final2020 from "./final2020.pdf";
import final2020_diplom from "./final2020_diplom.pdf";
import final2020_photo from "./final2020_photo.jpg";
import fintech2021_certificate from "./fintech2021_certificate.pdf";
import fintech2021 from "./fintech2021.pdf";
import fintech_2021 from "./fintech_2021.jpg";

const App = () => {
  return (
    <MDBContainer>
      <section className="my-5">
        <MDBAnimation type="fadeIn">
          <MDBRow>
            <p className="lead white-text w-responsive text-center mx-auto mb-5">
              <img className="mr-10" alt="Цифровой прорыв" src={logo} />
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
                  <i className="fab fa-github fa-2x white-text"></i>
                </MDBCol>
                <MDBCol size="10">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href="https://github.com/AlLevykin" rel="noopener noreferrer" target="_blank">github.com/AlLevykin</a></h5>
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
          <MDBRow>
            <h2 className="h1-responsive font-weight-bold white-text text-center mx-auto mb-5">
              Кейсы и решения
            </h2>
          </MDBRow>
        </MDBAnimation>

        <MDBAnimation reveal type="zoomIn">
          <hr style={{ border: '1px solid white' }}></hr>
          <MDBRow>
          <MDBCol md="6">
              <MDBView rounded>
                <img src={fintech_2021} className="img-fluid z-depth-3" alt="" />
              </MDBView>
              <br></br>
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe title="final2020_presentation" width="560" height="315" src="https://www.youtube.com/embed/c73UUMhCvK0?controls=0&amp;start=5081s" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </MDBCol>            
            <MDBCol md="6">
              <MDBRow className="mb-3">
                <h3 className="font-weight-bold mb-3 white-text">FINTECH, 2021</h3>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="question-circle" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text">Кейс</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <p className="white-text">Разработка платформы обеспечения платежей арендаторов на базе технологии распределенных реестров и смарт-контрактов
                Международный аэропорт Шереметьево — входит в ТОП-10 аэропортов-хабов Европы, крупнейший российский аэропорт по объёмам пассажирских и грузовых перевозок.
                Помимо авиаперевозок аэропорт обеспечивает комфортное пребывание пассажиров в терминалах до и после вылета. В Шереметьево представлено множество кафе, ресторанов, магазинов и даже гостиниц. Все эти услуги предоставляются пассажирам независимыми компаниями, которые арендуют у Шереметьево площади в терминалах.</p>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="link" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href="https://leadersofdigital.ru/event/63007/case/846698" rel="noopener noreferrer" target="_blank">Подробней о кейсе</a></h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="file-pdf" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={fintech2021} rel="noopener noreferrer" target="_blank">Презентация</a></h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="trophy" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={fintech2021_certificate} rel="noopener noreferrer" target="_blank">Диплом</a></h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon fab icon="youtube" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href="https://youtu.be/0bz7vet8e2M" rel="noopener noreferrer" target="_blank">Демонстрация UI</a></h5>
                </MDBCol>
              </MDBRow>              
            </MDBCol>
          </MDBRow>
        </MDBAnimation>        

        <MDBAnimation reveal type="zoomIn">
          <hr style={{ border: '1px solid white' }}></hr>
          <MDBRow>
            <MDBCol md="6">
              <MDBRow className="mb-3">
                <h3 className="font-weight-bold mb-3 white-text">Финал, 2020</h3>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="question-circle" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text">Кейс</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <p className="white-text">Одним из основных факторов, влияющих на качество оказываемой медицинской помощи, является квалификация врачей, а именно умение определять адекватную тактику диагностики, исследования, лечения пациента, а также прогнозирования неблагоприятных исходов. Оценка объективного статуса пациента целиком основана на признаках заболевания, как клинических, так и инструментально-лабораторных. В данном случае актуальное значение принимают так называемые интеллектуальные системы поддержки принятия врачебных решений, призванные обеспечить повышение качества медицинского обслуживания в учреждениях лечебно-профилактического профиля.</p>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="link" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href="https://2020.leadersofdigital.ru/event/214763/case/239658" rel="noopener noreferrer" target="_blank">Подробней о кейсе</a></h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="file-pdf" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={final2020} rel="noopener noreferrer" target="_blank">Презентация</a></h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="trophy" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={final2020_diplom} rel="noopener noreferrer" target="_blank">Диплом</a></h5>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="6">
              <MDBView rounded>
                <img src={final2020_photo} className="img-fluid z-depth-3" alt="" />
              </MDBView>
              <br></br>
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe title="final2020_presentation" width="560" height="315" src="https://www.youtube.com/embed/j0yvXy3IZEc?controls=0&amp;start=17150" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBAnimation>

        <MDBAnimation reveal type="zoomIn">
          <hr style={{ border: '1px solid white' }}></hr>
          <MDBRow>
            <MDBCol md="6">
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe title="ekb_demo" width="560" height="315" src="https://www.youtube.com/embed/hEem3n_KQ34?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div><br></br>
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe title="ekb_presentation" width="560" height="315" src="https://www.youtube.com/embed/_eokUEOFT9Q?controls=0&amp;start=1911" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </MDBCol>
            <MDBCol md="6">
              <MDBRow className="mb-3">
                <h3 className="font-weight-bold mb-3 white-text">УРАЛЬСКИЙ IT-ХАБ 2020, Екатеринбург</h3>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="question-circle" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text">Кейс</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <p className="white-text">На основании картографических данных об имеющихся на территории объектах инфраструктуры (кафе, магазины, банки и прочее) и данных о населении (с детализацией до здания) – требуется разработать алгоритм анализирующий спрос на тот или иной объект инфраструктуры, и предлагающий его оптимальное место размещения. В базовом сценарии требуется предложить варианты оптимального размещения Отделений почтовой связи, и подобрать оптимальный перечень услуг оказываемых в отделении.</p>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="link" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href="https://2020.leadersofdigital.ru/event/63009/case/178873" rel="noopener noreferrer" target="_blank">Подробней о кейсе</a></h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="file-pdf" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={ekb} rel="noopener noreferrer" target="_blank">Презентация</a></h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="trophy" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={ekb_diplom} rel="noopener noreferrer" target="_blank">Диплом</a></h5>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBAnimation>

        <MDBAnimation reveal type="zoomIn">
          <hr style={{ border: '1px solid white' }}></hr>
          <MDBRow>
            <MDBCol md="6">
              <MDBRow className="mb-3">
                <h3 className="font-weight-bold mb-3 white-text">ОНЛАЙН-ХАКАТОН #2, 2020</h3>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="question-circle" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text">Кейс</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <p className="white-text">Сервис VKanban на платформе VK mini apps для управления проектами по методологии Kanban. Целевая аудитория: участники волонтерского движения, малый бизнес и любые сообщества и коллаборации, возникающие для выполнения общих проектов и социального партнерства. VKanban  систематизирует ведение проектов, позволяет решать организационные задачи, улучшает коммуникацию участников проектов, предоставляет возможность поиска партнеров и поставщиков услуг.</p>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="link" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href="https://hack2.leadersofdigital.ru/home.html#!/tab/198625950-3" rel="noopener noreferrer" target="_blank">Подробней о кейсе</a></h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="file-pdf" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={online} rel="noopener noreferrer" target="_blank">Презентация</a></h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="trophy" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={online_diplom} rel="noopener noreferrer" target="_blank">Диплом</a></h5>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="6">
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe title="online_demo" width="560" height="315" src="https://www.youtube.com/embed/PHc0_byNTR0?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBAnimation>

        <MDBAnimation reveal type="zoomIn">
          <hr style={{ border: '1px solid white' }}></hr>
          <MDBRow>
            <MDBCol md="6">
              <MDBView rounded>
                <img src={kazan_photo} className="img-fluid z-depth-3" alt="" />
              </MDBView>
            </MDBCol>
            <MDBCol md="6">
              <MDBRow className="mb-3">
                <h3 className="font-weight-bold mb-3 white-text">Финал 2019, Казань</h3>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="question-circle" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text">Кейс</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <p className="white-text">Создать цифровую платформу на базе СПО для оказания «бумажных» и цифровых услуг. Оцифровка услуг силами аналитиков, без привлечения разработчиков: простая, интуитивно-понятная система создания форм заявления для их представления на Портале услуг, мобильном приложении, МФЦ, создание пользователей у органов власти, настройка для них прав обработки заявлений, создание логики обработки заявления, настройки сроков оказания и алгоритмов действий при просрочке и прочий функционал.</p>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="file-pdf" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={kazan} rel="noopener noreferrer" target="_blank">Презентация</a></h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="trophy" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={kazan_diplom} rel="noopener noreferrer" target="_blank">Диплом</a></h5>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBAnimation>                

        <MDBAnimation reveal type="zoomIn">
          <hr style={{ border: '1px solid white' }}></hr>
          <MDBRow>
            <MDBCol md="6">
              <MDBRow className="mb-3">
                <h3 className="font-weight-bold mb-3 white-text">Региональный этап 2019, Челябинск</h3>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="question-circle" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text">Кейс</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <p className="white-text">Организовать сервис для сбора проектов на благоустройство территории. Проекты, получившие наибольшую поддержку от жильцов, направляются на повестку общего собрания или напрямую включаются в план работ организации, ответственной за обслуживание территории.</p>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="file-pdf" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={chel} rel="noopener noreferrer" target="_blank">Презентация</a></h5>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="trophy" size="2x" className="white-text" />
                </MDBCol>
                <MDBCol size="11">
                  <h5 className="font-weight-bold mb-3 white-text"><a className="white-text" href={chel_diplom} rel="noopener noreferrer" target="_blank">Диплом</a></h5>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="6">
              <MDBView rounded>
                <img src={chel_photo} className="img-fluid z-depth-3" alt="" />
              </MDBView>
            </MDBCol>
          </MDBRow>
        </MDBAnimation>

      </section>
    </MDBContainer>
  );
}

export default App;
