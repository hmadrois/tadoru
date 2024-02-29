<script setup>
import { inject, ref, watch } from 'vue';

const editing = inject('editing')
const notes = inject('notes')

watch(editing, (editing, prevEditing) => {
})

</script>

<template>
    <div :class="{'blank': true, 'blank-active': editing}">
        <div :class="{'modal': true, 'modal-active': editing}">
            <div style="display: flex; flex-direction: row; align-items: center;">
                <button v-on:click="$emit('kembali', [judul, isi])" class="box">&lt;</button>
                <input v-model="notes.judul" type="text" class="title">
            </div>
            <textarea v-model="notes.isi" class="field"></textarea>
        </div>
    </div>
</template>

<style scoped>
.blank {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
}

@keyframes blank {
    from {background-color: rgba(0,0,0,0);}
    to {background-color: rgba(0,0,0,0.5);}
}

.blank-active {
    display: block;
    background-color: rgba(0,0,0,0.5);
    animation-duration: 0.2s;
    animation-name: blank;
}

.modal {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 75%;
    background-color: white;
    transform: translate(-50%, -50%);
    transition: all;
}

@keyframes modal {
    from {
        height: 70%;
        width: 80%;
    }
    to {
        height: 75%;
        width: 90%;
    }
}

.modal-active {
    animation-name: modal;
    animation-duration: 0.2s;
}


.title {
    flex-grow: 1;
    margin: 0 1rem;
    font-size: medium;
    border: none;
    outline: none;
    height: 90%;
}

.field {
    font-weight: 500;
    position: relative;
    margin: 1rem;
    border: 1px solid;
    box-shadow: 0 4px;
    padding: 10px;
    flex-grow: 1;
    outline: none;
    resize: none;
}

@media (min-width: 600px){
    .modal {
        max-width: 600px;
    }
}


</style>