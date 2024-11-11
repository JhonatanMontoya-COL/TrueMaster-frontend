<template>
    <el-menu
      :default-active="activeIndex"
      background-color="#fff"
      text-color="white"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img
          style="width: 180px;"
          src=""
          alt="Logo TrueMaster"
        />
      </el-menu-item>
      <h1 style="color: white; display: flex; justify-content: center; align-items: center; margin-right:auto;">TrueMaster</h1>
      <el-sub-menu index="1">
        <template #title><el-icon><user/></el-icon>Jhonatan Montoya</template>
        <el-menu-item index="2-1"><el-icon><user/></el-icon>Perfil</el-menu-item>
        <el-menu-item index="2-2"><el-icon><BellFilled/></el-icon>Reporte de bugs</el-menu-item>
        <el-menu-item index="2-3"><el-icon><Close/></el-icon>Cerrar Sesión</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
 import { Menu as IconMenu, User, BellFilled, Close} from '@element-plus/icons-vue'

  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  <style scoped>
  .el-menu-demo{
    background-color: #13161c;
    border-color: white;
    position: relative;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  .el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
  }
  </style>