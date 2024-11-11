<template>
  
    <div class="container">
      <div class="container_header">
        <h2 class="container_title">Módulo de {{ title }}</h2>

      <el-row justify="center">
        <el-button type="primary" @click="open" class="padded-button">{{ titleButton_001 }}</el-button>
      </el-row>
      
      </div>
        
    </div>
</template>

<script setup>
import LayoutMain from './LayoutMain.vue';

defineProps({

  title: {String, required: true},
  titleButton_001:{String, required: true},
  
  open:{
    type:Function,
    required:true
  }

})

</script>

<style scoped>
.container{
  margin-bottom: 10px;
}
.container_header{
  display: flex;
  justify-content: space-between;
}

.padded-button{
  padding: 20px;
  background-color: #8000ff;
  border: none;
  color: rgb(255, 255, 255);
  font-size: 15px;
}
.container_title{
  margin-left: auto;
  margin-right: auto;
  color: rgb(255, 255, 255);
}


</style>