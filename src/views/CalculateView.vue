
<template>
  <div class="container">
    <div class="card">
        <h4 class="card-header">
            <b>隊伍資訊</b>
        </h4>
        <div class="card-body">
            <div class="row">
                <h6 class="card-text col-6">隊伍名稱 | {{name}}</h6>
                <h6 class="card-text col-6">隊伍天數 | {{days}}天</h6>
                <h6 class="card-text col-6">隊伍人數 | {{person}}人</h6>
                <h6 class="card-text col-6">最高海拔高度 | {{attitude}} M</h6>
            </div>

        </div>
    </div>
      <category></category>
    </div>
    



</template>

<script>
import Category from '../components/Category.vue'
export default {
    name:"CalculateView",
    props:{
    },
    beforeCreate(){
        if(this.$store.state.isConfigured == false){
            alert('Data is not configured')
        }
    },
    data(){
        return{
            name:this.$store.state.initData[0],
            days:this.$store.state.initData[1],
            person:this.$store.state.initData[2],
            attitude:this.$store.state.initData[3]
        }
    },
    components:{Category},
    methods:{
        
    }
    
}
</script>

<style>

</style>