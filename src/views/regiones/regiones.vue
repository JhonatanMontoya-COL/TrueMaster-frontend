<template>
    <LayoutMain>
        <template #slotLayout>
            <Header  
             :titulo="'Regiones'"
             :tituloBoton="'Crear Regiones'"

             >
              
            </Header>
        </template>
    </LayoutMain>
</template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
import Header from '../../components/Header.vue';
  import LayoutMain from '../../components/LayoutMain.vue';
  </script>