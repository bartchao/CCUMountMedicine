<template>
    <div class="card">
      <h4 class="card-header">
        <b>隊伍資訊</b>
      </h4>
      <div class="card-body">
        <div class="row">
          <h5 class="card-text col-md-3">隊伍名稱 | {{ name }}</h5>
          <h5 class="card-text col-md-3">隊伍天數 | {{ days }}天</h5>
          <h5 class="card-text col-md-3">隊伍人數 | {{ person }}人</h5>
          <h5 class="card-text col-md-3">最高海拔高度 | {{ attitude }} M</h5>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"TeamInfo",
    props:{
    },
    data(){
        return{
            name:this.$store.state.initData[0],
            days:this.$store.state.initData[1],
            person:this.$store.state.initData[2],
            attitude:this.$store.state.initData[3]
        }
    }
}
</script>