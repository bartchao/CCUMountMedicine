<template>
  <h3 style="padding: 20px">
    <b>{{ data.category }}</b>
  </h3>
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
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "Category",
  data() {
    return {
      data: this.categoryData,
      name: this.$store.state.initData[0],
      days: this.$store.state.initData[1],
      person: this.$store.state.initData[2],
      attitude: this.$store.state.initData[3],
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
  },
};
</script>

<style>
</style>