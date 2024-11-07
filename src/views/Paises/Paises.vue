<template>
    <LayoutMain>
        <template #slotLayout>
            <Header   
            :title="'Módulo de Países'"
            :titleBtn="'Crear País'"
            >
            </Header>
            <formulario :titulo="'1'">
              <template #slotForm>
                <FormularioPaises></FormularioPaises>
              </template>
            </formulario>
            <div class="table">
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="nombre" label="Nombre" width="180" />
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
    import Header from '../../components/Header.vue';
    import LayoutMain from '../../components/LayoutMain.vue';
    import {Delete,EditPen} from "@element-plus/icons-vue"
    import FormularioPaises from "./components/formPaises.vue"
    import Formulario from "../../components/formulario.vue"

  const tableData = [
  {
    nombre: 'Alejandro Montoya',
    direccion: 'Carrera 56#65-01',
    telefono: '3505186539',
  },
  {
    nombre: 'Jhonatan Montoya',
    direccion: 'Calle 65#56-20',
    telefono: '3113353728',
  },
]
  </script>