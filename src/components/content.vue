<script setup>
import { inject } from 'vue';


const items = inject('items')


</script>


<template>
    <div class="flex">
        <button class="box shadow" @click="$emit('itemPilih', index)" v-for="(item, index) in items">{{ item }}</button>
    </div>
</template>

<style scoped>

.flex {
    display: flex;
    flex-direction: column;
}

.flex > button {
    margin-top: 20px;
}

</style>