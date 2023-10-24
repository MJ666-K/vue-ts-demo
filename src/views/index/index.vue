<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ItableData } from './type'
import axios from '../../components/http/indx'

// let title = ref('首页')
const tableData = ref<ItableData[]>([]); // 初始化

onMounted(async () => {
    let { data } = await axios.request<{ data: ItableData[] }>('get', '/data/query');
    tableData.value = data;
})

</script>

<template>


    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="序号" width="180" />
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="user" label="姓名" width="180" />
        <el-table-column prop="title" label="文章标题" />
        <el-table-column prop="check" label="状态" />
        <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
            </template>
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style scoped></style>