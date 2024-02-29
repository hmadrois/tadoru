<script setup>

const props = defineProps(['data', 'itemPilih'])

</script>

<template>
    <div class="flexcol">
        <button class="box shadow" style="margin-top: 20px;" v-on:click="itemPilih(index)" v-for="(dat, index) in data">{{ dat }}</button>
    </div>
</template>