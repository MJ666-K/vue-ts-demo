<script setup lang="ts">
// import { ref } from 'vue'
import navMenu from './navMenu.vue';



</script>

<template>
    <div id="module">
        <el-container>
            <!-- 头部 -->
            <el-header>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <img src="../../assets/logo.png" class="logo" />
                    </el-col>
                    <el-col :span="16">
                        <h2>Vue3+TypeScript</h2>
                    </el-col>
                    <el-col :span="4">
                        <span class="quit-login">退出登录</span>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <!-- 左侧导航 -->
                <navMenu />
                <!-- 主体 -->
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.el-header {
    height: 80px;
    background-color: #666;
}

.logo {
    height: 80px;
}

h2,
.quit-login {
    text-align: center;
    height: 80px;
    line-height: 80px;
    color: aliceblue;
}
</style>
