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
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="https://twitter.com/CrimiPositiva"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
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
                <b-nav-item href="http://criminologiapositiva.com/"
                  >INICIO</b-nav-item
                >
                <b-nav-item href="#">BANCO DE PRACTICAS</b-nav-item>
                <b-nav-item href="#">DIARIO DE PAZ</b-nav-item>
                <b-nav-item href="#">BLOG</b-nav-item>
                <b-nav-item href="#">CONTACTO</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
        </b-navbar>
      </div>
    </Header>

    <section class="main">
      <section id="inicio" class="inicio">
        <div class="container">
          <div class="row">
            <div class="col-12 presentacion im-blog">
              <img
                src="img/Blog.jpg"
                alt="Error en el servidor"
                width="100% "
              />
              <div class="t-blog">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="accordion" role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1">
                    <b-button
                      block
                      v-b-toggle.accordion-1
                      class="cont-blog"
                      variant="primary"
                    >
                      <h2 class="titulo-blog">
                        Por qué abordar el tema de la cultura de paz en un blog
                      </h2>
                      <span> Emmanuel Roldán Loyola</span></b-button
                    >
                  </b-card-header>
                  <b-collapse
                    id="accordion-1"
                    
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <div class="texto__blog">
                        <p>
                          Este blog tiene el objetivo de brindar un espacio en
                          el que se comparta conocimiento sobre teorías,
                          conceptos, metodologías y experiencias útiles para
                          fundamentar y diseñar programas y políticas públicas
                          que contribuyan a la construcción y promoción de
                          sociedades pacíficas.
                        </p>
                      </div>
                      <div class="imagen__blog">
                        <img
                          src="img/log.png"
                          alt="Logotipo Oficial Criminologia Positiva"
                          width="500px"
                          height="500px"
                        />
                      </div>
                      <div class="texto__blog">
                        <p>
                          Es claro que nuestra región afronta un contexto cada
                          vez más violento. Por ejemplo, en México, las
                          estadísticas oficiales de incidencia delictiva
                          reportan incremento en las carpetas de investigación
                          de diferentes delitos, con un panorama que sugiere que
                          este año es el más violento desde 1997 que se tiene
                          registro; también de enero a octubre de 2019, se han
                          iniciado 24,484 carpetas de investigación por el
                          delito de homicidio doloso y de ellos el 70% han sido
                          cometidos con arma de fuego (Secretariado Ejecutivo
                          del Sistema Nacional de Seguridad Pública -SESNSP-,
                          2019). Ante este panorama han surgido alternativas
                          valiosas para contrarrestar la violencia y la
                          delincuencia, entre las que cabe destacar el interés y
                          los esfuerzos por fomentar la cultura de paz.
                        </p>
                      </div>
                      <div class="texto__blog">
                        <p>
                          El concepto de cultura de paz fue utilizado por
                          primera vez por la Organización de las Naciones Unidas
                          para la educación, la Ciencia y la Cultura (UNESCO) en
                          1989, en la declaración final del Congreso
                          Internacional sobre la Paz en la Mente de los Hombres,
                          donde se invitó a "los estados, a las organizaciones
                          intergubernamentales y no gubernamentales, a las
                          comunidades científicas, educativas, y culturales del
                          mundo y a todos los individuos a contribuir a la
                          construcción de una concepción de la paz, mediante el
                          desarrollo de una cultura de paz, fundada en los
                          valores universales del respeto a la vida, la
                          libertad, la justicia, la tolerancia, los derechos
                          humanos y la igualdad entre hombres y mujeres"
                          (UNESCO, 1989, P. 2).
                        </p>
                      </div>
                      <div class="texto__blog">
                        <p>
                          A partir de ese momento, el concepto de cultura de paz
                          ha dado origen a un movimiento que busca contrarrestar
                          la cultura de violencia o de guerra, que hace
                          referencia a su aceptación y normalización; es decir,
                          el "conjunto de ideas y actitudes arraigadas en un
                          grupo social respecto a la utilidad de la violencia y
                          de la guerra para hacer frente a los conflictos y
                          lograr sus objetivos" (Roldán, Morales y Greathouse,
                          2019).
                        </p>
                      </div>
                      <div class="texto__blog">
                        <p>
                          Por otra parte, en 1999, la misma Organización de las
                          Naciones Unidas propuso como definición de cultura de
                          paz el conjuntoF de valores, actitudes, tradiciones,
                          comportamientos y estilos de vida que se basan en el
                          respeto a la vida, el fin de la violencia, la
                          promoción y practica de la no violencia, el respeto
                          pleno y la promoción de todos los derechos humanos, el
                          compromiso con el arreglo pacífico de los conflictos,
                          el respeto y el fomento del derecho de todas las
                          personas a la libertad de expresión, opinión e
                          información entre otras (ONU, 1999).
                        </p>
                      </div>
                      <div class="texto__blog texto__blog-margin">
                        <p>
                          Es importante que cada uno de nosotros se involucre
                          porque la cultura está compuesta por individuos y ella
                          se modifica de acuerdo con los cambios de conciencia
                          individual.
                        </p>
                      </div>
                      <div class="texto__blog">
                        <p>
                          Sin duda, la cultura de paz se ha convertido en una
                          alternativa necesaria e innovadora para contrarrestar
                          la violencia que vivimos. Sin embargo, queda mucho
                          para lograr estos propósitos, constituyendo un
                          importante reto para los ciudadanos el sumarse para
                          crear y sostener sociedades pacíficas. Es importante
                          que cada uno de nosotros se involucre porque la
                          cultura está compuesta por individuos y ella se
                          modifica de acuerdo con los cambios de conciencia
                          individual (Roldán, Morales y Greathouse, 2019).
                        </p>
                      </div>
                    </b-card-body>
                  </b-collapse>
                </b-card>
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
                ><i class="fab fa-facebook-f"></i> Criminología Positiva</a
              >
              <a href="#"
                ><i class="fab fa-twitter"></i> Criminología Positiva</a
              >
              <a href="#"
                ><i class="fab fa-youtube"></i> Criminología Positiva</a
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
/************BLOG ***************/
.blog {
  background: #eeeeee;
}
.inicio {
  margin-bottom: 100px;
}
.t-blog {
  position: absolute;
  top: 25%;
  left: 10%;
}
.t-blog h2 {
  font-family: "Roboto Slab", Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 100px;
  color: #fff;
}
.container-blog {
  border: 2px solid rgb(206, 206, 206);
  width: 80%;
  max-width: 900px;
  margin: auto;
}
.blog__section {
  padding: 4em 4em;
}
.blog__section:nth-child(1) {
  background-color: rgb(92, 6, 140);
  margin: auto;
  color: #fff;
  font-size: 30px;
}
.blog__section:nth-child(1) h6 {
  font-size: 30px;
}
.texto__blog {
  margin: 30px 30px;
  font-size: 20px;
  padding: 4px;
}
.im-blog img {
  margin: auto;
}
.texto__blog-margin {
  border-left: 3px solid rgb(92, 6, 140);
}
.imagen__blog {
  overflow: hidden;
}
.imagen__blog img {
  /* border: 2px solid red;*/
  object-fit: contain;
  max-width: 300px;
  max-height: 300px;
  display: block;
  margin: auto;
}
.fin-blog {
  margin: auto;
  background-color: #000000;
  width: 100%;
  height: 75px;
}
.boton_opcion {
  margin: auto;
  margin-right: 15px;
}
.boton_opcion button {
  border-radius: 50%;
  padding: auto;
  width: 40px;
  height: 40px;
  background-color: #fff;
  display: block;
  border: none;
  font-size: 24px;
}

