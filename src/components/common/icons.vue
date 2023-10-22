<template>
    <component :is="icon"></component>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const { icon } = defineProps<{
    icon: any
}>()


</script>