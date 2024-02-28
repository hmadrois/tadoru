<script setup>

const props = defineProps(['itemTambah'])

</script>


<template>
    <div class="flexrow box shadow">
        <p>Tadoru</p>
        <button v-on:click="itemTambah" class="box" >+</button>
    </div>
</template>


<style>
.flexrow {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.flexrow > p {
    margin-left: 1rem;
    flex: 1;
}

.flexrow > button {
    font-size: 32px;
    border: none;
    border-left: 1px solid;
}
</style>