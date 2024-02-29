<script setup>

const props = defineProps(['itemTambah'])

</script>


<template>
    <div class="flexrow box shadow">
        <p>Tadoru</p>
        <button v-on:click="itemTambah" class="box" >+</button>
    </div>
</template>