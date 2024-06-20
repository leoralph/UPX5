<template>
    <v-img src="/assets/imagem.png"></v-img>
    <v-container>
        <v-row>
            <v-col class="text-h4"> Listagem de Equipamentos </v-col>
            <v-col class="text-end">
                <v-btn color="black" @click="creatingEquipment = true" icon="mdi-plus"></v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-data-table :items="equipments"></v-data-table>
            </v-col>
        </v-row>
    </v-container>

    <v-dialog v-model="creatingEquipment">
        <v-card>
            <v-form @submit.prevent="saveEquipment">
                <v-card-title>Novo Equipamento</v-card-title>
                <v-card-text>
                    <v-text-field variant="solo" :rules="[notEmpty]" v-model="equipmentForm.name" label="Nome"></v-text-field>
                    <v-text-field variant="solo" :rules="[notEmpty]" v-model="equipmentForm.description" label="Descrição"></v-text-field>
                    <v-text-field variant="solo" :rules="[notEmpty]" v-model="equipmentForm.serialNumber" label="Número de Série"></v-text-field>
                    <v-text-field variant="solo" :rules="[notEmpty]" v-model="equipmentForm.category" label="Categoria"></v-text-field>
                    <v-text-field variant="solo" :rules="[notEmpty]" v-model="equipmentForm.nextMaintenance" label="Próxima Calibragem"></v-text-field>
                </v-card-text>
                <v-card-actions class="text-end">
                    <v-btn variant="flat" color="red" @click="creatingEquipment = false">Cancelar</v-btn>
                    <v-btn variant="flat" color="green" type="submit">Salvar</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import type { SubmitEventPromise } from "vuetify";

const equipments: Ref<Array<any>> = ref([]);
const creatingEquipment: Ref<boolean> = ref(false);
const equipmentForm = reactive({
    name: "",
    description: "",
    serialNumber: "",
    category: "",
    nextMaintenance: "",
});

function notEmpty(value: string) {
    return !!value || "Campo obrigatório";
}

async function saveEquipment(formSubmitEvent: SubmitEventPromise) {
    if (!(await formSubmitEvent).valid) return;

    const equipment = {
        Nome: equipmentForm.name,
        Descrição: equipmentForm.description,
        "Número de Série": equipmentForm.serialNumber,
        Categoria: equipmentForm.category,
        "Próxima Calibragem": equipmentForm.nextMaintenance,
    };

    equipments.value.push(equipment);
    localStorage.setItem("equipments", JSON.stringify(equipments.value));
    creatingEquipment.value = false;
}

watch(creatingEquipment, value => {
    if (value) {
        equipmentForm.name = "";
        equipmentForm.description = "";
        equipmentForm.serialNumber = "";
        equipmentForm.category = "";
        equipmentForm.nextMaintenance = "";
    }
});

onBeforeMount(() => {
    const data: string | null = localStorage.getItem("equipments");

    if (data) {
        equipments.value = JSON.parse(data);
    }
});
</script>
