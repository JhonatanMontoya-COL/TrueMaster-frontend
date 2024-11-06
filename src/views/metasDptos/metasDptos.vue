<template>
    <LayoutMain>
        <template #slotLayout>
            <Header  
             :title="'Módulo de las metas de los departamentos'"
             :titleBtn="'Módulo de las metas de los departamentos'"

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