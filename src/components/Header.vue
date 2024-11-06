<template>
    <div class="container">
      <div class="container_header">

        <h2 class="titulo">{{ title }}</h2>
      <el-row justify="center" align="middle">
        <el-button type="primary">{{ titleBtn }}</el-button>
      </el-row>
      
      </div>
        
    </div>
</template>

<script setup>
defineProps({
  title: String,
  titleBtn:String,
  likes: Number
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

</style>