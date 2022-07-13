<template>
  <v-card flat>
    <v-container class="container" fluid>
      <h1 class="text-center pt-7">Length</h1>
      <v-row class="row d-flex justify-center py-7" cols="2">
        <v-col cols="3">
          <v-text-field class="text-center" :messages="`${valueOut} ${exponent}`" :value="probaN" label="Result"></v-text-field>
          <!-- {{probaV}} {{inputNum}} -->
        </v-col>
      </v-row>
      <v-row
        align="center"
      >
        <v-col>
          <v-text-field outlined label="Input" v-model="inputNum"></v-text-field>
        </v-col>
        <v-col>
          <v-autocomplete
            v-model="valueIn"
            :items="itemsIn"
            dense
            filled
            label="Filled"
          ></v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            v-model="valueOut"
            :items="itemsOut"
            dense
            filled
            label="To"
          ></v-autocomplete>
        </v-col>
        <v-col cols="1">
          <v-text-field outlined label="Exponent" v-model="inputPow"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <add-components-btn class="mt-5"></add-components-btn>
  </v-card>
</template>


<script>
import AddComponentsBtn from './AddComponents/AddComponentsBtn.vue';

export default {
  components: {
  AddComponentsBtn,
  },
  data() {
    return {
      inputNum: '',
      itemsIn: ['milimeter(mm)', 'centimeter(cm)', 'decimeter(dm)', 'meter(m)', 'kilometer(km)', 'inch(in)', 'feet(ft)', 'yard(yd)', 'mile(mi)'],
      valuesIn: ['foo', 'bar'],
      valueIn: '',
      itemsOut: ['milimeter(mm)', 'centimeter(cm)', 'decimeter(dm)', 'meter(m)', 'kilometer(km)', 'inch(in)', 'feet(ft)', 'yard(yd)', 'mile(mi)'],
      valuesOut: ['foo', 'bar'],
      valueOut: '',
      inputPow: '',
      show: false,
    }
  },
  methods: {
    randomColor(){
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    },
    showF() {
      this.show = !this.show;
    }
  },
  computed: {
    exponent(){
      if (this.inputPow > 0) {
        return 'expo:' + ' ' + this.inputPow;
      }
      else {
        return '';
      }
    },
    probaV(){
      return this.value
    },
    probaN(){
      if (this.valueIn === 'milimeter(mm)' && this.valueOut === 'centimeter(cm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.1
      }
      else if (this.valueIn === 'milimeter(mm)' && this.valueOut === 'decimeter(dm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.01
      }
      else if (this.valueIn === 'milimeter(mm)' && this.valueOut === 'meter(m)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.001
      }
      else if (this.valueIn === 'milimeter(mm)' && this.valueOut === 'kilometer(km)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.000001
      }
      else if (this.valueIn === 'milimeter(mm)' && this.valueOut === 'inch(in)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.03937007874
      }
      else if (this.valueIn === 'milimeter(mm)' && this.valueOut === 'feet(ft)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0032808399
      }
      else if (this.valueIn === 'milimeter(mm)' && this.valueOut === 'yard(yd)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0010936133
      }
      else if (this.valueIn === 'milimeter(mm)' && this.valueOut === 'mile(mi)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.00000062137
      }
      else if (this.valueIn === 'centimeter(cm)' && this.valueOut === 'milimeter(mm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 10
      }
      else if (this.valueIn === 'centimeter(cm)' && this.valueOut === 'decimeter(dm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.1
      }
      else if (this.valueIn === 'centimeter(cm)' && this.valueOut === 'meter(m)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.01
      }
      else if (this.valueIn === 'centimeter(cm)' && this.valueOut === 'kilometer(km)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.00001
      }
      else if (this.valueIn === 'centimeter(cm)' && this.valueOut === 'inch(in)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.3937007874
      }
      else if (this.valueIn === 'centimeter(cm)' && this.valueOut === 'feet(ft)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.032808399
      }
      else if (this.valueIn === 'centimeter(cm)' && this.valueOut === 'yard(yd)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.010936133
      }
      else if (this.valueIn === 'centimeter(cm)' && this.valueOut === 'mile(mi)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0000062137
      }
      else if (this.valueIn === 'decimeter(dm)' && this.valueOut === 'milimeter(mm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 100
      }
      else if (this.valueIn === 'decimeter(dm)' && this.valueOut === 'centimeter(cm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 10
      }
      else if (this.valueIn === 'decimeter(dm)' && this.valueOut === 'meter(m)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.1
      }
      else if (this.valueIn === 'decimeter(dm)' && this.valueOut === 'kilometer(km)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0001
      }
      else if (this.valueIn === 'decimeter(dm)' && this.valueOut === 'inch(in)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 3.937007874
      }
      else if (this.valueIn === 'decimeter(dm)' && this.valueOut === 'feet(ft)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.3280839895
      }
      else if (this.valueIn === 'decimeter(dm)' && this.valueOut === 'yard(yd)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.1093613298
      }
      else if (this.valueIn === 'decimeter(dm)' && this.valueOut === 'mile(mi)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0000621371
      }
      else if (this.valueIn === 'meter(m)' && this.valueOut === 'milimeter(mm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 1000
      }
      else if (this.valueIn === 'meter(m)' && this.valueOut === 'centimeter(cm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 100
      }
      else if (this.valueIn === 'meter(m)' && this.valueOut === 'decimeter(dm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 10
      }
      else if (this.valueIn === 'meter(m)' && this.valueOut === 'kilometer(km)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.001
      }
      else if (this.valueIn === 'meter(m)' && this.valueOut === 'inch(in)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 39.37007874
      }
      else if (this.valueIn === 'meter(m)' && this.valueOut === 'feet(ft)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 3.280839895
      }
      else if (this.valueIn === 'meter(m)' && this.valueOut === 'yard(yd)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 1.0936132983
      }
      else if (this.valueIn === 'meter(m)' && this.valueOut === 'mile(mi)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0006213712
      }
      else if (this.valueIn === 'kilometer(km)' && this.valueOut === 'milimeter(mm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 1000000
      }
      else if (this.valueIn === 'kilometer(km)' && this.valueOut === 'centimeter(cm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 100000
      }
      else if (this.valueIn === 'kilometer(km)' && this.valueOut === 'decimeter(dm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 10000
      }
      else if (this.valueIn === 'kilometer(km)' && this.valueOut === 'meter(m)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 1000
      }
      else if (this.valueIn === 'kilometer(km)' && this.valueOut === 'inch(in)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 39370.07874
      }
      else if (this.valueIn === 'kilometer(km)' && this.valueOut === 'feet(ft)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 3280.839895
      }
      else if (this.valueIn === 'kilometer(km)' && this.valueOut === 'yard(yd)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 1093.6132983
      }
      else if (this.valueIn === 'kilometer(km)' && this.valueOut === 'mile(mi)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.6213711922
      }
      else if (this.valueIn === 'inch(in)' && this.valueOut === 'milimeter(mm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 25.4
      }
      else if (this.valueIn === 'inch(in)' && this.valueOut === 'centimeter(cm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 2.54
      }
      else if (this.valueIn === 'inch(in)' && this.valueOut === 'decimeter(dm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.254
      }
      else if (this.valueIn === 'inch(in)' && this.valueOut === 'meter(m)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0254
      }
      else if (this.valueIn === 'inch(in)' && this.valueOut === 'kilometer(km)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0000254
      }
      else if (this.valueIn === 'inch(in)' && this.valueOut === 'feet(ft)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0833333333
      }
      else if (this.valueIn === 'inch(in)' && this.valueOut === 'yard(yd)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0277777778
      }
      else if (this.valueIn === 'inch(in)' && this.valueOut === 'mile(mi)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0000157828
      }
      else if (this.valueIn === 'feet(ft)' && this.valueOut === 'milimeter(mm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 304.8
      }
      else if (this.valueIn === 'feet(ft)' && this.valueOut === 'centimeter(cm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 30.48
      }
      else if (this.valueIn === 'feet(ft)' && this.valueOut === 'decimeter(dm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 3.048
      }
      else if (this.valueIn === 'feet(ft)' && this.valueOut === 'meter(m)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.3048
      }
      else if (this.valueIn === 'feet(ft)' && this.valueOut === 'kilometer(km)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0003048
      }
      else if (this.valueIn === 'feet(ft)' && this.valueOut === 'inch(in)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 12
      }
      else if (this.valueIn === 'feet(ft)' && this.valueOut === 'yard(yd)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.3333333333
      }
      else if (this.valueIn === 'feet(ft)' && this.valueOut === 'mile(mi)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0001893939
      }
      else if (this.valueIn === 'yard(yd)' && this.valueOut === 'milimeter(mm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 914.4
      }
      else if (this.valueIn === 'yard(yd)' && this.valueOut === 'centimeter(cm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 91.44
      }
      else if (this.valueIn === 'yard(yd)' && this.valueOut === 'decimeter(dm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 9.144
      }
      else if (this.valueIn === 'yard(yd)' && this.valueOut === 'meter(m)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.9144
      }
      else if (this.valueIn === 'yard(yd)' && this.valueOut === 'kilometer(km)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0009144
      }
      else if (this.valueIn === 'yard(yd)' && this.valueOut === 'inch(in)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 36
      }
      else if (this.valueIn === 'yard(yd)' && this.valueOut === 'feet(ft)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 3
      }
      else if (this.valueIn === 'yard(yd)' && this.valueOut === 'mile(mi)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 0.0005681818
      }
      else if (this.valueIn === 'mile(mi)' && this.valueOut === 'milimeter(mm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 1609344
      }
      else if (this.valueIn === 'mile(mi)' && this.valueOut === 'centimeter(cm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 160934.4
      }
      else if (this.valueIn === 'mile(mi)' && this.valueOut === 'decimeter(dm)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 16093.44
      }
      else if (this.valueIn === 'mile(mi)' && this.valueOut === 'meter(m)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 1609.344
      }
      else if (this.valueIn === 'mile(mi)' && this.valueOut === 'kilometer(km)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 1.609344
      }
      else if (this.valueIn === 'mile(mi)' && this.valueOut === 'inch(in)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 63360
      }
      else if (this.valueIn === 'mile(mi)' && this.valueOut === 'feet(ft)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 5280
      }
      else if (this.valueIn === 'mile(mi)' && this.valueOut === 'yard(yd)') {
        return Math.pow(Number(this.inputNum), this.inputPow) * 1760
      }
      else {
        return ''
      }
    }
  }
}
</script>