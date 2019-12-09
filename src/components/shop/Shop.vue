<template>
    <div>
        <b-card-group deck>
            <app-items v-for="(thing,id) in things" :key="id" :thing="thing"></app-items>
        </b-card-group>
    </div>
</template>
<script>
import Items from './Items'
export default {
    data(){
        return{
            things: [
                {name: 'Clothing Factory', cost: 10000, upgrade:0,revenue:100},
                {name: 'Sporting Goods Factory', cost: 10000, upgrade:0,revenue:100},
                {name: 'Electronic Goods Factory', cost: 10000, upgrade:0,revenue:100}
            ]
        }
    },
    components:{
        appItems: Items
    }
}
</script>script  
