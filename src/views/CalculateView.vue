
<template>
  <div class="container">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">攜帶藥物數量</li>
      </ol>
    </nav>
    <h1>設定攜帶藥物數量</h1>
    <hr />
    <team-info></team-info>
    <div class="row">
    <category v-for="item in data" :key="item.category" :categoryData="item" @update="updateCategory"></category>
    </div>
    <div class="py-5">
      <button class="w-50 btn btn-success" @click.prevent="submit" id="submit">
        送出
      </button>
    </div>
  </div>
</template>

<script>
import Category from "../components/Category.vue";
import TeamInfo from "../components/TeamInfo.vue";
import MedicineData from "../common/medicine.json";

export default {
  name: "CalculateView",
  props: {},
  beforeCreate() {
    if (this.$store.state.isConfigured == false) {
      alert("Data is not configured");
    }
  },
  created() {
    if (!this.data) {
      this.data = [];
      let initData = MedicineData.medicine;
      for (let i = 0; i < initData.length; i++) {
        if (initData[i].attitude <= this.attitude) {
          let items = initData[i].item;
          items.forEach((item) => {
            item.value = this.calc(item.count);
            item.defaultValue = this.calc(item.count);
          });
          this.data.push(initData[i]);
        }
      }
      console.log(this.data);
    }
  },
  data() {
    return {
      data: this.$store.state.medicineData,
      name: this.$store.state.initData[0],
      days: this.$store.state.initData[1],
      person: this.$store.state.initData[2],
      attitude: this.$store.state.initData[3],
    };
  },
  components: { Category, TeamInfo },
  methods: {
    submit() {
      console.log(`submit`);
      console.log(this.data);
      this.$store.commit("setMedicineData", this.data);
      this.$router.push({
        path: "/result",
      });
    },
    calc: function (formula) {
      let person = parseInt(this.person);
      let days = parseInt(this.days);
      return eval(formula);
    },
    updateCategory(val){
        let categoryName = val.category
        let categoryData = this.data.find((element) => element.category === categoryName)
        if(categoryData){
            categoryData = val
        }
    }
  },
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