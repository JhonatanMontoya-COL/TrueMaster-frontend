<template>
    <el-container class="layout-container-demo" style="height: 500px">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">


            <el-sub-menu index="1">
              <template #title>
                <el-icon><message /></el-icon>Correos
              </template>
                <el-menu-item index="1-2"><el-icon><user/></el-icon>Persona</el-menu-item>
                <el-menu-item index="1-3"><el-icon><List/></el-icon>Cargos</el-menu-item>
                <el-menu-item index="1-4"><el-icon><MapLocation/></el-icon>Países</el-menu-item>
            </el-sub-menu>

            
          </el-menu>
        </el-scrollbar>
      </el-aside>
    </el-container>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { Menu as IconMenu, Message, Setting , User , MapLocation , List} from '@element-plus/icons-vue'
  
  const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
  const tableData = ref(Array.from({ length: 20 }).fill(item))
  </script>
  
  <style scoped>
  .layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
  }
  .layout-container-demo .el-menu {
    border-right: none;
  }
  .layout-container-demo .el-main {
    padding: 0;
  }
  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
  </style>