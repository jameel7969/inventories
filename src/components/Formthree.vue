<script setup>
import { ref } from 'vue';

import { defineProps } from 'vue';

const props = defineProps({
    formData: {
        type: Object,
        default: () => ({
            itemClass: '',
            itemTemplate: '',
            company: '',
            // dynamicItems: [], // Ensure dynamicItems is initialized
            inactive: false,
            lastUpdated: '',
            updatedBy: ''
        })
    }
});

const items = ref([
    { name: 'Sequence', value: '' },
    { name: 'Qunatity UM', value: '' },
    { name: 'Conversion qty', value: '' },
    { name: 'Length', value: '' },
    { name: 'Width', value: '' },
    { name: 'Height', value: '' },
    { name: 'Movement Class', value: '' },
    { name: 'Sequence', value: '' },
    { name: 'Qunatity UM', value: '' },
    { name: 'Conversion qty', value: '' },
    { name: 'Length', value: '' },
    { name: 'Width', value: '' },
    { name: 'Height', value: '' },
    { name: 'Movement Class', value: '' },
    { name: 'Sequence', value: '' },
    { name: 'Qunatity UM', value: '' },
    { name: 'Conversion qty', value: '' },
    { name: 'Length', value: '' },
    { name: 'Width', value: '' },
    { name: 'Height', value: '' },
    { name: 'Movement Class', value: '' },
    { name: 'Sequence', value: '' },
    { name: 'Qunatity UM', value: '' },
    { name: 'Conversion qty', value: '' },
    { name: 'Length', value: '' },
    { name: 'Width', value: '' },
    { name: 'Height', value: '' },
    { name: 'Movement Class', value: '' },
]);



</script>

<template>
    <form action="" id="formthree" style="display: flex; flex-direction: column; gap: 30px;" class="form-units">

        <div style="display: flex;align-items: center; gap: 20px;">
            <span style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Serial Number</span>
            <div style="height: 1px; width: 92%; background-color: rgba(168, 168, 168, 0.4);"></div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
            <label for="itemclass" style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Item
                Class</label>
            <input type="text" placeholder="Item Class" id="itemclass" v-model="formData.itemclass"
                style="width: 630px;padding: 12px; background-color: #ebebf3; outline: none; border: 1px solid  rgba(0, 0, 0, 0.15); border-radius: 10px;">
        </div>


        <div style="display: flex;align-items: center; gap: 20px;">
            <span style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Item</span>
            <div style="height: 1px; width: 96%; background-color: rgba(168, 168, 168, 0.4);"></div>
        </div>


        <div style="display: flex;  gap: 20px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label for="items" style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Item:</label>
                <input type="text" placeholder="Item template" id="items" v-model="formData.items"
                    style="width: 630px;padding: 12px; background-color: #ebebf3; outline: none; border: 1px solid  rgba(0, 0, 0, 0.15); border-radius: 10px;">
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label for="company"
                    style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Company:</label>
                <input type="text" placeholder="Company" id="company" v-model="formData.company"
                    style="width: 630px;padding: 12px; background-color: #ebebf3; outline: none; border: 1px solid  rgba(0, 0, 0, 0.15); border-radius: 10px;">
            </div>
        </div>


        <div style="height: 1px; width: 100%; background-color: rgba(168, 168, 168, 0.4);"></div>


        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 20px;">
            <div v-for="(item, index) in items" :key="index" style="display: flex; flex-direction: column; gap: 8px;">
                <label :for="`input-${index}`"
                    style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">{{ item.name }}</label>
                <input :id="`input-${index}`" type="text" v-model="item.value" placeholder=""
                    style="width: 150px; padding: 12px; background-color: #ebebf3; outline: none; border: 1px solid  rgba(0, 0, 0, 0.15); border-radius: 10px;" />
            </div>
        </div>


        <div style="height: 1px; width: 100%; background-color: rgba(168, 168, 168, 0.4);"></div>


        <div class="" style="display: flex; align-items: center;gap: 10px; ">
            <input type="checkbox" v-model="formData.inactive" name="inactive" id="inactive"
                style="border: 1px solid  rgba(0, 0, 0, 0.15);">
            <label for="inactive"
                style="font-size: 12px;font-weight: 700;color: rgba(31, 31, 31, 0.8);">Inactive</label>
        </div>
        <div class="last-updated">
            <div class="calendar">
                <label for="lastupdated" style="color: rgba(31, 31, 31, 0.8); font-weight: 600">Last Updated:</label>
                <input id="lastupdated" v-model="formData.lastupdated" type="date"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
            </div>

            <div class="calendar">
                <label for="updatedby" style="color: rgba(31, 31, 31, 0.8); font-weight: 600">Updated By:</label>
                <input id="updatedby" v-model="formData.updatedby" type="date"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
            </div>
        </div>

        <button type="submit"
            style="background-color: #0000; border: 1px solid rgba(0, 0, 0, 0.15); border-radius: 10px; padding: 10px; cursor: pointer; width: 100px; width: fit-content;">Submit</button>


    </form>

    <!-- ok and cancel buttons -->
    <div class="cancel-ok-buttons">
        <button id="cancel-button">Cancel</button>
        <button id="ok-button">ok</button>
    </div>
</template>

<style scoped></style>
