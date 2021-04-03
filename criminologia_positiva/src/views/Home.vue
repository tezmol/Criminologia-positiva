<template>
  <div>
    <Header>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-3 m-auto arbol-prin">
            <a href="http://criminologiapositiva.com/" width="100%"
              ><img src="img/arbol.png" width="100%" alt=""
            /></a>
          </div>
          <div class="col-xs-12 col-md-6 m-auto nom-prin"> 
            <a href="http://criminologiapositiva.com/"
              ><img src="img/LOGOTIPO FINAL PNG-CMYK.png" width="100%" alt=""
            /></a>
          </div>
          <!--Redes Criminologia-Positiva-->
          <div class="iconos col-xs-12 col-md-2 red-crimi ml-auto">
            <a href="https://www.facebook.com/criminologiapositiva"
              ><i class="fas fa-facebook-f"></i
            ></a>
            <a href="https://twitter.com/CrimiPositiva"
              > <font-awesome-icon icon="user-secret" /> </a>
            <a href="#"><i class="fas fa-youtube"></i></a>
          </div>
          
          <div class="linea col-12">
            <img src="img/linea.jpg" width="100%" alt="" />
          </div>
        </div>
      </div>

      <div>
        <b-navbar toggleable="lg" type="light" variant="light">
          <b-container>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav type="ligth" variant="ligth">
              <b-navbar-nav class="m-auto">
                <b-nav-item-dropdown text="INICIO">
                  <a href="#quienes-somos" class="dropdown-item smoothScroll"
                    >QUIÉNES SOMOS</a
                  >
                  <a href="#equipo" class="dropdown-item">EQUIPO</a>
                  <a href="#media" class="dropdown-item">MEDIA</a>
                  <a href="#infografias" class="dropdown-item">INFOGRAFIAS</a>
                </b-nav-item-dropdown>
                <b-nav-item to="#">BANCO DE PRACTICAS</b-nav-item>
                <b-nav-item to="#">DIARIO DE PAZ</b-nav-item>
                <b-nav-item to='/blog'>BLOG</b-nav-item>
                <b-nav-item to="#">CONTACTO</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
        </b-navbar>
      </div>
    </Header>

    <section class="main">
      <section class="tren">
        <div class="container">
          <div class="row">
            <div class="col-12 para1">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                <!-- Text slides with image -->
                <b-carousel-slide img-src="img/principal.png" class="txt-carousel">
                  <p> 
                    Somos un grupo de profesionales y académicos comprometidos
                    con la generación y difusión de información y conocimientos
                    sobre Criminología Positiva, con el objetivo de contribuir
                    al desarrollo de sociedades resilientes, compasivas y
                    justas, a través del fomento del bienestar y la cultura de
                    paz.
                  </p>
                </b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide  img-src="img/equipo.jpg" img-width="100%"> </b-carousel-slide>
                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                  <b-carousel-slide img-src="img/Siguenos.png" class="txt-siguenos">
                  <p> 
                    Síguenos en todas nuestras redes sociales <a href="https://www.facebook.com/criminologiapositiva" target="_blank">Facebook </a>, 
                    Twitter, Instagram y Youtube. 
                  </p>
                </b-carousel-slide>
              </b-carousel>

            </div>
          </div>
        </div>
      </section>


      <section id="quienes-somos" class="quienes-somos">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <h2>¿Quiénes somos?</h2>

              <p style="text-align: justify">
                Somos un grupo de profesionales y académicos comprometidos con
                la generación y difusión de información y conocimientos sobre
                Criminología Positiva, con el objetivo de contribuir al
                desarrollo de sociedades resilientes, compasivas y justas, a
                través del fomento del bienestar y la cultura de paz.
              </p>
              <br />
              <p style="text-align: justify">
                Entendemos a la Criminología Positiva como una perspectiva que
                reúne y propone teorías, modelos, políticas públicas y programas
                enfocados en factores positivos (resiliencia, aceptación social,
                empatía, bondad, etc.), con el objetivo de prevenir la violencia
                y la delincuencia, a través del fomento del bienestar de los
                individuos y de la sociedad, y del desarrollo de una cultura de
                paz.
              </p>
            </div>
            <div class="col-md-6 col-sm-12"></div>
          </div>
        </div>
      </section>

      <section id="equipo" class="equipo">
        <div class="container">
          <div class="row">
            <div class="col-12 eq"><h2>Equipo</h2></div>

            <div class="col-md-6 col-sm-12 des-eq">
              <h3>Luz Anyela Morales Quintero</h3>
              <img src="img/Angie.jpg" width="90%" alt="" />
              <p style="text-align: justify" class="m_arriba lu">
                Psicóloga con doctorado en Psicología Social por la Universidad
                Autónoma de Madrid, España. Profesora-Investigadora del Programa
                de Criminología de la Facultad de Derecho y Ciencias Sociales de
                la Benemérita Universidad Autónoma de Puebla. Miembro del
                Sistema Nacional de Investigadores Nivel I, CONACYT. Sus áreas
                de trabajo son la Psicología Criminológica, la Justicia
                Terapéutica y la Criminología Positiva.
              </p>
            </div>

            <div class="col-md-6 col-sm-12 des-eq">
              <h3>Rebeca Sishail Romano Patraca</h3>
              <img src="img/Rebe.jpg" width="90%" alt="" />
              <p style="text-align: justify" class="m_arriba re">
                Licenciada en Criminología por la Benemérita Universidad
                Autónoma de Puebla, México. Auxiliar de investigación
                académica-criminológica. Elaboró la primera tesis sobre
                Criminología Positiva en español. Sus áreas de trabajo son la
                Criminología Positiva y la prevención de la violencia y la
                delincuencia.
              </p>
            </div>

            <div class="col-md-6 col-sm-12 des-eq">
              <h3>Emmanuel Roldán Loyola</h3>
              <img src="img/Emma.jpg" width="90%" alt="" />
              <p style="text-align: justify" class="m_arriba em">
                Licenciado en Criminología por la Benemérita Universidad
                Autónoma de Puebla. Diseñó el programa de prevención de la
                violencia y fomento de una cultura de paz (EDUCA EN PAZ).
                Actualmente es analista del Observatorio Ciudadano de Seguridad
                y Paz. Sus áreas de trabajo son la Criminología Positiva, la
                cultura de paz y la prevención de la violencia y la
                delincuencia.
              </p>
            </div>

            <div class="col-md-6 col-sm-12 des-eq">
              <h3>Sara Patricia Colín Soto</h3>
              <img src="img/Paty.jpg" width="90%" alt="" />
              <p style="text-align: justify" class="m_arriba pa">
                Psicóloga con estudios de maestría en psicoterapia
                Psicoanalítica de la infancia y la adolescencia por la
                Universidad Vasco de Quiroga, Michoacán, México. Diplomada en
                perfiles criminológicos: Prevención, detección y tratamiento.
                Con 20 años de experiencia en un Centro de Reinserción Social.
                Actualmente labora en el Sistema Nacional para el Desarrollo
                Integral de la Familia (DIF) de Michoacán, encargándose de la
                atención psicológica a familias.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="media" class="media">
        <div class="container">
          <div class="row">
            <div class="col-12 eq">
              <h2>MEDIA</h2>
            </div>
            <div class="col-12">
              <h3>PRÓXIMAMENTE</h3>
              <h3>DISPONIBLE</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="infografias" class="infografias">
        <div class="container">
          <div class="row">
            <div class="col-12 eq">
              <h2>INFOGRAFÍAS</h2>
            </div>

            <div class="col-sm-12 col-md-3">
              <button
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <img src="img/info1.jpeg" width="100%" alt="" />
              </button>
              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        Día Internacional de la Paz
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <img src="img/info1.jpeg" width="100%" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-3">
              <button
                type="button"
                data-toggle="modal"
                data-target="#ModalCenter2"
              >
                <img src="img/info2.jpeg" width="100%" alt="" />
              </button>
              <!-- Modal -->
              <div
                class="modal fade"
                id="ModalCenter2"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        Día Internacional de la Paz
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <img src="img/info2.jpeg" width="100%" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-3">
              <button
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter3"
              >
                <img src="img/info3.jpeg" width="100%" alt="" />
              </button>
              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModalCenter3"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        Día Internacional de la Paz
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <img src="img/info3.jpeg" width="100%" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-12 col-md-3">
              <button
                type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter4"
              >
                <img src="img/info4.jpeg" width="100%" alt="" />
              </button>
              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModalCenter4"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">
                        Día Internacional de la Paz
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <img src="img/info4.jpeg" width="100%" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer" class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <img src="img/LOGOTIPO BLANCO PNG.png" width="50%" alt="" />
            </div>
            <div class="col-md-6 col-sm-12 red-fo ml-auto">
              <a href="https://www.facebook.com/criminologiapositiva"
                ><i class="fas fa-facebook-f"></i> Criminología Positiva</a
              >
              <a href="#"
                ><i class="fas fa-twitter"></i> Criminología Positiva</a
              >
              <a href="#"
                ><i class="fas fa-youtube"></i> Criminología Positiva</a
              >
            </div>
          </div>
        </div>
      </section>
      <section id="fin">
        <div class="container">
          <div class="row">
            <div class="col-12 der-cp">
              <span
                >© Copyright Criminología Positiva 2020. Todos los derechos
                reservados.</span
              >
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family: "Roboto Slab", Arial, Helvetica, sans-serif;
  font-size: 16px;
}
/******************************************Header********************************************/
.arbol-prin img {
  width: 100px;
}
.nom-prin img {
  display: flex;
  flex-flow: row;
  width: 400px;
  margin: auto;
}

