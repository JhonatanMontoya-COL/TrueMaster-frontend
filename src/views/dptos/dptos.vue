<template>
    <LayoutMain>
        <template #slotLayout>
            <Header  
             :title="'Módulo de Departamentos'"
             :titleBtn="'Módulo de Departamentos'"

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