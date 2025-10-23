<template>
    <div class="carreras-por-campus">
        <h1 class="titulo">CURSOS Y DIPLOMADOS POR CAMPUS</h1>
        <p class="subtitulo">
            Selecciona la regional de tu interés y te mostraremos los cursos que ofertamos
        </p>

        <div class="campus-grid">
            <div class="campus-item">
                <img src="../assets/Santa-Tecla-2-1.jpg" alt="Santa Tecla">
                <h3>SANTA TECLA</h3>
            </div>

            <div class="campus-item">
                <img src="../assets/Santa-Ana.jpg" alt="Santa Ana">
                <h3>SANTA ANA</h3>
            </div>

            <div class="campus-item">
                <img src="../assets/Zacatecoluca.jpg" alt="Zacatecoluca">
                <h3>ZACATECOLUCA</h3>
            </div>
        </div>

        <div class="campus-grid2">
            <div class="campus-item">
                <img src="../assets/SanMiguel.jpg" alt="San Miguel">
                <h3>SAN MIGUEL</h3>
            </div>

            <div class="campus-item">
                <img src="../assets/La-Union-2.jpg" alt="La Unión">
                <h3>LA UNIÓN</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CursosyDiplomados"
};
</script>

<style scoped>
.carreras-por-campus {
    text-align: center;
    padding: 40px 20px;
}

.titulo {
    color: #c40000;
    text-transform: uppercase;
    font-size: 28px;
    margin-bottom: 10px;
}

.subtitulo {
    color: #333;
    font-size: 16px;
    margin-bottom: 40px;
}

.campus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    justify-items: center;
}

.campus-grid2 {
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;
  justify-content: space-evenly;
}


.campus-item {
    text-align: center;
}

.campus-item img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
}

.campus-item img:hover {
    transform: scale(1.03);
}

.campus-item h3 {
    margin-top: 10px;
    font-size: 18px;
    color: #111;
    font-weight: 600;
}
</style>