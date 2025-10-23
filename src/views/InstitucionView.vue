<template>
    <div class="mission-vision-container">
        <div class="content-box">
            <div class="section mission-section">
                <h2>MISIÓN</h2>
                <p>
                    Formar profesionales integrales y competentes en las áreas
                    tecnológicas que tengan demanda y oportunidad en el mercado
                    local, regional y mundial tanto como trabajadores y como
                    empresarios.
                </p>
            </div>
            <div class="section vision-section">
                <h2>VISIÓN</h2>
                <p>
                    Ser una institución educativa líder en educación tecnológica a nivel
                    nacional y regional, comprometida con la calidad, la empresarialidad
                    y la pertinencia de nuestra oferta educativa.
                </p>
            </div>
            <div class="values-section">
                <h2>VALORES</h2>
                <p>
                    Excelencia, Integridad, Espiritualidad, Cooperación y Comunicación.
                </p>
            </div>
        </div>
        <div class="bottom-border"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.mission-vision-container {
    background-color: #c99831;
    padding: 30px;
    color: white;
    font-family: Arial, sans-serif; 
    text-align: center; 
}

.content-box {
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-around; 
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px;
}

.section {
    flex: 1; 
    min-width: 300px; 
    margin: 20px;
    padding: 0 20px;
    text-align: center;
}

h2 {
    font-size: 2em;
    margin-bottom: 20px;
    font-weight: bold;
    color: white;
}

.mission-section, .vision-section {
    max-width: 45%; 
}

.values-section {
    width: 100%;
    margin-top: 30px;
    padding-top: 30px;
}

.values-section h2 {
    font-size: 2em;
    margin-bottom: 20px;
}

.values-section p {
    font-size: 1.2em; 
}

p {
    font-size: 1.1em;
    line-height: 1.6;
}

.bottom-border {
    height: 5px;
    background-color: #8c001a; 
    width: 100%;
    margin-top: -30px; 
}

@media (max-width: 768px) {
    .content-box {
        flex-direction: column;
    }

    .mission-section, .vision-section {
        max-width: 100%;
        margin: 20px 0;
    }
}
</style>