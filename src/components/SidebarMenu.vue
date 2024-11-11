<template>
      <el-menu 
      :default-active="$route.path"
      router
      class="el-menu-vertical-demo"
          active-text-color="yellow"
          background-color="#13161c"
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
            <el-icon></el-icon>
            <span>Información</span>
            </template>
            <el-menu-item index="Empleados">Empleados</el-menu-item>
            <el-menu-item index="Cargos">Cargos</el-menu-item>
            <el-menu-item index="Paises">Paises</el-menu-item>
            <el-menu-item index="Regiones">Regiones</el-menu-item>
            <el-menu-item index="Departamentos">Departamentos</el-menu-item>
            <el-menu-item index="Oficinas">Oficinas</el-menu-item>
            <el-menu-item index="Municipios">Municipios</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
</template>

<script lang="ts" setup>
import {User} from '@element-plus/icons-vue'

</script>

<style scoped>
html, body{
  margin: 0;
  padding: 0;
}
.el-menu-vertical-demo{
  background-color: #13161c;
  width: fit-content;
  min-height: 100%;
  border-color: white;
}
</style>