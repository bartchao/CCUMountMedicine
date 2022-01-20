<template>
  <div class="py-3 col-md-6">
    <div class="card ">
      <h5 class="card-header" @click="changeShow">
        <i v-if="show" class="bi bi-caret-up-fill"></i>
        <i v-if="!show" class="bi bi-caret-down-fill"></i
        ><b>{{ data.category }}</b>
      </h5>
      <div class="card-body" v-show="show">
        <div class="row gx-4 gy-2">
          <Card
            v-for="item in data.item"
            :key="item.title"
            :title="item.title"
            :text="item.text"
            :subtitle="item.subtitle"
            :defaultValue="item.defaultValue"
            :count="item.value"
            :formula="item.count"
            @update="updateValue"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "Category",
  data() {
    return {
      data: this.categoryData,
      show: true,
    };
  },
  props: {
    categoryData: Object,
  },
  components: { Card },
  methods: {
    updateValue(val) {
      console.log(typeof this.data);
      let element = this.data.item.find(
        (element) => element.title === val.title
      );
      if (element) {
        element.value = val.value;
        this.$emit("update", this.data);
      } else {
        console.log(`error`);
      }
    },
    changeShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
</style>