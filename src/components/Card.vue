<template>
  <div class="col-md-3">
    <div class="card">
      <div class="card-body text-start">
        <h5 class="card-title" id="title">{{title}}</h5>
        <p class="card-subtitle" id="name">{{subtitle}}</p>
        <p class="card-text" id="info">{{text}}</p>
        <div class="input-group my-1 justify-content-end" id="inputGroup">
            <button class="btn btn-outline-secondary inputGroup" type="button" id="button-minus" @click="minus()">-</button>
            <input type="text" class="form-control text-center inputGroup" id="countInput" placeholder="" :value="dcount"  aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary inputGroup" type="button" id="button-plus" @click="plus()">+</button>       
            <button type="button" class="btn btn-warning btn-outline-secondary inputGroup " id="resetBtn" @click="reset()">重設</button>
        </div>
      </div>
    </div>
</div>
  
</template>



<script>


export default {
    name:'Card',
    props:{
        title:String,
        subtitle:String,
        text:String,
        formula:String,
        count:Number
    },
    data(){
        return{
            dcount:this.count
        }
    },
    //components:{VueNumberInput},
    methods:{
        reset(){
            this.dcount = this.count
        },
        minus(){
            if(this.dcount>0){
                this.dcount--;
            }
        },
        plus(){
            this.dcount++;
        }
    },
    watch:{
        dcount:{
            handler(val){
                let returnValue = {title:this.title,value:val}
                
                this.$emit('update',returnValue);
            }
        }
    }

    
    
}
</script>

<style>
#countInput{
    max-width: 50px;
}
.inputGroup{
    max-height: 50px;
}

</style>