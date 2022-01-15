<template>
  <body class="text-center">
    <main class="form-signin">
      <form @submit="log">
        <img
          src="../../public/ccumount_logo.png"
          class="img-fluid"
          alt="Responsive image"
        />
        <h1 class="h3 mb-3 fw-normal">嵐星登山社 醫藥產生器</h1>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="teamNameInput"
            placeholder="隊伍名稱"
            v-model="teamName"
            required
          />
          <label for="teamNameInput">隊伍名稱</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            id="teamDaysInput"
            placeholder=""
            v-model="teamDays"
            min="1"
            required
          />
          <label for="teamDaysInput">隊伍天數</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            id="teamPerson"
            placeholder="隊伍人數"
            v-model="teamPerson"
            min="1"
            step="1"
            required
          />
          <label for="teamPerson">隊伍人數</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            id="attitude"
            placeholder="最高高度"
            v-model="attitude"
            step="500"
            min="0"
            required
          />
          <label for="attitude">最高高度</label>
        </div>

        <div class="form-submit">
          <input
            type="submit"
            class="w-100 btn btn-lg btn-primary"
            value="Next"
          />
        </div>
      </form>
      <div class="card mt-5 mb-3">
        <h4 class="card-header">
          <b>小提醒</b>
        </h4>
        <div class="card-body">
          <p>
            本服務僅提供參考，不保證建議的量就能讓你通過山防組審核，記得小心使用！
          </p>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
export default {
  name: "StartPage",
  props: {
    msg: String,
  },
  created() {
    this.$store.commit("clearData");
  },
  data() {
    return {
      teamName: this.$store.state.initData ? this.$store.state.initData[0]:null,
      teamDays: this.$store.state.initData ? this.$store.state.initData[1]:2,
      teamPerson: this.$store.state.initData ?this.$store.state.initData[2]:8,
      attitude: this.$store.state.initData ? this.$store.state.initData[3]:2500,
    };
  },
  methods: {
    log() {
      let value = [
        this.teamName,
        this.teamDays,
        this.teamPerson,
        this.attitude,
      ];
      this.$store.commit("configure", value);
      this.$router.push({
        name: "calculate",
      });
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-submit {
  padding-top: 20px;
}
</style>