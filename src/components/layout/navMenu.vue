<script setup lang="ts">
// import { reactive } from 'vue'
import { useMenu } from './useMenu'
import Icons from '../common/icons.vue'

const { menuItems } = useMenu()


</script>

<template>
    <el-aside width="200px" class="aside">
        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="1"
            text-color="#fff" router>
            <el-menu-item :index="v.url" v-for="v in menuItems" :key="v.url">
                <el-icon>
                    <Icons :icon="v.icon" />
                </el-icon>
                <span>{{ v.name }}</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<style scoped>
.el-aside {
    .el-menu {
        /* 使用“+”，“-”时，其前后必须要有空格 */
        height: calc(100vh - 80px);

    }

}
</style>
