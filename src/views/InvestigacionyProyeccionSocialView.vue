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


@media (max-width: 768px) {
    .button-grid-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
}

@media (max-width: 480px) {
    .button-grid-container {
        grid-template-columns: 1fr;
    }
}
</style>