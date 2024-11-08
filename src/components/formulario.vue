<template>

    <div class="container_header" v-if="isVisible">
        <h1 class="title">Módulo de {{ prop.title }}</h1>
        <el-row justify="center">
            <el-button type="primary">Cancelar</el-button>
            <el-button type="primary">Guardar</el-button>
        </el-row>
        <slot name="slotForm"></slot>
    </div>
</template>

<script setup>

import { computed, ref } from 'vue';
 
const prop = defineProps({
  title: String,
  createForm_101: Boolean,
})

const isVisible = computed(()=> prop.createForm_101 );

</script>

<style scoped>

</style>