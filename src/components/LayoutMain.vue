<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/SidebarMenu.vue';


</script>

<template>
<el-container>
    <el-header>
        <Navbar></Navbar>
    </el-header>
    <el-container>
        <el-aside>
            <Sidebar></Sidebar>
        </el-aside>
        <el-main>
            main
        </el-main>
    </el-container>
</el-container> 
</template>
  

<style scoped>

.el-container{
    flex: 1;
    display: flex;
}
</style>
