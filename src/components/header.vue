<template>
    <div class="box shadow flex">
        <p>Tadoru</p>
        <button @click="$emit('itemTambah')" class="box" >+</button>
    </div>
</template>


<style scoped>

.flex {
    display: flex; 
    flex-direction: row; 
    align-items: center;
}

.flex > p {
    flex: 1;
    margin-left: 1rem;
}

</style>