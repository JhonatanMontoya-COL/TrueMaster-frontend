<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        active-text-color="yellow"
        background-color="black"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="white"
        @open="handleOpen"
        @close="handleClose"
      >
      <!--- Esta es la parte correspondiente a el primer sidebar ---->
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Personas</span>
          </template>

          <el-sub-menu index="1-1">
            <template #title>Informacion</template>
            <el-menu-item index="1-4-1">Presidentes</el-menu-item>
            <el-menu-item index="1-4-1">Gerentes Regionales</el-menu-item>
            <el-menu-item index="1-4-1">Gerentes Zonales</el-menu-item>
            <el-menu-item index="1-4-1">Gerentes de Oficina</el-menu-item>
            <el-menu-item index="1-4-1">Directores de oficina</el-menu-item>
            <el-menu-item index="1-4-1">Asesores de Oficina</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="1-2">
            <template #title>Contactos</template>
            <el-menu-item index="1-4-1">Presidentes</el-menu-item>
            <el-menu-item index="1-4-1">Gerentes Regionales</el-menu-item>
            <el-menu-item index="1-4-1">Gerentes Zonales</el-menu-item>
            <el-menu-item index="1-4-1">Gerentes de Oficina</el-menu-item>
            <el-menu-item index="1-4-1">Directores de oficina</el-menu-item>
            <el-menu-item index="1-4-1">Asesores de Oficina</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <!--- Esta es la parte correspondiente a el primer sidebar ---->

        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Localidades Generales</span>
          </template>
          
          <el-menu-item index="1-1">Paises</el-menu-item>
          <el-menu-item index="1-2">Regiones</el-menu-item>
          <el-menu-item index="1-3">Departamentos</el-menu-item>
          <el-menu-item index="1-4">Municipios</el-menu-item>
          <el-menu-item index="1-5">Oficinas</el-menu-item>
        </el-sub-menu>


      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>

</style>