<script >
//Lógica js
import { ref } from 'vue'

var nombreCargo = ref(1)


</script>

<template>
<!--Visuales, contiene los forms-->

<h1>Módulo de los Cargos</h1>

<el-input v-model="nombreCargo" style="width: 240px" placeholder="Nombre del cargo" />
</template>

<style>
/*estilos css*/

</style>


