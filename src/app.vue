<script setup>

import MainHeader from './components/header.vue'
import MainContent from './components/content.vue'
import MainEditor from './components/editor.vue'

import { ref } from 'vue';

const Items = ref(["a", "b", "c"])
const editing = ref(false)

function itemTambah(){
    console.log("tambah")
}

function itemPilih(index){
    this.editing = true
}

</script>

<template>
    <MainHeader :itemTambah="itemTambah" />
    <MainContent :itemPilih="itemPilih" :data="Items"  />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    font-family: "Montserrat";
    font-weight: bold;
}

.box {
    min-width: 64px;
    min-height: 64px;
    border: 1px solid;
}

.shadow {
    border: 1px solid;
    box-shadow: 0px 4px black;
}

.active {
    position: absolute;
    top: 0;
    left: 0;
}

</style>