header a {
  font-size: 30px;
  color: black;
  margin: 40px 10px;
  text-decoration: none;
  border-radius: 50%;
  border-radius: 10%;
}

header .iconos {
  margin: 30px 0;
}
header .iconos a {
  color: black;
}

header nav div ul li a {
  font-weight: 500px;
  font-size: 20px;
  margin: 20px 40px;
}
.red-crimi{
  color: black;
  }
/******************************************Main********************************************/
.main div .prin-im {
  width: 450px;
  border: none;
}

.main div .fp-1 {
  color: rgb(0, 0, 0);
  font-weight: 300;
  font-size: 35px;
  margin-top: 15px;
}

.main .tren {
  margin: 0 0;
}
.tren .txt-carousel{
  font-weight: 400;
  font-size: 35px;
  text-align: justify;
}
.txt-siguenos{
  font-weight: 400;
  font-size: 35px;
  text-align: justify;
}
.txt-siguenos p{
 margin-left: -300px  ;
 margin-left: -300px; padding: 200px 300px 202px 200px;
}
.txt-siguenos p a{
  text-decoration: none;
  color:#ffffff;
}

.tren .txt-carousel p{
   padding-bottom: 10px;
}

/******************************************Quienes Somos********************************************/
.quienes-somos {
  margin: 50px 0;
  background: #eeeeee;
  padding-bottom: 20px;
}
.quienes-somos h2 {
  font-weight: 300;
  color: #5c068c;
  font-size: 65px;
}
.quienes-somos p {
  font-weight: 400;
  color: black;
  font-size: 20px;
}
/******************************************Equipo********************************************/
.equipo .eq {
  text-align: center;
}
.equipo h2 {
  font-weight: 300;
  font-size: 65px;
  color: #5c068c;
  margin: 50px;
}
.equipo h3 {
  font-weight: 300;
  font-size: 30px;
  text-align: center;
}
.equipo p {
  font-weight: 300;
  font-size: 20px;
}
.equipo .des-eq {
  margin: 30px 0px;
}
.des-eq p {
  padding: 0px 25px;
}
.equipo img {
  height: 400px;
  width: 400px;
  display: block;
  margin: auto;
  padding: 25px;
  /*border-radius: 50%;*/
}
.equipo .im-eq {
  margin: 30px 0;
}
.lu {
  border-top: 3px solid #aa8caf;
}
.re {
  border-top: 3px solid #8e6995;
}
.em {
  border-top: 3px solid #72467c;
}
.pa {
  border-top: 3px solid #572364;
}
/******************************************Media******************************************/

