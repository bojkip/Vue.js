<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Bojki</span>
            <span>P</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat>
            <span>Sign out</span>
            <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-list v-for="link in links" :key="link.text" router :to="link.route" >
                <v-list-title >
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-title-content >
                        <v-list-tile-title  class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-title-content>
                </v-list-title>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>



<script>

export default {
    data() {
        return {
            drawer: false,
            links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/home' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
            ],
        };
    },
};
</script>
