<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Bojki</span>
            <span>P</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- dropdown menu -->
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                v-bind="attrs"
                v-on="on"
                >
                <span>Menu</span>
                <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
            </template>

            <v-list v-for="link in links" :key="link.text">
                <v-list-item @click="$router.push({ path: link.route })">
                <v-list-item-title >{{ link.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <!-- --- -->
        <v-btn flat>
            <span>Sign out</span>
            <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar slize="100">
                        <img src="/avatar-1.png" alt="">
                    </v-avatar>
                    <p class="white--text subtitle-1 mt-1">
                        The Net Ninja
                    </p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <popup></popup>
                </v-flex>
            </v-layout>

            <v-list v-for="link in links" :key="link.text">
                <v-list-item @click="$router.push({ path: link.route })">
                    <v-list-title>
                        <v-list-tile-action>
                            <v-icon class="white--text">{{ link.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-title-content>
                            <v-list-tile-title  class="white--text">{{ link.text }}</v-list-tile-title>
                        </v-list-title-content>
                </v-list-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>



<script>
import Popup from './Popup.vue';

export default {
    data() {
        return {
            drawer: false,
            links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
            ],
        };
    },
    components: {
        Popup,
    }
};
</script>
