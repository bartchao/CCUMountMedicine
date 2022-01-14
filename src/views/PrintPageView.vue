<template>
    <h4 style="font-weight: 600;">隊伍名稱：{{initData[0]}} ｜ 隊伍天數：{{initData[1]}}天 ｜ 隊伍人數：{{initData[2]}}人 ｜ 最高海拔高度：{{initData[3]}} M </h4>
    <div class="row">
        <div class="col-md-9">
            <table class="table table-bordered text-start table-sm">
            <thead class="text-center">
                <th width="15%">藥物名</th>
                <th width="25%">成分</th>
                <th width="50%">使用方式</th>
                <th width="10%">攜帶數量</th>
            </thead>
            <tbody>
                    <template v-for="item in data[0].item" v-bind:key="item.title">
                        <tr>
                            <td>{{item.title}}</td>
                            <td>{{item.subtitle}}</td>
                            <td>{{item.text}}</td>
                            <td>{{item.value}}</td>
                        </tr>
                    </template>
                    <template v-for="item in data[1].item" v-bind:key="item.title">
                        <tr>
                            <td>{{item.title}}</td>
                            <td>{{item.subtitle}}</td>
                            <td>{{item.text}}</td>
                            <td>{{item.value}}</td>
                        </tr>
                    </template>
            </tbody>
        </table>
        </div>
        <div class="col-md-3">
            <table class="table table-bordered text-start table-sm">
            <thead class="text-center">
                <th width="15%">器材名稱</th>
                <th width="10%">攜帶數量</th>
            </thead>
            <tbody>
                    <template v-for="item in data[2].item" v-bind:key="item.title">
                        <tr>
                            <td>{{item.title}}</td>
                            <td>{{item.value}}</td>
                        </tr>
                    </template>
            </tbody>
        </table>
        </div>
    </div>
    <button class="btn btn-primary " @click="print" id="printBtn">列印/匯出PDF</button>
</template>
<script>
export default{
    name: 'PrintPage',
    created(){
        console.log(this.data)
    },
    data(){
        return{
            data : this.$store.state.medicineData,
            initData : this.$store.state.initData

        }
    },
    methods:{
        print(){
            window.print();
        }
    }
}
</script>
<style>
body{
    margin-left: 50px;
    margin-right: 50px;

}
@media print {
    body{
        margin:0px;
        font-weight: bold;
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