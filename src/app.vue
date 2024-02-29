<script setup>

import MainHeader from './components/header.vue'
import MainContent from './components/content.vue'
import MainEditor from './components/editor.vue'

import { provide, reactive, ref } from 'vue';

const items = ref(["a", "b", "c"])

const editing = ref(false)
const notes = reactive({
    judul: '',
    isi: ''
})

provide('items', items)
provide('editing', editing)
provide('notes', notes)

function itemTambah(){
    console.log("tambah")
}

function itemPilih(index){
    notes.judul = items.value[index]
    editing.value = true
}

function kembali(judul, isi){
    console.log(judul, isi)
    notes.judul = ''
    notes.isi = ''
    editing.value = false
}

</script>

<template>
    <MainHeader @item-tambah="itemTambah" />
    <MainContent @item-pilih="itemPilih" />
    <MainEditor @kembali="kembali" />
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
    border: 0px solid;
}

.shadow {
    border: 1px solid;
    box-shadow: 0px 4px black;
}

</style>