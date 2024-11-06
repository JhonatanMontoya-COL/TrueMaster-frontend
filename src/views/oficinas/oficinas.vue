<template>
    <LayoutMain>
        <template #slotLayout>
            <Header  
             :title="'Módulo de las Oficinas'"
             :titleBtn="'Módulo de las Oficinas'"

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