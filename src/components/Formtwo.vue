<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    formData: {
        type: Object,
        default: () => ({
            itemTemplate: '',
            company: '',
            description: '',
            catchweight: false,
            lotcontrolled: false,
            componentSelect: '',
            selectComponent1: '',
            inbound: false,
            inventory: false,
            outbound: false,
            componentselect3:'',
            inactive:false,
            lastUpdated: '',
            updatedby: ''
        })
    }
});
</script>


<template>
    <form action="" id="formtwo" style="display: flex; flex-direction: column; gap: 30px;" class="form-handling">

        <div class="" style="display: flex;  gap: 40px;">

            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <label for="itemtemplate"
                        style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Item
                        Template</label>
                    <input id="itemtemplate" v-model="formData.itemTemplate" type="text" placeholder="Item template"
                        style="width: 630px;padding: 12px; background-color: #ebebf3; outline: none;border: 1px solid  rgba(0, 0, 0, 0.15); border-radius: 10px;">
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <label for="company"
                        style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Company</label>
                    <input type="text" placeholder="Company" id="company" v-model="formData.company"
                        style="width: 630px;padding: 12px; background-color: #ebebf3; outline: none; border: 1px solid  rgba(0, 0, 0, 0.15); border-radius: 10px;">
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="display: flex; align-items: center;gap: 10px;">
                    <label for="description"
                        style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Desciption</label>
                    <img src="/src/assets/description.svg" alt="">
                </div>
                <textarea name="" id="description" v-model="formData.description"
                    style="resize: none;width: 630px; height: 100px; padding: 15px; background-color: #ebebf3; outline: none;border: 1px solid  rgba(0, 0, 0, 0.15); border-radius: 10px;">Desciption</textarea>
            </div>
        </div>


        <div style="height: 1px; width: 100%; background-color: rgba(168, 168, 168, 0.4);"></div>

        <div class="" style="display: flex; align-items: center; gap: 30px;">
            <div class="" style="display: flex; align-items: center;gap: 10px; ">
                <input id="catchweight" type="checkbox" name="" v-model="formData.catchweight"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
                <label for="catchweight" style="font-size: 12px;font-weight: 600;color: rgba(31, 31, 31, 0.8);">Catch
                    Weight
                    Required</label>
            </div>
            <div class="" style="display: flex; align-items: center;gap: 10px; ">
                <input v-model="formData.lotcontrolled" type="checkbox" name="" id="lotcontrolled"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
                <label for="lotcontrolled" style="font-size: 12px;font-weight: 600;color: rgba(31, 31, 31, 0.8);">Lot
                    Controlled</label>
            </div>
        </div>

        <div class="" style="display: flex;gap: 40px">
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label for="componentSelect" style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Lot
                    Template:</label>
                <div class="select-custom">
                    <select id="componentSelect" style="border: 1px solid  rgba(0, 0, 0, 0.15);"
                        v-model="formData.componentSelect">
                        <option value="">Select</option>
                        <option value="1">Lorem ipsum dolor sit amet.</option>
                        <option value="2">Lorem ipsum dolor sit amet.</option>
                        <option value="3">Lorem ipsum dolor sit amet.</option>
                        <option value="4">Lorem ipsum dolor sit amet.</option>
                    </select>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label for="selectComponent1"
                    style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Days to expire:</label>
                <div class="select-custom">
                    <select id="selectComponent1" v-model="formData.selectComponent1"
                        style="border: 1px solid  rgba(0, 0, 0, 0.15);">
                        <option value="">Select</option>
                        <option value="1">Lorem ipsum dolor sit amet.</option>
                        <option value="2">Lorem ipsum dolor sit amet.</option>
                        <option value="3">Lorem ipsum dolor sit amet.</option>
                        <option value="4">Lorem ipsum dolor sit amet.</option>
                    </select>
                </div>
            </div>
        </div>

        <div style="display: flex;align-items: center; gap: 20px;">
            <span style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Serial Number</span>
            <div style="height: 1px; width: 92%; background-color: rgba(168, 168, 168, 0.4);"></div>
        </div>

        <div class="" style="display: flex; align-items: center; gap: 40px;">
            <div class="" style="display: flex; align-items: center;gap: 10px; ">
                <input v-model="formData.inbound" type="checkbox" name="" id="inbound"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
                <label for="inbound"
                    style="font-size: 12px;font-weight: 600;color: rgba(31, 31, 31, 0.8);">Inbound</label>
            </div>
            <div class="" style="display: flex; align-items: center;gap: 10px; ">
                <input v-model="formData.inventory" type="checkbox" name="" id="inventory"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
                <label style="font-size: 12px;font-weight: 600;color: rgba(31, 31, 31, 0.8);"
                    for="inventory">Inventory</label>
            </div>
            <div class="" style="display: flex; align-items: center;gap: 10px; ">
                <input v-model="formData.outbound" type="checkbox" name="" id="outbound"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
                <label style="font-size: 12px;font-weight: 600;color: rgba(31, 31, 31, 0.8);"
                    for="outboud">Outbound</label>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
            <label for="componentselect3" style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Lot
                Template:</label>
            <div class="select-custom">
                <select id="componentselect3" v-model="formData.componentselect3"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
                    <option value="">Select</option>
                    <option value="1">Lorem ipsum dolor sit amet.</option>
                    <option value="2">Lorem ipsum dolor sit amet.</option>
                    <option value="3">Lorem ipsum dolor sit amet.</option>
                    <option value="4">Lorem ipsum dolor sit amet.</option>
                </select>
            </div>
        </div>

        <div style="height: 1px; width: 100%; background-color: rgba(168, 168, 168, 0.4);"></div>

        <div class="" style="display: flex; align-items: center;gap: 10px; ">
            <input type="checkbox" name="" id="inactive" style="border: 1px solid  rgba(0, 0, 0, 0.15);"
                v-model="formData.inactive">
            <label style="font-size: 12px;font-weight: 700;color: rgba(31, 31, 31, 0.8);"
                for="inactive">Inactive</label>
        </div>
        <div class="last-updated">
            <div class="calendar">
                <label for="lastupdated" style="color: rgba(31, 31, 31, 0.8); font-weight: 600">Last Updated:</label>
                <input id="lastupdated" v-model="formData.lastUpdated" type="date"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
            </div>

            <div class="calendar">
                <label for="updatedby" style="color: rgba(31, 31, 31, 0.8); font-weight: 600">Updated By:</label>
                <input type="date" id="updatedby" v-model="formData.updatedby"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
            </div>
        </div>

        <button type="submit"
            style="background-color: #0000; border: 1px solid rgba(0, 0, 0, 0.15); border-radius: 10px; padding: 10px; cursor: pointer; width: 100px; width: fit-content;">Submit</button>


    </form>
    <!-- ok and cancel buttons -->
    <!-- <div class="cancel-ok-buttons">
        <button id="cancel-button" on>Cancel</button>
        <button id="ok-button" type="submit">ok</button>
    </div> -->
</template>

<style scoped></style>
