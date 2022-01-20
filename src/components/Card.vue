<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-body text-start">
        <h5 class="card-title" id="title">{{ title }}</h5>
        <p class="card-subtitle" id="name">{{ subtitle }}</p>
        <p class="card-text" id="info">{{ text }}</p>
        <div class="input-group my-1 justify-content-end" id="inputGroup">
          <button
            type="button"
            class="btn btn-outline-secondary inputGroup btn-warning"
            id="resetBtn"
            @click="reset"
            :class="{ modified: modified }"
          >
            重設
          </button>
          <button
            class="btn btn-outline-secondary inputGroup"
            type="button"
            id="button-minus"
            @click="minus()"
          >
            -
          </button>
          <input
            type="number"
            class="form-control text-center inputGroup btn-outline-secondary"
            id="countInput"
            placeholder=""
            v-model="dcount"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary inputGroup"
            type="button"
            id="button-plus"
            @click="plus()"
          >
            +
          </button>
          <VDropdown :triggers="['hover', 'focus']">
            <div class="inputGroup">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                style="margin: 13px"
                fill="currentColor"
                class="bi bi-info-circle"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                />
              </svg>
            </div>

            <template #popper>
              參考公式：{{ replaceFormula(formula) }}
            </template>
          </VDropdown>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import "v-tooltip/dist/v-tooltip.css";
export default {
  name: "Card",
  props: {
    title: String,
    subtitle: String,
    text: String,
    defaultValue: Number,
    count: Number,
    formula: String,
  },
  created() {
    this.modified = this.count == this.defaultValue;
  },
  data() {
    return {
      dcount: this.count,
      modified: false,
    };
  },
  //components:{VueNumberInput},
  methods: {
    reset() {
      this.dcount = this.defaultValue;
    },
    minus() {
      if (this.dcount > 0) {
        this.dcount--;
      }
    },
    plus() {
      this.dcount++;
    },
    replaceFormula(input) {
      let output;
      output = input.replace("days", "天數").replace("person", "人數");
      return output;
    },
  },
  watch: {
    dcount: {
      handler(val) {
        if (val >= 0) {
          this.modified = val == this.defaultValue;
          let returnValue = { title: this.title, value: val };
          this.$emit("update", returnValue);
        }else{
            this.dcount = 0
        }
      },
    },
  },
};
</script>

<style scoped>
#countInput {
  max-width: 70px;
}
.inputGroup {
  max-height: 50px;
}
.modified {
  display: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>