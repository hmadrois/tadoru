<script setup>
import { inject, onMounted, reactive, ref, watch } from 'vue';

const items = inject('items')

const judulJudul = ref([])
const sarang = ref({})

onMounted(() => {
    judulJudul.value = ambilJudul(items)
    sarang.value = aturSarang(judulJudul.value)
})

watch(items, () => {
    judulJudul.value = ambilJudul(items)
    sarang.value = aturSarang(judulJudul.value)
})

function aturSarang(arr){
    let sub = {}
    
    for (let i = 0; i < arr.length; i++){
        const el = arr[i]
        if (typeof el != "object"){ continue }
        if (!Object.keys(sub).includes(el[0])){
            sub[el[0]] = {}
            sub[el[0]][i] = el[1]
            continue
        }
        sub[el[0]][i] = el[1]
    }
    return sub
}

function ambilJudul(arr){
    let new_arr = []
    for (let i = 0; i < arr.length; i++){
        let el = arr[i][0]
        
        
        if (el.includes('.')){ 
            el = el.split('.')
            if (el.length > 2){
                let last_el = el
                last_el.splice(0, 1)
                last_el = last_el.join('.')
                el = [el[0], last_el]
            }
        }

        
        new_arr.push(el)
    }
    return new_arr
}

</script>


<template>
    <div class="flex">
        <template v-for="(judul, index) in judulJudul">
            <button @click="$emit('itemPilih', index)" class="box shadow" style="margin-top: 20px;" v-if="(typeof judul) == 'string'">{{ judul }}</button>
        </template>
        <template v-for="(val, key) in aturSarang(judulJudul)">
            <div class="shadow" style="margin-top: 20px;">
                <button disabled class="box">{{ key }}</button>
                <template v-for="(subVal, subKey) in val">
                    <button @click="$emit('itemPilih', subKey)" class="box shadow sub">{{ subVal }}</button>
                </template>
            </div>
        </template>
    </div>
</template>

<style scoped>

ul {
    list-style: none; 
    padding: 0; 
    margin: 0;
}

li {
    margin-top: 20px;
    border: 1px solid;
}

.sub {
}

.line {
    line-height: 64px;
    margin-left: 1rem;
}

.flex {
    display: flex;
    flex-direction: column;
}

button {
    text-align: left;
    width: 100%;
    margin: 0;
    padding-left: 1rem;
}

</style>