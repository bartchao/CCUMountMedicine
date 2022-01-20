<template>
    <body>
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/calculate">攜帶藥物數量</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">結果</li>
      </ol>
    </nav>
    <h1 class="noprint">結果</h1><hr>
    <div class="card noprint" style="margin-bottom:20px">
      <h4 class="card-header">
        <b>隊伍資訊</b>
      </h4>
      <div class="card-body">
        <div class="row">
          <h5 class="card-text col-md-3">隊伍名稱 | {{initData[0]}}</h5>
          <h5 class="card-text col-md-3">隊伍天數 | {{initData[1]}}天</h5>
          <h5 class="card-text col-md-3">隊伍人數 | {{initData[2]}}人</h5>
          <h5 class="card-text col-md-3">最高海拔高度 | {{initData[3]}} M</h5>
        </div>
      </div>
    </div>
    <h5 class="print" style="font-weight: 600;">隊伍名稱：{{initData[0]}} ｜ 隊伍天數：{{initData[1]}}天 ｜ 隊伍人數：{{initData[2]}}人 ｜ 最高海拔高度：{{initData[3]}} M </h5>
    <div class="row">
        <div class="col-md-10">
            <table class="table table-bordered text-start table-sm">
            <thead class="text-center">
                <th width="15%">藥物名</th>
                <th width="25%">成分</th>
                <th width="55%">使用方式</th>
                <th width="5%">數量</th>
            </thead>
            <tbody>
                    <template v-for="element in leftdata" v-bind:key="element.category">
                        <template v-for="a in element.item" v-bind:key="a.title">
                        <tr>
                            <td>{{a.title}}</td>
                            <td style="font-size:12px">{{a.subtitle}}</td>
                            <td>{{a.text}}</td>
                            <td>{{a.value}}</td>
                        </tr>
                        </template>
                    </template>
                    
                   
            </tbody>
        </table>
        </div>
        <div class="col-md-2">
            <table class="table table-bordered text-start table-sm">
            <thead class="text-center">
                <th width="60%">器材名稱</th>
                <th width="40%">數量</th>
            </thead>
            <tbody>
                    
                        <template v-for="item in rightdata.item" v-bind:key="item.title">
                        <tr>
                            <td>{{item.title}}</td>
                            <td>{{item.value}}</td>
                        </tr>
                        </template>
                    
            </tbody>
        </table>
        </div>
        <div class="text-end">
            <p>資料產生時間：{{new Date().toLocaleString()}}</p>
        </div>
    </div>
    <button class="btn btn-primary " @click="print" id="printBtn">列印/匯出PDF</button>
    </body>
</template>
<script>
export default{
    name: 'PrintPage',
    created(){
        this.leftdata = this.data.slice(0,this.data.length-1)
        this.rightdata = this.data[this.data.length-1]
    },
    data(){
        return{
            data : this.$store.state.medicineData,
            initData : this.$store.state.initData,
            leftdata:null,
            rightdata:null
        }
    },
    methods:{
        print(){
            window.print();
        },
        
    }
}
</script>
<style scoped>
body{
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 50PX;
    font-family: 'Noto Sans TC', sans-serif;
}
.print{
    display: none;
}
@media print {
    body{
        margin:0px;
        font-weight: bold;
    }
    nav{
        display: none;
    }
    .noprint{
        display:none;
    }
    .print{
        display: inline;
        margin-bottom: 20px;
    }
    .container{
        padding:0px;
    }
	#printBtn{
        display: none;
    }
	@page {
        margin:0.5cm;
		size: A4 landscape;
	}
}
</style>