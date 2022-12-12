<template>
    <v-card class="px-5" flat >
        <v-container class="container" fluid>
        <h1 class="text-center py-10">Luminance</h1>
        <v-row
            align="center"
            justify="center"
            class="pt-10"
            
        >
            <v-col xl="4" lg="4" sm="4">
            <v-text-field  filled label="Your Number" hint="Number only" placeholder="120" v-model="inputNum" :value="convertArea" type="number"></v-text-field>
            </v-col>
            <v-col
            xl="4" lg="4" sm="4"
            >
            <v-autocomplete
                    v-model="valueIn"
                    :items="itemsIn"
                
                    filled
                    label="Your Unit"
                    placeholder="Joule(J)"
                ></v-autocomplete>
            </v-col>
            </v-row>
        </v-container>
        <v-container class="pt-4" fluid>
            <v-row
            align="center"
            justify="center"
        >
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="candelaM" :value="convertArea" label="Candela/Square meter [cd/m²]"></v-text-field>
            </v-col>
            <v-col
            xl="4" lg="4" sm="4"
            >
            <v-text-field outlined v-model="candelaC" :value="convertArea" label="Candela/Square cm [cd/cm²]"></v-text-field>
            </v-col>
            </v-row>
            <v-row justify="center">
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="candelaF" :value="convertArea" label="Candela/ Square feet [cd/ft²]"></v-text-field>
            </v-col>
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="candelaI" :value="convertArea" label="Candela/ Square inch[cd/in²]"></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="kiloCandelaM" :value="convertArea" label="Kilocandela[kcd/m²]"></v-text-field>
            </v-col>
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="stlib" :value="convertArea" label="Stlib[sb]"></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="lumenM" :value="convertArea" label="Lumen/Square meter/Steradian [lm/m²·sr]"></v-text-field>
            </v-col>
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="lumenC" :value="convertArea" label="Lumen/Square cm/Steradian [lm/cm²·sr]"></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="lumenF" :value="convertArea" label="Lumen/Square feet/Steradian [lm/ft²·sr]"></v-text-field>
            </v-col>
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="wattC" :value="convertArea" label="Watt/Square cm/Steradian [W/cm²·sr] (at 555 nm)"></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="nit" :value="convertArea" label="Nit [nt]"></v-text-field>
            </v-col>
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="millinit" :value="convertArea" label="Millinit [mnt]"></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="lambert" :value="convertArea" label="Lambert [L]"></v-text-field>
            </v-col>
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="millilambert" :value="convertArea" label="Millilambert  [mL]"></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="lambertF" :value="convertArea" label="Feet-lambert [fL]"></v-text-field>
            </v-col>
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="apostilb" :value="convertArea" label="Apostilb [asb]', 'Blondel"></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
        <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="bril" :value="convertArea" label="Bril"></v-text-field>
            </v-col>
            <v-col xl="4" lg="4" sm="4">
            <v-text-field outlined v-model="skot" :value="convertArea" label="Skot"></v-text-field>
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
            itemsIn: ['Candela/Square meter [cd/m²]', 'Candela/Square cm [cd/cm²]', 'Candela/ Square feet [cd/ft²]', 'Candela/ Square inch[cd/in²]' ,'Kilocandela/Square meter [kcd/m²]', 'Stlib[sb]', 'Lumen/Square meter/Steradian [lm/m²·sr]', 'Lumen/Square cm/Steradian [lm/cm²·sr]', 'Lumen/Square feet/Steradian [lm/ft²·sr]', 'Watt/Square cm/Steradian [W/cm²·sr] (at 555 nm)', 'Nit [nt]', 'Millinit [mnt]', 'Lambert [L]', 'Millilambert  [mL]', 'Feet-lambert [fL]', 'Apostilb [asb]', 'Blondel  ', 'Bril', 'Skot'],
            valueIn: '',
            userPow: '',
            removeComponent: true,
            addComponent: true,
            candelaM: '',
            candelaC: '',
            candelaF: '',
            candelaI: '',
            kiloCandelaM: '',
            stlib: '',
            lumenM: '',
            lumenC: '',
            lumenF: '',
            lumenM: '',
            wattC: '',
            nit: '',
            millinit: '',
            lambert: '',
            millilambert: '',
            lambertF: '',
            apostilb: '',
            bril: '',
            blondel: '',
            skot: '',
            }
        },
        computed: {
            convertArea(){
                if (this.inputNum === ''){
                    this.candelaM = '';
                    this.candelaC =  '';
                    this.candelaF =  '';
                    this.candelaI =  '';
                    this.kiloCandelaM = '';
                    this.slib = '';
                    this.stlib = '';
                    this.lumenM = '';
                    this.lumenC = '';
                    this.lumenF = '';
                    this.wattC =  '';
                    this.nit =  '';
                    this.millinit = '';
                    this.lambert = '';
                    this.millilambert = '';
                    this.lambertF = '';
                    this.apostilb = '';
                    this.bril = '';
                    this.blondel = '',
                    this.skot = '';
                }
    
                else if (this.valueIn === this.itemsIn[0]) {
                    
                    this.candelaM = this.inputNum;
                    this.candelaC = this.inputNum * 0.0001;
                    this.candelaF = this.inputNum* 0.09290304;
                    this.candelaI = this.inputNum * 0.00064516;
                    this.kiloCandelaM = this.inputNum * 0.001;
                    this.stlib = this.inputNum * 0.0001;
                    this.lumenM = this.inputNum * 1;
                    this.lumenC = this.inputNum * 0.0001;
                    this.lumenF = this.inputNum * 0.09290304 ;
                    this.wattC = this.inputNum * 1.464128843 *10^(-7);
                    this.nit = this.inputNum * 1;
                    this.millinit = this.inputNum * 1000;
                    this.lambert = this.inputNum * 0.0003141593;
                    this.millilambert = this.inputNum * 0.3141592654;
                    this.lambertF = this.inputNum * 0.291863508;
                    this.apostilb = this.inputNum * 3.1415926536 ;
                    this.blondel = this.inputNum * 3.1415926536;
                    this.bril = this.inputNum * 31415926.536;
                    this.skot = this.inputNum * 3141.5926536;
                }
            else if (this.valueIn === 'Square Centimeter(cm2)') {
                    if (this.userPow != ''){
                    this.SquareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000000001;
                    this.SquareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
                    this.SquareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow))* 0.01;
                    this.SquareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.SquareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                    this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000001;
                    this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000024711;
                    this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
                    this.SquareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 25899881103;
                    this.SquareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00011959900463;
                    this.SquareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.001076391042;
                    this.SquareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.15500031;
                }
                else{
                    this.SquareKilometerResult = parseFloat(this.inputNum) * 0.0000000001;
                    this.SquareMeterResult = parseFloat(this.inputNum) * 0.0001;
                    this.SquareDecimeterResult = parseFloat(this.inputNum)* 0.01;
                    this.SquareCentimeterResult = parseFloat(this.inputNum);
                    this.SquareMilimeterResult = parseFloat(this.inputNum) * 100;
                    this.hectareResult = parseFloat(this.inputNum) * 0.00000001;
                    this.acreResult = parseFloat(this.inputNum) * 0.000000024711;
                    this.areResult = parseFloat(this.inputNum) * 0.000001;
                    this.SquareMileResult = parseFloat(this.inputNum) / 25899881103;
                    this.SquareYardResult = parseFloat(this.inputNum) * 0.00011959900463;
                    this.SquareFeetResult = parseFloat(this.inputNum) * 0.001076391042;
                    this.SquareInchResult = parseFloat(this.inputNum) * 0.15500031;
                }
            }
    
            else if (this.valueIn === 'Square Decimeter(dm2)') {
                    if (this.userPow != ''){
                    this.SquareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000001;
                    this.SquareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                    this.SquareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.SquareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                    this.SquareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
                    this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
                    this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000024711;
                    this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
                    this.SquareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 258998811.03;
                    this.SquareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.011959900463;
                    this.SquareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.1076391042;
                    this.SquareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 15.500031;
                }
                else{
                    this.SquareKilometerResult = parseFloat(this.inputNum) * 0.00000001;
                    this.SquareMeterResult = parseFloat(this.inputNum) * 0.01;
                    this.SquareDecimeterResult = parseFloat(this.inputNum);
                    this.SquareCentimeterResult = parseFloat(this.inputNum) * 100;
                    this.SquareMilimeterResult = parseFloat(this.inputNum) * 10000;
                    this.hectareResult = parseFloat(this.inputNum) * 0.000001;
                    this.acreResult = parseFloat(this.inputNum) * 0.0000024711;
                    this.areResult = parseFloat(this.inputNum) * 0.0001;
                    this.SquareMileResult = parseFloat(this.inputNum) / 258998811.03;
                    this.SquareYardResult = parseFloat(this.inputNum) * 0.011959900463;
                    this.SquareFeetResult = parseFloat(this.inputNum) * 0.1076391042;
                    this.SquareInchResult = parseFloat(this.inputNum) * 15.500031;
                }
            }
            else if (this.valueIn === 'Square Meter(m2)') {
                    if (this.userPow != ''){
                    this.SquareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000001;
                    this.SquareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.SquareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                    this.SquareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
                    this.SquareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                    this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
                    this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002471054;
                    this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                    this.SquareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 2589988.1103;
                    this.SquareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1.1959900463;
                    this.SquareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10.763910417;
                    this.SquareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1550.0031;
                }
                else{
                    this.SquareKilometerResult = parseFloat(this.inputNum) * 0.000001;
                    this.SquareMeterResult = parseFloat(this.inputNum);
                    this.SquareDecimeterResult = parseFloat(this.inputNum) * 100;
                    this.SquareCentimeterResult = parseFloat(this.inputNum) * 10000;
                    this.SquareMilimeterResult = parseFloat(this.inputNum) * 1000000;
                    this.hectareResult = parseFloat(this.inputNum) * 0.0001;
                    this.acreResult = parseFloat(this.inputNum) * 0.0002471054;
                    this.areResult = parseFloat(this.inputNum) * 0.01;
                    this.SquareMileResult = parseFloat(this.inputNum) / 2589988.1103;
                    this.SquareYardResult = parseFloat(this.inputNum) * 1.1959900463;
                    this.SquareFeetResult = parseFloat(this.inputNum) * 10.763910417;
                    this.SquareInchResult = parseFloat(this.inputNum) * 1550.0031;
                }
            }
            else if (this.valueIn === 'Hectar(ha)') {
                    if (this.userPow != ''){
                    this.SquareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                    this.SquareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
                    this.SquareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                    this.SquareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000000;
                    this.SquareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000000000;
                    this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2.4710538147;
                    this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                    this.SquareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0038610216;
                    this.SquareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 11959.900463;
                    this.SquareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 107639.10417;
                    this.SquareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 15500031;
                }
                else{
                    this.SquareKilometerResult = parseFloat(this.inputNum) * 0.01;
                    this.SquareMeterResult = parseFloat(this.inputNum) * 10000;
                    this.SquareDecimeterResult = parseFloat(this.inputNum) * 1000000;
                    this.SquareCentimeterResult = parseFloat(this.inputNum) * 100000000;
                    this.SquareMilimeterResult = parseFloat(this.inputNum) * 10000000000;
                    this.hectareResult = parseFloat(this.inputNum);
                    this.acreResult = parseFloat(this.inputNum) * 2.4710538147;
                    this.areResult = parseFloat(this.inputNum) * 100;
                    this.SquareMileResult = parseFloat(this.inputNum) * 0.0038610216;
                    this.SquareYardResult = parseFloat(this.inputNum) * 11959.900463;
                    this.SquareFeetResult = parseFloat(this.inputNum) * 107639.10417;
                    this.SquareInchResult = parseFloat(this.inputNum) * 15500031;
                }
            }
            else if (this.valueIn === 'Square Kilometer(km2)') {
                    if (this.userPow != ''){
                    this.SquareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.SquareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                    this.SquareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000000;
                    this.SquareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000000000;
                    this.SquareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000000000;
                    this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                    this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 247.10538147;
                    this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
                    this.SquareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.3861021585;
                    this.SquareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1195990.0463;
                    this.SquareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10763910.417;
                    this.SquareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1550003100;
                }
                else{
                    this.SquareKilometerResult = parseFloat(this.inputNum);
                    this.SquareMeterResult = parseFloat(this.inputNum) * 1000000;
                    this.SquareDecimeterResult = parseFloat(this.inputNum) * 100000000;
                    this.SquareCentimeterResult = parseFloat(this.inputNum) * 10000000000;
                    this.SquareMilimeterResult = parseFloat(this.inputNum) * 1000000000000;
                    this.hectareResult = parseFloat(this.inputNum) * 100;
                    this.acreResult = parseFloat(this.inputNum) * 247.10538147;
                    this.areResult = parseFloat(this.inputNum) * 10000;
                    this.SquareMileResult = parseFloat(this.inputNum) * 0.3861021585;
                    this.SquareYardResult = parseFloat(this.inputNum) * 1195990.0463;
                    this.SquareFeetResult = parseFloat(this.inputNum) * 10763910.417;
                    this.SquareInchResult = parseFloat(this.inputNum) * 1550003100;
                }
            }
            else if (this.valueIn === 'Acre(ac)') {
                    if (this.userPow != ''){
                    this.SquareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0040468564;
                    this.SquareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4046.8564224;
                    this.SquareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 404685.64224;
                    this.SquareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 40468564.224;
                    this.SquareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4046856422.4;
                    this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.4046856422;
                    this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 40.468564224;
                    this.SquareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0015625;
                    this.SquareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4840;
                    this.SquareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 43560;
                    this.SquareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 6272640;
                }
                else{
                    this.SquareKilometerResult = parseFloat(this.inputNum) * 0.0040468564;
                    this.SquareMeterResult = parseFloat(this.inputNum) * 4046.8564224;
                    this.SquareDecimeterResult = parseFloat(this.inputNum) * 404685.64224;
                    this.SquareCentimeterResult = parseFloat(this.inputNum) * 40468564.224;
                    this.SquareMilimeterResult = parseFloat(this.inputNum) * 4046856422.4;
                    this.hectareResult = parseFloat(this.inputNum) * 0.4046856422;
                    this.acreResult = parseFloat(this.inputNum);
                    this.areResult = parseFloat(this.inputNum) * 40.468564224;
                    this.SquareMileResult = parseFloat(this.inputNum) * 0.0015625;
                    this.SquareYardResult = parseFloat(this.inputNum) * 4840;
                    this.SquareFeetResult = parseFloat(this.inputNum) * 43560;
                    this.SquareInchResult = parseFloat(this.inputNum) * 6272640;
                }
            }
            else if (this.valueIn === 'Are(a)') {
                    if (this.userPow != ''){
                    this.SquareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0001;
                    this.SquareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100;
                    this.SquareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 10000;
                    this.SquareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1000000;
                    this.SquareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 100000000;
                    this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.01;
                    this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0247105381;
                    this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.SquareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000386102;
                    this.SquareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 119.59900463;
                    this.SquareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1076.3910417;
                    this.SquareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 155000.31;
                }
                else{
                    this.SquareKilometerResult = parseFloat(this.inputNum) * 0.0001;
                    this.SquareMeterResult = parseFloat(this.inputNum) * 100;
                    this.SquareDecimeterResult = parseFloat(this.inputNum) * 10000;
                    this.SquareCentimeterResult = parseFloat(this.inputNum) * 1000000;
                    this.SquareMilimeterResult = parseFloat(this.inputNum) * 100000000;
                    this.hectareResult = parseFloat(this.inputNum) * 0.01;
                    this.acreResult = parseFloat(this.inputNum) * 0.0247105381;
                    this.areResult = parseFloat(this.inputNum);
                    this.SquareMileResult = parseFloat(this.inputNum) * 0.0000386102;
                    this.SquareYardResult = parseFloat(this.inputNum) * 119.59900463;
                    this.SquareFeetResult = parseFloat(this.inputNum) * 1076.3910417;
                    this.SquareInchResult = parseFloat(this.inputNum) * 155000.31;
                }
            }
            else if (this.valueIn === 'Squere Inch(in2)') {
                    if (this.userPow != ''){
                    this.SquareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000000064516;
                    this.SquareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00064516;
                    this.SquareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.064516;
                    this.SquareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 6.4516;
                    this.SquareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 645.16;
                    this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.000000064516;
                    this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 6272640;
                    this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000064516;
                    this.SquareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 4014505658;
                    this.SquareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0007716049;
                    this.SquareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 144;
                    this.SquareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                }
                else{
                    this.SquareKilometerResult = parseFloat(this.inputNum) * 0.00000000064516;
                    this.SquareMeterResult = parseFloat(this.inputNum) * 0.00064516;
                    this.SquareDecimeterResult = parseFloat(this.inputNum) * 0.064516;
                    this.SquareCentimeterResult = parseFloat(this.inputNum) * 6.4516;
                    this.SquareMilimeterResult = parseFloat(this.inputNum) * 645.16;
                    this.hectareResult = parseFloat(this.inputNum) * 0.000000064516;
                    this.acreResult = parseFloat(this.inputNum) / 6272640;
                    this.areResult = parseFloat(this.inputNum) * 0.0000064516;
                    this.SquareMileResult = parseFloat(this.inputNum) / 4014505658;
                    this.SquareYardResult = parseFloat(this.inputNum) * 0.0007716049;
                    this.SquareFeetResult = parseFloat(this.inputNum) / 144;
                    this.SquareInchResult = parseFloat(this.inputNum);
                }
            }
            else if (this.valueIn === 'Square Feet(ft2)') {
                    if (this.userPow != ''){
                    this.SquareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.00000009290304;
                    this.SquareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.09290304;
                    this.SquareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 9.290304;
                    this.SquareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 929.0304;
                    this.SquareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 92903.04;
                    this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000092903;
                    this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000229568;
                    this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0009290304;
                    this.SquareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 27878511.514;
                    this.SquareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 9;
                    this.SquareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.SquareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 144;
                }
                else{
                    this.SquareKilometerResult = parseFloat(this.inputNum) * 0.00000009290304;
                    this.SquareMeterResult = parseFloat(this.inputNum) * 0.09290304;
                    this.SquareDecimeterResult = parseFloat(this.inputNum) * 9.290304;
                    this.SquareCentimeterResult = parseFloat(this.inputNum) * 929.0304;
                    this.SquareMilimeterResult = parseFloat(this.inputNum) * 92903.04;
                    this.hectareResult = parseFloat(this.inputNum) * 0.0000092903;
                    this.acreResult = parseFloat(this.inputNum) * 0.0000229568;
                    this.areResult = parseFloat(this.inputNum) * 0.0009290304;
                    this.SquareMileResult = parseFloat(this.inputNum) / 27878511.514;
                    this.SquareYardResult = parseFloat(this.inputNum) / 9;
                    this.SquareFeetResult = parseFloat(this.inputNum);
                    this.SquareInchResult = parseFloat(this.inputNum) * 144;
                }
            }
            else if (this.valueIn === 'Square Yard(yd2)') {
                    if (this.userPow != ''){
                    this.SquareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000008361273599;
                    this.SquareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.83612736;
                    this.SquareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 83.612736;
                    this.SquareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 8361.2736;
                    this.SquareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 836127.36;
                    this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0000836127;
                    this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0002066116;
                    this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 0.0083612736;
                    this.SquareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow)) / 3097600;
                    this.SquareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.SquareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 9;
                    this.SquareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 1296;
                }
                else{
                    this.SquareKilometerResult = parseFloat(this.inputNum) * 0.0000008361273599;
                    this.SquareMeterResult = parseFloat(this.inputNum) * 0.83612736;
                    this.SquareDecimeterResult = parseFloat(this.inputNum) * 83.612736;
                    this.SquareCentimeterResult = parseFloat(this.inputNum) * 8361.2736;
                    this.SquareMilimeterResult = parseFloat(this.inputNum) * 836127.36;
                    this.hectareResult = parseFloat(this.inputNum) * 0.0000836127;
                    this.acreResult = parseFloat(this.inputNum) * 0.0002066116;
                    this.areResult = parseFloat(this.inputNum) * 0.0083612736;
                    this.SquareMileResult = parseFloat(this.inputNum) / 3097600;
                    this.SquareYardResult = parseFloat(this.inputNum);
                    this.SquareFeetResult = parseFloat(this.inputNum) * 9;
                    this.SquareInchResult = parseFloat(this.inputNum) * 1296;
                }
            }
            else if (this.valueIn === 'Square Mile(mi2)') {
                    if (this.userPow != ''){
                    this.SquareKilometerResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2.5899881103;
                    this.SquareMeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2589988.1103;
                    this.SquareDecimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 258998811.03;
                    this.SquareCentimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 25899881103;
                    this.SquareMilimeterResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 2589988110336;
                    this.hectareResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 258.99881103;
                    this.acreResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 640;
                    this.areResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 25899.881103;
                    this.SquareMileResult = parseFloat(Math.pow(this.inputNum, this.userPow));
                    this.SquareYardResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 3097600;
                    this.SquareFeetResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 27878400;
                    this.SquareInchResult = parseFloat(Math.pow(this.inputNum, this.userPow)) * 4014489600;
                }
                else{
                    this.SquareKilometerResult = parseFloat(this.inputNum) * 2.5899881103;
                    this.SquareMeterResult = parseFloat(this.inputNum) * 2589988.1103;
                    this.SquareDecimeterResult = parseFloat(this.inputNum) * 258998811.03;
                    this.SquareCentimeterResult = parseFloat(this.inputNum) * 25899881103;
                    this.SquareMilimeterResult = parseFloat(this.inputNum) * 2589988110336;
                    this.hectareResult = parseFloat(this.inputNum) * 258.99881103;
                    this.acreResult = parseFloat(this.inputNum) * 640;
                    this.areResult = parseFloat(this.inputNum) * 25899.881103;
                    this.SquareMileResult = parseFloat(this.inputNum);
                    this.SquareYardResult = parseFloat(this.inputNum) * 3097600;
                    this.SquareFeetResult = parseFloat(this.inputNum) * 27878400;
                    this.SquareInchResult = parseFloat(this.inputNum) * 4014489600;
                }
            }
            
                
                else {
                    this.SquareKilometerResult = '';
                    this.SquareMeterResult =  '';
                    this.SquareDecimeterResult =  '';
                    this.SquareCentimeterResult =  '';
                    this.SquareMilimeterResult = '';
                    this.hectareResult = '';
                    this.acreResult = '';
                    this.areResult = '';
                    this.SquareMileResult = '';
                    this.SquareYardResult =  '';
                    this.SquareFeetResult =  '';
                    this.SquareInchResult = '';
                }
            }
    
        }
    }
    </script>
    
    