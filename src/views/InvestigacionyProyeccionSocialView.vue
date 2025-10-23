<template>
    <div>
        <img src="@/assets/proyeccion.png" style="width: 100%; height: auto;" />

        <div class="button-grid-container">
            <div class="grid-item">INVESTIGACIÓN APLICADA</div>
            <div class="grid-item">PROYECCIÓN SOCIAL</div>
            <div class="grid-item">PROPIEDAD INTELECTUAL</div>
            <div class="grid-item">PRODUCCIÓN ACADÉMICA</div>
            <div class="grid-item">DIVULGACIÓN</div>
            <div class="grid-item">PREMIOS Y RECONOCIMIENTOS</div>
        </div>
        <hr class="separator-line" />

        <div class="programa-container">
            <div class="header-section">
                <div class="red-triangle"></div>
                <h1 class="programa-title">PROGRAMA DE INVESTIGACIÓN APLICADA</h1>
            </div>

            <p class="programa-text">
                El Programa de Investigación Aplicada en Ciencia, Tecnología e Innovación de ITCA-FEPADE se vincula a la Docencia y a la Proyección Social, y tiene como objetivo contribuir con la solución de necesidades y problemas concretos de la comunidad, del sector empresarial y de la institución. El programa se planifica, se asesora y se coordina desde la Dirección de Investigación y Proyección Social, y se ejecuta a través de proyectos de investigación aplicada que son desarrollados por los diferentes departamentos académicos de la institución. El programa se planifica, se asesora y se coordina desde la Dirección de Investigación y Proyección Social y se ejecuta bajo la responsabilidad de docentes investigadores permanentes de la sede central y centros regionales, con la participación activa de grupos de estudiantes destacados y con interés en participar en los proyectos de las diferentes carreras técnicas y de ingeniería.
            </p>
            <p class="programa-text">
                Los proyectos se formulan considerando el Direccionamiento Estratégico, la Agenda Estratégica de Investigación de ITCA-FEPADE y la Agenda Nacional de Investigación del PLAN del Viceministerio de Ciencia y Tecnología del MINED.    
            </p>
            <p class="programa-text">
                ITCA-FEPADE difunde y promueve los resultados de los proyectos de investigación mediante un programa anual de producción y difusión; utiliza medios impresos, digitales y en línea. Entre los medios impresos cuenta con: la Revista Tecnológica, la Memoria de Labores, la Memoria de Investigación y Proyección Social, los Informes Finales de Investigación y el Informe Anual del Programa de Investigación Aplicada. Estas publicaciones en sus diferentes formatos, se difunden a través de esta página web oficial de ITCA-FEPADE, las bibliotecas de la sede central y centros regionales, la Biblioteca Nacional y bibliotecas de otras Universidades con quienes se comparten e intercambian documentos técnicos-científicos.    
            </p>
            <p class="programa-text">
                Los resultados se difunden además a nivel nacional e internacional en congresos y concursos, así como en otras publicaciones de instituciones de Educación Superior amigas nacionales e internacionales.
            </p>
            <p class="programa-text">
                De forma particular se difunden los resultados gestionando continuamente el registro de la Propiedad Intelectual y Propiedad Industrial de productos con potencial de Patente de Invención, Modelo de Utilidad y Derechos de Autor. Además se registra la producción académica a través de Derechos de Autor, Depósito Legal, ISBN e ISSN.
            </p>
        </div>
    </div>
    <div class="programa-container">
            <div class="header-section">
                <div class="red-triangle"></div>
                <h1 class="programa-title">PROGRAMA DE INVESTIGACIÓN APLICADA</h1>
            </div>

            <p class="programa-text">
                El Programa de Proyección Social ejecuta proyectos en beneficio de la comunidad y sectores necesitados, clasificados en líneas estratégicas institucionales: Adulto Mayor, Mujeres Vulnerables, Discapacitados, Fomento al Desarrollo Local, Fortalecimiento a Centros Educativos Públicos y Cuidado del Medio Ambiente. ITCA-FEPADE a través de su interacción del quehacer académico, contribuye a la solución de necesidades y problemas de la comunidad y sectores vulnerables, en concordancia con nuestra Misión, Visión y Valores de formar profesionales en carreras técnicas y de ingeniería, integrales y competentes, comprometidos con la excelencia, la cooperación y la calidad.
            </p>
    </div>
</template>

<script>
</script>

<style scoped>
.button-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
    max-width: 1000px;
    margin: 20px auto 0 auto; 
}

.grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #a52a2a;
    color: #a52a2a;
    text-transform: uppercase;
    padding: 20px 10px;
    font-family: Arial, sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    min-height: 50px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.grid-item:hover {
    background-color: rgba(165, 42, 42, 0.05);
}

.separator-line {
    margin-top: 50px;
    width: 80%;
    max-width: 960px;
    border: 0;
    height: 1px;
    background-color: #c0c0c0;
    margin-left: auto;
    margin-right: auto;
}

.header-section {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 40px 0 20px 0;
}

.red-triangle {
    width: 0;
    height: 0;
    border-left: 15px solid #b11b1b;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
}

.programa-title {
    font-family: 'Arial Narrow', Arial, sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #555555;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}


.programa-text {
    font-family: 'Arial', sans-serif;
    font-size: 15px;
    color: #4d4d4d;
    text-align: justify;
    line-height: 1.6;
    margin-bottom: 16px;
}

.programa-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 40px;
}

@media (max-width: 768px) {
    .button-grid-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }

    .programa-container {
        padding: 0 20px;
    }

    .programa-title {
        font-size: 18px;
    }
}

@media (max-width: 480px) {
    .button-grid-container {
        grid-template-columns: 1fr;
    }
}
</style>
