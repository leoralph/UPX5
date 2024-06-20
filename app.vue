<template>
    <NuxtLayout>
        <v-app>
            <v-app-bar>
                <v-toolbar-title class="fw-bold">Gestão de equipamentos</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn class="text-decoration-underline"> EQUIPAMENTOS </v-btn>
                <v-btn> RELATÓRIOS </v-btn>
                <v-btn> TAREFAS </v-btn>
            </v-app-bar>
            <v-main>
                <NuxtPage />
            </v-main>
        </v-app>
    </NuxtLayout>
</template>
