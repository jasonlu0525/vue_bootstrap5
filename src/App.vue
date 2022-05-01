<script setup>
import { Tooltip } from 'bootstrap';

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
// eslint-disable-next-line no-unused-vars
const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import '@/assets/style/all.scss';
</style>
