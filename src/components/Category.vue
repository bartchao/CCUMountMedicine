<template>
<template v-for="cat in data" v-bind:key="cat.category">
        <h3 style="padding:20px"><b>{{ cat.category}}</b></h3>
        <div class="row gx-4 gy-2" >
            <Card v-for="item in cat.item" :key="item.title" :title="item.title" :text="item.text" :subtitle="item.subtitle"  :count="item.value" @update="updateValue"/> 
        </div>
</template>
    <div class="py-5">  
        <button class="w-50 btn btn-primary" @click.prevent="submit" id="submit">送出</button>        
    </div>
</template>
<script>
import Card from './Card.vue';
import MedicineData from '../common/medicine.json'
export default {
    name:"Category",
    props:{
    },
    created(){
        this.data.forEach(element => {
            let items = element.item
            items.forEach(item =>{
                item.value = this.calc(item.count)
            })
        });
    },
    data(){
        return{
            data:MedicineData.medicine,
            name:this.$store.state.initData[0],
            days:this.$store.state.initData[1],
            person:this.$store.state.initData[2],
            attitude:this.$store.state.initData[3]
        }
    },
    components:{Card},
    methods:{
        calc:function(formula){
            let person = parseInt(this.person)
            let days = parseInt(this.days)
            return eval(formula)
        },
        updateValue(val){
            let complete = false
             this.data.forEach(element =>
             {
                 if(complete == false){
                    let id = element.item.findIndex(d => d.title === val.title)
                    //found data
                    if(id>=0){
                        element.item[id].value = val.value;
                        complete = true
                    }
                 }
                
                
            }) 
            if(complete==false){
                console.log(`Can not found data`)
            }
        },
        submit(){
            this.$store.commit('setMedicineData',this.data)
            this.$router.push({
                name:'result'
            })
        }
    }
}
</script>

<style>

</style>