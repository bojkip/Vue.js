<template>
  <div>
    <div v-for="n in niz" :key="n.id">
    <p>{{n.text}}</p>
      <input type="number" v-model="inputNum">
      <p>{{n.output}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      niz: [
        {
          id: 'm', text: 'M To Cm' , input: this.inputNum, output: this.inputNum
        }
      ],
      inputNum: '',
    }
  },
  computed: {
    outputNumM(num){
      num * 2
    }
  }
}
</script>