<template>
    <v-toolbar class="white--text pt-1" flat>
        <v-toolbar-title>Search</v-toolbar-title>
                <v-autocomplete
                    v-for="item in items" :key="item.name"
                    v-model="value"
                    :items="item.name"
                    dense
                    
                    label="Filled"
                    class="pt-5"
                ></v-autocomplete>
                <div class="pa-5">
                    <v-btn @click="$router.push({ path: item.route })">Search</v-btn>
                </div>
    </v-toolbar>
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