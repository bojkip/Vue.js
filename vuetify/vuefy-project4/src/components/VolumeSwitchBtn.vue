<template>
    <v-switch
    v-model="showVolumeUnits"
    inset
    label="Volume"
    @changed="SetVolumeItems"
    ></v-switch>
</template>

<script>
import Length from './Units/Length.vue'

export default {
    components: {
        Length,
    },
    data(){
        return {
                itemsIn: [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)', 'description', 'bla'],
                itemsOut: ['Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)'],

                showAreaUnits: false,
                showVolumeUnits: false,
            }
    },
    computed: {
        SetVolumeItems(){
            if (this.showVolumeUnits === true) {
                this.itemsIn = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Hectare(ha)', 'Meter(m)', 'Kilometer(km)', 'VOLUME22', 'Are', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)' ];
                this.itemsOut = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Hectare(ha)', 'Meter(m)', 'Kilometer(km)', 'VOLUME', 'Are', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)' ];
                this.disUnitPow = true;
                this.unitPow = 2;
            }
            else {
                this.itemsIn = [ 'Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)'];
                this.itemsOut = ['Milimeter(mm)', 'Centimeter(cm)', 'Decimeter(dm)', 'Meter(m)', 'Kilometer(km)', 'Inch(in)', 'Feet(ft)', 'Yard(yd)', 'Mile(mi)'];
                this.disUnitPow = false;
                this.unitPow = '';
            }
        },
    }
}
</script>