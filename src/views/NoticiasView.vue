<template>
    <h2>Galería de Cartas</h2>
    <div class="contenedor">
        <div class="cartas">
            <img src="../assets/prime.jpg" alt="" />

            <h3><strong>REUNION DE EX ALUMNOS</strong></h3>

            <p>Con gran entusiasmo se desarrolló la primera reunión de la Red de Exalumnos de la Escuela de Computación
                de ITCA-FEPADE, un espacio para reencontrarse, compartir experiencias y fortalecer el vínculo con la
                institución. </p>
        </div>

        <div class="cartas">
            <img src="../assets/foto1.jpg" alt="" />
            <h3><strong>PREMIOS A LA EXCELENCIA</strong></h3>
            <p>ITCA-FEPADE se une a los Premios a la Excelencia Académica 2025–2026 del Ministerio de Educación, Ciencia
                y Tecnología (MINEDUCYT), reafirmando su compromiso con la innovación, la calidad educativa y la mejora
                continua en la formación técnica superior. </p>
        </div>

        <div class="cartas">
            <img src="../assets/foto2.jpg" alt="" />
            <h3><strong>TÉCNICOS GRADUADOS DE LA ESCUELA DE ALIMENTOS</strong></h3>
            <p>El Restaurante Escuela “Mesón de Goya” fue el escenario de un emotivo Encuentro de Exalumnos de la
                Escuela de Alimentos de ITCA-FEPADE, una jornada llena de alegría.
            </p>
        </div>


        <div class="cartas">
            <img src="../assets/foto3.jpg" alt="" />
            <h3><strong>EXALUMNOS DE LA ESCUELA DE ELÉCTRICA Y ELECTRÓNICA</strong></h3>
            <p>Con gran alegría se realizó la primera reunión de la Red de Exalumnos de la Escuela de Eléctrica y
                Electrónica de ITCA-FEPADE, un espacio para revivir anécdotas, saludar a docentes y fortalecer el
                vínculo </p>
        </div>


        <div class="cartas">
            <img src="../assets/foto4.jpg" alt="" />
            <h3><strong>SE REALIZÓ ITCA XPERIENCE 2025</strong></h3>
            
            <p>En Informática Inteligente, los participantes exploraron la programación web, redes e Inteligencia
                Artificial.
                En Manufactura Inteligente, crearon objetos 3D y programaron robots con fabricación . </p>
        </div>

        <div class="cartas">
            <img src="../assets/foto5.jpg" alt="" />
            <h3><strong>CAPACITACIÓN ALIMENTARIA</strong></h3>
            <p>En ITCA-FEPADE, con el respaldo de U.S. Meat Export Federation, se llevó a cabo una jornada formativa
                dirigida a estudiantes de la Escuela de Alimentos y Conservación adecuada
                Técnicas de cocción para garantizar la inocuidad
                Higiene en la manipulación
            </p>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.contenedor {
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    margin: 50px;
    flex-wrap: wrap;
}

.cartas {
    justify-items: center;
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 10px;
    width: 400px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
    margin: 20px;
    box-sizing: border-box;
    overflow: hidden;
}

.cartas:hover {
    transform: scale(1.05);
}

h3 {
    color: #333;
}

p {
    font-size: 14px;
    color: #000
}

img {
    height: 60%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}
</style>
