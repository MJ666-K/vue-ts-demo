<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ItableData } from './type'
import axios from '../../components/http/indx'

// let title = ref('首页')
const tableData = ref<ItableData[]>([]); // 初始化
let dialog = ref<boolean>(false); //弹框的状态
let form = ref({}); //弹框具体数据


onMounted(async () => {
    let { data } = await axios.request<{ data: ItableData[] }>('get', '/data/query');
    tableData.value = data;
})

// 添加或者编辑
function setData(type: string, row: ItableData | null) {
    dialog.value = true;
    type == 'add' ? form.value = {} : form.value = { ...row };
}


</script>

<template>
    <div>
        <el-button type="primary" @click="$event => setData('add', null)">添加</el-button>
    </div>
    <br>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="序号" width="180" />
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="user" label="姓名" width="180" />
        <el-table-column prop="title" label="文章标题" />
        <el-table-column prop="check" label="状态">
            <template #default="{ row }">
                <el-tag :type="row.check ? '' : 'danger'">
                    {{ row.check ? '已发表' : '未发表' }}
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column align="right">
            <template #default="scope">
                <el-button size="small" @click="$event => setData('edit', scope.row)">编辑</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <!-- 弹框 -->
    <el-drawer ref="drawerRef" v-model="dialog" title="添加" direction="ltr" class="demo-drawer">
        <div class="demo-drawer__content">
            <el-form :model="form" status-icon label-width="120px" class="demo-ruleForm">
                <el-form-item label="序号">
                    <el-input v-model.number="form.id" autocomplete="off" />
                </el-form-item>
                <el-form-item label="日期">
                    <el-input v-model="form.date" autocomplete="off" />
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.user" />
                </el-form-item>
                <el-form-item label="文章标题">
                    <el-input v-model="form.title" />
                </el-form-item>
                <el-form-item label="状态">
                    <el-input v-model="form.check" />
                </el-form-item>
                <br>
                <el-form-item>
                    <el-button type="primary" @click="$event => dialog = false">Submit</el-button>
                    <el-button @click="$event => dialog = false">Reset</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-drawer>
</template>

<style scoped></style>