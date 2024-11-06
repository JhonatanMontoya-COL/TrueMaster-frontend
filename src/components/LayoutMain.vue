<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/SidebarMenu.vue';



</script>

<template>
<el-container style="height: 100vh;">
    <el-header>
        <Navbar></Navbar>
    </el-header>
    <el-container>
        <el-aside width="400px">
            <Sidebar></Sidebar>
        </el-aside>
        <el-main>
            <slot name="slotLayout"></slot>
            <slot name="slotLayout2"></slot>
        </el-main>
    </el-container>
</el-container> 

</template>
  

<style scoped>

.el-container{
    flex: 1;
    display: flex;

}
.el-header{
    padding: 0 0px;
    height: 60;
}

.el-aside{
    width: 500px;
}
</style>
