<script setup>
import { inject, reactive, ref, watch } from 'vue';

const editing = inject('editing')
const notes = inject('notes')
const localNotes = reactive(
    {   'judul': ''
    ,   'isi': ''
})

watch(editing, (editing, prevEditing) => {
    if (editing)
    {   localNotes.judul = notes.judul
        localNotes.isi = notes.isi
    }
})

</script>

<template>
    <div :class="{'blank': true, 'blank-active': editing}">
        <div class="modal box shadow" :class="{'modal-active': editing}">
            <div style="display: flex; flex-direction: row; align-items: center;">
                <button v-on:click="$emit('kembali', localNotes)" class="box">&lt;</button>
                <input v-model="localNotes.judul" type="text" class="title">
            </div>
            <textarea v-model="localNotes.isi" class="field"></textarea>
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
    background-color: white;
}

@keyframes modal {
    from {
        opacity: 0;
        width: 50%;
        height: 50%;
    }
}

.modal-active {
    animation-name: modal;
    animation-duration: 0.2s;
    width: 90%;
    transform: translate(-50%, -50%);
    height: 75%;
    opacity: 1;
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