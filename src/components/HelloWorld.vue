<template>
  <v-container>
    <h1>Naslov</h1>
    <v-row>
      <v-col>
        <v-text-field
          label="Main input" clearable 
        ></v-text-field>
    </v-col>
    <v-col>
      <v-text-field label="Another input" ></v-text-field>
    </v-col>
    </v-row>
    <v-row>
      <v-col>
      <v-text-field label="Aanother input" clearable></v-text-field>
    </v-col>
    <v-col>
      <v-text-field label="Aannother input" clearable></v-text-field>
    </v-col>
    </v-row>  
  </v-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    lengthConverter(source,valNum) {
      valNum = parseFloat(valNum);
      inputFeet = document.getElementById("inputFeet");
      inputMeters = document.getElementById("inputMeters");
      inputInches = document.getElementById("inputInches");
      inputcm = document.getElementById("inputcm");
      inputYards = document.getElementById("inputYards");
      inputKilometers = document.getElementById("inputKilometers");
      inputMiles = document.getElementById("inputMiles");
      if (source=="inputFeet") {
        inputMeters.value=(valNum/3.2808).toFixed(2);
        inputInches.value=(valNum*12).toFixed(2);
        inputcm.value=(valNum/0.032808).toFixed();
        inputYards.value=(valNum*0.33333).toFixed(2);
        inputKilometers.value=(valNum/3280.8).toFixed(5);    
        inputMiles.value=(valNum*0.00018939).toFixed(5);
      }
      if (source=="inputMeters") {
        inputFeet.value=(valNum*3.2808).toFixed(2);
        inputInches.value=(valNum*39.370).toFixed(2);
        inputcm.value=(valNum/0.01).toFixed();
        inputYards.value=(valNum*1.0936).toFixed(2);
        inputKilometers.value=(valNum/1000).toFixed(5);    
        inputMiles.value=(valNum*0.00062137).toFixed(5);
      }
    },
  },
}
</script>