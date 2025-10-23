<template>
    <div>
        <img src="../assets/tecnicos.jpg" alt="Banner">
        <div class="informacion">
            <div class="carreras-profesionales">
                <img src="../assets/BannerWeb.jpg" alt="Carreras Profesionales">
                <h3>Carreras Profesionales</h3>
                <p>Ingenierías y Técnicos</p>
                <button class="btn">Ver más</button>
            </div>

            <div>
                <img src="../assets/cursos.jpeg" alt="Cursos y Diplomados">
                <h3>Cursos y Diplomado</h3>
                <p>Amplía tus conocimientos con nuestros programas cortos.</p>
                <button class="btn">Ver más</button>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "InicioPagina"
};
</script>

<style scoped>
.img{
    display: flex;
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
}

.informacion {
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    color: black;
    margin-top: auto;
    justify-items: center;
    justify-content: space-evenly;
}

.informacion img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 8px;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
}

.informacion img:hover {
    transform: scale(1.03);
}

.btn {
    background-color: #b3221f;
    color: white;
    border: none;
    width: 100px;
    height: 50px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: opacity 0.3s;
}
</style>