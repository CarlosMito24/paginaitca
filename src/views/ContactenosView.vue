<template>
  <div>
    <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.7328665067566!2d-89.28140622451382!3d13.674000799089193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f632e511f372dd3%3A0x3fe0c1447718b059!2sITCA%20-%20FEPADE!5e0!3m2!1ses-419!2ssv!4v1761232784710!5m2!1ses-419!2ssv"
            style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="programa-container">
      <div class="header-section">
        <div class="red-triangle"></div>
        <h1 class="programa-title">CONTÁCTENOS</h1>
      </div>

      <div class="contact-container">
        <div class="contact-info">
          <div class="sede sede-central">
            <h3>Sede Central Santa Tecla</h3>
            <p>Km. 11 Carretera a Santa Tecla.</p>
            <p>Rutas de Buses: 101 B, 101 A directo, R 79</p>
            <p>Tel. (503) 2132-7400</p>
          </div>

          <div class="sedes-inferiores-grid">
            <div class="sede">
              <h3>Regional San Miguel</h3>
              <p>Km. 140, Carretera a Santa Rosa de Lima.</p>
              <p>Tel. (503) 2669-2298</p>
            </div>

            <div class="sede">
              <h3>Regional Santa Ana</h3>
              <p>Final 10a. Av. Sur, Finca Procavia</p>
              <p>Tel. (503) 2440-4348, (503) 2440-2007</p>
              <p>Tel. Fax. (503) 2440-3183</p>
            </div>

            <div class="sede">
            <img src="@/assets/logomega.jpeg" class="megatec-logo" />
              <h3>Regional La Unión</h3>
              <p>C. Santa María, Col. Belén, atrás del Instituto Nacional de La Unión.</p>
              <p>Tel. (503) 2668-4700</p>
            </div>

            <div class="sede">
              <img src="@/assets/logomega.jpeg" class="megatec-logo" />
              <h3>Regional Zacatecoluca</h3>
              <p>Km. 64 1/2, desvío Hacienda El Nilo, sobre autopista a Zacatecoluca y Usulután.</p>
              <p>Tel. (503) 2334-0763, (503) 2334-0768</p>
              <p>Fax. (503) 2334-0462</p>
            </div>
          </div>
        </div>

        <form class="contact-form">
          <label for="nombre">Nombre</label>
          <input id="nombre" type="text" />

          <label for="email">Correo electrónico</label>
          <input id="email" type="email" />

          <label for="enviar-a">Enviar correo a:</label>
          <select id="enviar-a">
            <option>Atención al cliente</option>
            <option>Soporte técnico</option>
            <option>Información general</option>
          </select>

          <label for="asunto">Asunto</label>
          <input id="asunto" type="text" />

          <label for="mensaje">Mensaje</label>
          <textarea id="mensaje"></textarea>

          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
iframe {
    width: 100%;
    height: 400px;
    border: none;
}
.programa-container {
  padding: 30px;
  font-family: Arial, sans-serif;
  color: #333;
}

.header-section {
  display: none; 
}

.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0;
  flex-wrap: wrap; 
  gap: 30px; 
}

.contact-info {
  flex: 2; 
  min-width: 500px;
}

.sede {
  margin-bottom: 25px;
  padding-right: 20px;
  line-height: 1.3;
}

.sede h3 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.sede p {
  margin: 0;
  color: #555;
  font-size: 14px;
}

.sedes-inferiores-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.megatec-logo {
  max-width: 120px; 
  height: auto;
  margin-top: 10px;
}

.sede-central {
  grid-column: 1 / -1;
  padding-right: 0;
}

.contact-form {
  flex: 1.2;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
}

.contact-form label {
  font-weight: normal;
  color: #333;
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 14px;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 0;
  box-sizing: border-box;
  margin-bottom: 5px;
}

.contact-form textarea {
  height: 120px;
  resize: vertical;
}

.contact-form button {
  background-color: #a4161a;
  color: #fff;
  border: none;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 0;
  cursor: pointer;
  margin-top: 15px;
  align-self: flex-end;
  width: auto;
}

.contact-form button:hover {
  background-color: #7a1014;
}

@media (max-width: 1000px) {
  .contact-container {
    flex-direction: column;
    gap: 40px;
  }

  .contact-info,
  .contact-form {
    min-width: 100%;
  }

  .contact-form button {
    align-self: stretch;
    width: 100%;
  }
}

@media (max-width: 700px) {
  .sedes-inferiores-grid {
    grid-template-columns: 1fr;
  }
}
</style>