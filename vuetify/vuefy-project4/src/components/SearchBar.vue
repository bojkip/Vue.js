<template>
    <v-card class="pa-5">
        <v-container fluid v-for="item in items">
            <v-row>
                <h1>Search Bar</h1>
            </v-row>
            <v-row
                align="center">
                <v-col cols="12">
                <v-autocomplete
                    v-model="value"
                    :items="item.name"
                    dense
                    filled
                    label="Filled"
                ></v-autocomplete>
                </v-col>
            </v-row>
            <v-row>
                <v-btn @click="$router.push({ path: item.route })">Search</v-btn>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    export default {
    data: () => ({
        items: [
            {
            name: 'Neko ime', route: '/about'
            }
        ],
        values: ['foo', 'bar'],
        value: null,
    }),
    }
</script>