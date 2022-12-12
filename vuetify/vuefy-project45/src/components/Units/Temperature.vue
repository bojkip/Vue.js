<template>
<v-card class="px-5" flat >
    <v-container>
        <h1 class="text-center py-10">Temperature</h1>
        <v-row
            align="center"
            justify="center"
            class="pt-10">
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined label="Your Number" hint="Number only" placeholder="120" v-model="inputNum" :value="convertTemp" type="number"></v-text-field>
            </v-col>
            <v-col
            xl="4" lg="4" sm="4">
            <v-text-field outlined label="Your Exponent" placeholder="2" hint="If your number has no exponent, skip this field" v-model="userPow" type="number">
            </v-text-field>
            </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
                <v-col xl="5" lg="5" sm="5">
                <v-autocomplete
                    v-model="valueIn"
                    :items="itemsIn"
                
                    filled
                    label="Your Unit"
                    placeholder="Centimeter or cm"
                ></v-autocomplete>
                </v-col>
        </v-row>
        </v-container>
        <v-container>
                <v-row
            align="center"
            justify="center"
        >
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="celsiusResult" :value="convertTemp" label="Celsius(C)"></v-text-field>
            </v-col>
            <v-col
            xl="4" lg="4" sm="4"
            >
            <v-text-field outlined v-model="fahrenheitResult" :value="convertTemp" label="Fahrenheit(F) "></v-text-field>
            </v-col>
            </v-row>
            <v-row justify="center">
            <v-col xl="4" lg="4" sm="4" class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex" >
            <v-text-field outlined v-model="kelvinResult" :value="convertTemp" label="Kelvin(K)"></v-text-field>
            </v-col>
            <v-col cols="5" class="d-flex d-sm-none">
            <v-text-field outlined v-model="kelvinResult" :value="convertTemp" label="Kelvin(K)"></v-text-field>
            </v-col>
        </v-row>
    </v-container>
</v-card>
</template>




<script>

export default {
    data() {
        return {
        inputNum: '' ,
        itemsIn: [ 'Celsius(C)', 'Fahrenheit(F)', 'Kelvin(K)'],
        valueIn: '',
        userPow: '',
        removeComponent: true,
        addComponent: true,
        celsiusResult: '',
        fahrenheitResult: '',
        kelvinResult: '',
        }
    },
    computed: {
        convertTemp(){
            if (this.inputNum === ''){
                this.fahrenheitResult = '' ;
                this.kelvinResult = '' ;
                this.celsiusResult = '' ;
            }

            else if (this.valueIn === 'Celsius(C)') {
                if (this.userPow != ''){
                    this.fahrenheitResult = Math.pow(parseFloat(this.inputNum), this.userPow)*9/5+32
                    this.kelvinResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 274.15;
                    this.celsiusResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    
                }
                else {
                    this.fahrenheitResult = parseFloat(this.inputNum) * 9/5 + 32;
                    this.kelvinResult = parseFloat(this.inputNum) * 274.15;
                    this.celsiusResult = parseFloat(this.inputNum);
                }
            }
            else if (this.valueIn === 'Fahrenheit(F)') {
                if (this.userPow != ''){
                    this.fahrenheitResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.kelvinResult = (parseFloat(Math.pow(this.inputNum, this.userPow)) + 459.67) * 5/9;
                    this.celsiusResult = (parseFloat(Math.pow(this.inputNum, this.userPow)) - 32) * 5/9;
                    
                }
                else {
                    this.fahrenheitResult = parseFloat(this.inputNum);
                    this.kelvinResult = (parseFloat(this.inputNum) + 459.67) * 5/9;
                    this.celsiusResult = (parseFloat(this.inputNum) - 32) * 5/9;
                }
            }
            else if (this.valueIn === 'Kelvin(K)') {
                if (this.userPow != ''){
                    this.fahrenheitResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 9/5 - 459.67;
                    this.kelvinResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.celsiusResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * (-272.15);
                    
                }
                else {
                    this.fahrenheitResult = parseFloat(this.inputNum) * 9/5 - 459.67;
                    this.kelvinResult = parseFloat(this.inputNum);
                    this.celsiusResult = parseFloat(this.inputNum) * (-272.15);
                }
            }
            else{
                this.fahrenheitResult = '' ;
                this.kelvinResult = '' ;
                this.celsiusResult = '' ;
            }
        }
    }
}

</script>


