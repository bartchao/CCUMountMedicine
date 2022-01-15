<template>
<template v-for="cat in data" v-bind:key="cat.category">
        <h3 style="padding:20px"><b>{{ cat.category}}</b></h3>
        <div class="row gx-4 gy-2" >
            <Card v-for="item in cat.item" :key="item.title" :title="item.title" :text="item.text" :subtitle="item.subtitle" :defaultValue="item.defaultValue" :count="item.value" :formula="item.count" @update="updateValue"/> 
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
        if(!this.data){
            alert(`hello`)
            this.data = []
            let initData = MedicineData.medicine
            for(let i = 0;i<initData.length;i++){
                if(initData[i].attitude<=this.attitude){
                    let items = initData[i].item
                    items.forEach(item =>{
                        item.value = this.calc(item.count)
                        item.defaultValue = this.calc(item.count)
                    })
                    this.data.push(initData[i])
                }
            }
            console.log(this.data)
        }
        
    },
    data(){
        return{
            data:this.$store.state.medicineData,
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
            let high = this.attitude>=2500 ? 1:0
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
            console.log(`submit`)
            console.log(this.data)
            this.$store.commit('setMedicineData',this.data)
            this.$router.push({
                path:'/result'
            })
        },
    }
}
</script>

<style>

</style>