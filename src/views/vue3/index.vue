<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
    count.value++

}

</script>

<template>
    <el-text class="mx-1" size="large">
        <h3>1.响应式基础</h3>
    </el-text>

    <el-row>
        <el-button type="danger" @click="increment" round>count: {{ count }}</el-button>
    </el-row>
</template>

<style scoped>
.el-text {
    margin-bottom: 20px;
}

.el-row {
    margin-top: 20px;
}
</style>