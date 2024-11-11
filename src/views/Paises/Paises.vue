<template>
    <LayoutMain>
        <template #slotLayout>
            <Header   
            :title="'Países'"
            :titleButton_001="'Crear País'"
            :isOpen="openForm_101"
            ></Header>

          <Formulario :titulo="'Gestion de Paises'" v-model:is-open="show_101" :is-edit="edit_101">
              <template #slotForm>
                  <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                  <FormularioPaises   
                  v-model:is-open="show_101" :is-edit="edit_101"  
                  />
                  </el-col>
                  </el-row>
              </template>
          </formulario>
              <div class="table" id="table">
                <el-table :data="tableData" stripe style="width: 100%;color: #13161c;">
                    <el-table-column id="col1" prop="nombre" label="Nombre" width="180"/>
                    <el-table-column prop="direccion" label="dirección" width="180" />
                    <el-table-column prop="telefono" label="Teléfono" />
                    <el-table-column fixed="right" label="Operations" min-width="120">
                    <template #default>
                    <el-button link type="primary" :icon="EditPen"></el-button>
                    <el-button link type="danger" :icon="Delete"></el-button>
                    </template>
                    </el-table-column>
                </el-table>

            </div>

        </template>
    </LayoutMain>
</template>
  
  <script setup>
    import { reactive, ref } from 'vue'
    import Formulario from "../../components/formulario.vue";
    import Header from '../../components/Header.vue';
    import LayoutMain from '../../components/LayoutMain.vue';
    import {Delete,EditPen} from "@element-plus/icons-vue"
    import FormularioPaises from "./components/formPaises.vue"
  import { darken } from 'element-plus/es/components/button/src/button-custom.mjs';



    const show_101 = ref(false)
    const edit_101 = ref(false)
    
    const openForm_101 = () =>{
      show_101.value=true
      edit_101.value=false
    }
    const editForm_101 = () =>{
      show_101.value=true
      edit_101.value=true
    }

  const tableData = [
  {
    nombre: 'Alejandro Montoya',
    direccion: 'ASDASDASD3434',
    telefono: '4242342',
  },
  {
    nombre: 'Jhonatan Montoya',
    direccion: 'fafdfs',
    telefono: '424234',
  },
  {
    nombre: 'Nataly Montoya',
    direccion: 'sdfsdf',
    telefono: '423423',
  },
  {
    nombre: 'Luz Mary Martinez',
    direccion: 'adasd',
    telefono: '234',
  },
  {
    nombre: 'none',
    direccion: 'none',
    telefono: 'none',
  }
]
  </script>

<style scoped>


</style>