.media {
  text-align: center;
  background: #eeeeee;
}
.media h2 {
  font-weight: 300;
  font-size: 65px;
  color: #5c068c;
  margin: 50px;
}

.media h3 {
  font-weight: 300;
  font-size: 50px;
  color: #5c068c;
  margin: 50px;
}
/******************************************Infografias********************************************/
.infografias {
  text-align: center;
}
.infografias h2 {
  font-weight: 300;
  font-size: 65px;
  color: #5c068c;
  margin: 50px;
}

#infografias button {
  border: none;
  border-radius: 15px;
  margin-bottom: 15px;
}
/*****************************************Footer********************************************/
#footer {
  background: #702f8a;
  padding: 50px;
}
#footer button {
  border-radius: 50%;
  margin: 50%;
  margin-bottom: 15px;
  margin-top: 15px;
}
#footer button a {
  color: #ffffff;
  font-size: 25px;
  text-decoration: none;
}

#footer img {
  padding-bottom: 25px;
}
#footer .red-fo {
  text-align: center;
}
#footer .red-fo a {
  display: inline-block;
  color: #ffffff;
  font-size: 30px;
  text-decoration: none;
  padding-bottom: 25px;
}
#fin {
  text-align: center;
  background: #000000;
  color: #ffffff;
  font-size: 20px;
}

