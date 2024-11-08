<template>
  <el-row class="tac" style="height: 100%;">
    <el-col :span="12" class="sidebar">
      <el-menu 
      default-active="$router.path"
      router
          id="sideBar1"
          active-text-color="yellow"
          background-color="black"
          class="el-menu-vertical-demo"
          text-color="white"
        >
      <!--- Esta es la parte correspondiente a el primer sidebar ---->
        <el-sub-menu index="1">
          <template #title>
            <el-icon><User /></el-icon>
            <span>Personas</span>
          </template>

          <el-sub-menu index="1-1">
            <template #title>
            <el-icon><InfoFilled /></el-icon>
            <span>Información</span>
            </template>
            <el-menu-item index="1-1-1">Presidentes</el-menu-item>
            <el-menu-item index="1-1-2">Gerentes Regionales</el-menu-item>
            <el-menu-item index="1-1-3">Gerentes Zonales</el-menu-item>
            <el-menu-item index="1-1-4">Gerentes de Oficina</el-menu-item>
            <el-menu-item index="1-1-5">Directores de oficina</el-menu-item>
            <el-menu-item index="1-1-6">Asesores de Oficina</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="1-2">
            <template #title>Contactos</template>
            <el-menu-item index="1-2-1">Presidentes</el-menu-item>
            <el-menu-item index="1-2-2">Gerentes Regionales</el-menu-item>
            <el-menu-item index="1-2-3">Gerentes Zonales</el-menu-item>
            <el-menu-item index="1-2-4">Gerentes de Oficina</el-menu-item>
            <el-menu-item index="1-2-5">Directores de oficina</el-menu-item>
            <el-menu-item index="1-2-6">Asesores de Oficina</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <!--- Esta es la parte correspondiente a el primer sidebar ---->

        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Localidades</span>
          </template>
          
          <el-sub-menu index="1-3">
            <template #title>Localidades</template>
            <el-menu-item index="paises">Paises</el-menu-item>
          <el-menu-item index="1-3-2">Regiones</el-menu-item>
          <el-menu-item index="1-3-3">Departamentos</el-menu-item>
          <el-menu-item index="1-3-4">Municipios</el-menu-item>
          <el-menu-item index="1-3-5">Oficinas</el-menu-item>
          </el-sub-menu>
          
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
  User,
  InfoFilled,


} from '@element-plus/icons-vue'

</script>

<style scoped>
#sideBar1{
  width: fit-content;
}

html, body{
  margin: 0;
  padding: 0;
  height: 100%;
}

.sidebar{
  overflow-y: auto;
}

.el-menu-vertical-demo{
  height: 100%;
}
</style>