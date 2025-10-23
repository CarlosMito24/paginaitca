<template>
  <div class="superior_menu">
    <router-link to="/" class="logo-link">
      <img src="../src/assets/image.png" alt="Logo de la Institución" class="logo" />
    </router-link>


    <div class="redes_sociales">
      <a href="https://facebook.com/pages/ITCA-FEPADE-Sitio-Oficial/187531457964501" target="_blank">
        <img src="../src/assets/facebook.png" alt="" class="redes" />
      </a>

      <a href="https://www.instagram.com/itca_fepade/" target="_blank">
        <img src="../src/assets/instagram.png" alt="" class="redes" />
      </a>

      <a href="https://www.youtube.com/channel/UC1mxt9W2mI_VDCqDaMiQF2Q?feature=mhee" target="_blank">
        <img src="../src/assets/youtube.png" alt="" class="redes" />
      </a>

      <a href="https://twitter.com/itcafepade" target="_blank">
        <img src="../src/assets/x.png" alt="" class="redes" />
      </a>

      <a href="https://www.tiktok.com/@itca_fepade/" target="_blank">
        <img src="../src/assets/tiktok.png" alt="" class="redes" />
      </a>

      <a href="https://sv.linkedin.com/school/itcaa/" target="_blank">
        <img src="../src/assets/linkedin.png" alt="" class="redes" />
      </a>

      <input type="text" class="input">
      
      <img src="../src/assets/lupa.png" alt="" class="redes" />
    </div>
  </div>
  <nav>
    <router-link to="/institucion">Institución</router-link>
    <router-link to="/carreras">Carreras</router-link>
    <router-link to="/nuevoingreso">Nuevo Ingreso</router-link>
    <router-link to="/cursosydiplomados">Cursos y Diplomados</router-link>
    <router-link to="/investigacionyproyeccionsocial">Investigación y proycción social</router-link>
    <div class="menu-item-dropdown">
      <router-link to="" class="enlace-principal">Recursos Estudiantiles</router-link>
      <div class="submenu">
        <a href="https://apps.itca.edu.sv/portalestudiantil/" target="_blank">Portal Estudiantil</a>
        <a href="https://www.itca.edu.sv/conoce-tu-biblioteca/" target="_blank">Biblioteca</a>
      </div>
    </div>
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
  background: #D69C23;
  padding: 20px;
  color: #FFF;
  display: flex;
}

.menu-item-dropdown {
  position: relative;
  display: inline-block;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  background-color: #FFF;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.submenu a {
  color: darkred;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  margin: 0;
}

.submenu a:hover {
  background-color: #d35400;
}

.menu-item-dropdown:hover .submenu {
  display: block;
}

nav a {
  color: #FFF;
  padding: 0 15px;
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
  background: #EBD299;
  padding: 10px 50px;
}

.redes_sociales {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


input {
  width: 200px;
  height: 20px;
  border: none;
}

.redes {
  height: 20px;
  margin: 10px;
  filter:
    grayscale(1000%)
}

footer {
  margin-top: 20px;
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
