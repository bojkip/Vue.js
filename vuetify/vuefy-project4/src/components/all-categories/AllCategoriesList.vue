<template>
<v-container>
    <v-row class="pt-15" flat>
    <v-col
        v-for="link in links"
        :key="link.name"
        cols="12"
        sm="4"
    >
        <v-card
        class="pa-2"
        flat
        >
        <a :href="link.route">{{link.name}}</a>
        </v-card>
    </v-col>
    </v-row>
</v-container>
</template>

<script>
export default{
    data(){
        return{
            links: [
                {
                    name: 'Length', route: '/'
                },
                {
                    name: 'NNN', route: '/about',
                }
            ]
        }
    }
}
</script>