@media (max-width: 990px) {

  header .iconos {
    margin: 30px auto;
  }
  header .iconos a {
    color: rgb(0, 0, 0);
    font-size: 20px;
    margin: 5%;
  }
  header nav div ul li a {
    font-weight: 500px;
    font-size: 15px;
    margin: 20px 40px;
  }

  .main {
    text-align: center;
  }

  .tren .txt-carousel{
  text-align: justify;
  }
  .tren .txt-carousel p{
   padding-top: 50px;
   font-size: 20px;
  }
  .main div .fp-1 {
    color: rgb(0, 0, 0);
    font-weight: 300;
    font-size: 20px;
    margin-top: 15px;
  }
  #infografias .work-thumb,
  .footer-thumb {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .txt-siguenos{
  font-weight: 400;
  font-size: 25px;
  text-align: justify;
}
.txt-siguenos p{

 padding: 100px 200px 102px 200px;
}
}

@media (max-width: 760px) {

  .arbol-prin img {
    display: none;
  }
  .nom-prin img {
    display: flex;
    flex-flow: row;
    width: 100%;
  }

  .main {
    text-align: center;
  }

  .main div .fp-1 {
    color: rgb(0, 0, 0);
    font-weight: 300;
    font-size: 20px;
    margin-top: 15px;
  }
    .tren .txt-carousel{
  text-align: justify;
  }
  .tren .txt-carousel p{
   padding-top: 50px;
   font-size: 15px;
  }
    .txt-siguenos{
  font-weight: 400;
  font-size: 15px;
  text-align: justify;
}
.txt-siguenos p{

 padding: 150px 150px 50px 250px;
}
}
@media (max-width: 500px) {
  header .log-cp {
    font-weight: 400;
    font-size: 30px;
    color: rgb(11, 1, 31);
    text-decoration: none;
    margin: auto 0;
  }
  .nom-prin img {
  display: flex;
  flex-flow: row;
  width: 300px;
  margin: auto;
}

  header {
    text-align: center;
  }
  .arbol-prin img {
    display: none;
  }
  .nom-prin img {
    display: flex;
    flex-flow: row;
    width: 100%;
  }

  .main {
    text-align: center;
  }

  .main div .fp-1 {
    color: rgb(0, 0, 0);
    font-weight: 300;
    font-size: 20px;
    margin-top: 15px;
  }
   
.media h2 {
  font-weight: 300;
  font-size: 40px;
  color: #5c068c;
  margin: 50px;
}

.media h3 {
  font-weight: 300;
  font-size: 25px;
  color: #5c068c;
  margin: 50px;
}

.infografias h2{
  font-size: 40px;
}
.equipo img {
    height: 300px;
    width: 300px;
    display: block;
    margin: auto;
    padding: 25px;
  
}
  .tren .txt-carousel{
  text-align: justify;
  }
  .tren .txt-carousel p{
   padding-top: 50px;
   font-size: 15px;
  }
  .tren .txt-siguenos p{
    font-size: 15px;
  }
}
</style>

