<template>
    <div class="fila">
      <button class="btn_rojo">Requisitos</button>
      <button class="btn_rojo">Brochure</button>
      <button class="btn_rojo">Pasos para inscribirse en línea</button>
      <button class="btn_rojo">Carreras Impartidas</button>
      <button class="btn_rojo">Aranceles</button>
      <button class="btn_rojo">Contáctenos</button>
      <button class="btn_rojo">Becas</button>
    </div>

    <div class="fila">
      <button class="btn_grande">OPEN HOUSE</button>
    </div>
</template>

<script>
</script>

<style scoped>
.fila {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px; /* Espacio uniforme entre botones */
  margin: 50px;
  text-align: center;
}

.btn_rojo {
  background-color: #b3221f;
  color: white;
  border: none;
  width: 300px;
  height: 100px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.btn_rojo:hover {
  opacity: 0.8;
}

.btn_grande {
  background-color: #b3221f;
  color: white;
  border: none;
  width: 400px;
  height: 100px;
  font-size: 22px;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.btn_grande:hover {
  opacity: 0.8;
}
</style>
