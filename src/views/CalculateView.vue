
<template>
  <div class="container">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">攜帶藥物數量</li>
      </ol>
    </nav>
    <h1>設定攜帶藥物數量</h1><hr>
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
    <category></category>
  </div>
</template>

<script>
import Category from "../components/Category.vue";
export default {
  name: "CalculateView",
  props: {},
  beforeCreate() {
    if (this.$store.state.isConfigured == false) {
      alert("Data is not configured");
    }
  },
  data() {
    return {
      name: this.$store.state.initData[0],
      days: this.$store.state.initData[1],
      person: this.$store.state.initData[2],
      attitude: this.$store.state.initData[3],
    };
  },
  components: { Category },
  methods: {},
  beforeRouteLeave(to, from, next) {
    console.log(to);
    if (to.name !== "result") {
      const answer = window.confirm("確定離開此頁？當前資料將不會被保存！");
      if (answer) {
        this.$store.commit("clearData");
        next();
      } else {
        next(false);
      }
    } else {
      next(true);
    }
  },
};
</script>

<style>
</style>