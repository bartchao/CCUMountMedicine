import Vue from 'vue'
import Vuex, { createStore } from 'vuex'
const store = createStore({
    state: {
        isConfigured:false,
        initData:null,
        medicineData:null
    },
    mutations: {
      // 將state設定為參數
      configure(state,data){
        state.isConfigured = true
        state.initData = data
      },
      setMedicineData(state,data){
        state.medicineData = data
      }
    }

  })
export default store ;