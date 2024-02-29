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