.boton_opcion button:hover {
  background-color: rgb(44, 4, 153);
}

.blog {
  margin-bottom: 100px;
}

.cont-blog {
  background: rgb(92, 6, 140);
  text-align: left;
}
.titulo-blog {
  padding: 40px 10px;
}
.cont-blog span {
  font-size: 35px;
  padding: 40px 15px;
}
.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #032c58;
  border-color: #010913;
}
.btn-primary:focus,
.btn-primary.focus {
  color: #fff;
  background-color: rgb(92, 6, 140);
  border-color: rgb(92, 6, 140);
  box-shadow: 0 0 0 0.2rem rgb(38 143 255 / 50%);
}
@media (max-width: 995px) {
  header .log-cp {
    font-weight: 400;
    font-size: 30px;
    color: rgb(11, 1, 31);
    text-decoration: none;
    margin: 0 auto;
  }
  header {
    text-align: center;
  }
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

  .aux_form {
    width: 60%;
  }
  .caja__form label {
    width: 30%;
  }

  .blog__section:nth-child(1) {
    font-size: 20px;
  }
  .blog__section:nth-child(1) h6 {
    font-size: 20px;
  }
  .texto__blog {
    margin: 20px 20px;
    font-size: 14px;
    padding: 2px;
  }
}
@media (max-width: 790px) {
  .arbol-prin img {
    display: none;
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
    width: 300px;
    margin: auto;
  }
  header {
    text-align: center;
  }
  .arbol-prin img {
    display: none;
  }
  .blog__section:nth-child(1) {
    font-size: 15px;
  }
  .blog__section:nth-child(1) h6 {
    font-size: 15px;
  }
  .texto__blog {
    margin: 10px 10px;
    font-size: 12px;
    padding: 2px;
  }
  .imagen__blog img {
    /* border: 2px solid red;*/
    object-fit: contain;
    max-width: 150px;
    max-height: 150px;
  }
  .titulo-blog h2 {
    font-size: 40px;
  }
  .titulo-blog span {
    font-size: 25px;
  }
  .t-blog h2 {
    font-size: 50px;
  }
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

</style>
