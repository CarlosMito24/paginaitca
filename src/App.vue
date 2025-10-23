<template>
  <div class="superior_menu">
    <img src="../src/assets/image.png" alt="" class="logo" router-link="../src/views/HomeView.vue" />

    <div class="redes_sociales">
      <img src="../src/assets/facebook.png" alt="" class="redes" />
      <img src="../src/assets/instagram.png" alt="" class="redes" />
      <img src="../src/assets/youtube.png" alt="" class="redes" />
      <img src="../src/assets/x.png" alt="" class="redes" />
      <img src="../src/assets/tiktok.png" alt="" class="redes" />
      <img src="../src/assets/linkedin.png" alt="" class="redes" />
    </div>
  </div>
  <nav>
    <router-link to="/institucion">Institución</router-link>
    <router-link to="/carreras">Carreras</router-link>
    <router-link to="/nuevoingreso">Nuevo Ingreso</router-link>
    <router-link to="/cursosydiplomados">Cursos y Diplomados</router-link>
    <router-link to="/investigacionyproyeccionsocial">Investigación y proycción social</router-link>
    <router-link to="/recursosestudiantiles">Recursos Estudiantiles</router-link>
    <router-link to="/noticias">Noticias</router-link>
    <router-link to="/contactenos">Contactenos</router-link>
    <router-link to="/mesondegoya">Mesón de Goya</router-link>
  </nav>
  <router-view />

  <footer>
    <div class="elementos_footer">
      <h3>Acerca</h3>
      <p>En La Escuela Especializada en Ingeniería ITCA-FEPADE estamos comprometidos con la calidad académica, la
        empresarialidad y la pertinencia de nuestra oferta educativa.</p>
      <div class="redes_sociales">
        <img src="../src/assets/facebook.png" alt="" class="redes" />
        <img src="../src/assets/instagram.png" alt="" class="redes" />
        <img src="../src/assets/youtube.png" alt="" class="redes" />
        <img src="../src/assets/x.png" alt="" class="redes" />
        <img src="../src/assets/tiktok.png" alt="" class="redes" />
        <img src="../src/assets/linkedin.png" alt="" class="redes" />
      </div>
    </div>
    <div class="elementos_footer">
      <h3>Institución</h3>
      <p>Cooperación Nacional e Internacional</p>
      <p>Gestión de la Calidad</p>
      <p>Investigación y Proyección Social</p>
      <p>Publicaciones</p>


      <p>Buzón de Sugerencias, Quejas y Reclamos</p>
    </div>
    <div class="elementos_footer">
      <h3>Cursos</h3>
      <p>
        Academia CISCO
      </p>
      <p>
        Gastronomía
      </p>
      <p>
        Mecatrónica, Electrónica e Industria 4.0
      </p>
      <p>
        Idiomas
      </p>
      <p>
        Tecnologías Informáticas
      </p>
      <p>
        Eléctrica, Automotriz, Mecánica Industrial, Civil y Construcción
      </p>
    </div>
    <div class="elementos_footer">
      <h3>
        Carreras
      </h3>
      <p>Sede Santa Tecla</p>
      <p>Regiuonal La Unión</p>
      <p>Regional San Miguel</p>
      <p>Regional Santa Ana</p>
      <p>Regional Zacatecoluca</p>
    </div>
  </footer>
  <div class="informacion">
    <p> Escuela Especializada en Ingeniería ITCA-FEPADE, Todos los derechos reservados.</p>
    <p> Carretera a Santa Tecla km. 11, La Libertad, El Salvador C.A.</p>
    <p>Tel. (503) 2132-7400</p>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

nav {
  background: orange;
  padding: 20px;
  color: #FFF;
  display: flex;
}

nav a {
  color: #FFF;
  margin: 20px;
  display: inline-block;
  text-decoration: none;
  font-size: 15px;
}

.logo {
  width: 300px;
}

.superior_menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.redes {
  height: 20px;
  margin: 10px;
  filter:
    grayscale(1000%)
}

footer {
  bottom: 0;
  display: flex;
  background: beige;
  justify-content: space-evenly;
  padding: 0 25px;
}

.elementos_footer {
  width: 300px;
  margin: 20px;
}

h3 {
  margin: 10px 0;
}

.informacion {
  text-align: center;
  margin: 10px;
  color: #AAA;
}
</style>
