<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    formData: {
        type: Object,
        default: () => ({
            itemTemplate: '',
            company: '',
            description: '',
            selectComponent1: '',
            selectComponent2: '',
            selectComponent3: '',
            selectComponent4: '',
            selectComponent5: '',
            selectComponent6: '',
            inactive: false,
            lastUpdated: '',
            updatedby: ''
        })
    }
});
</script>

<template>

    <form id="myForm" action="" style="display: flex; flex-direction: column; gap: 30px;" class="form-general">

        <div class="" style="display: flex;  gap: 40px;">

            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <label for="itemTemplate"
                        style="font-size: 12px; font-weight: 600; color: rgba(31, 31, 31, 0.8);">Item Template</label>
                    <input type="text" v-model="formData.itemTemplate" id="itemTemplate" placeholder="Item template"
                        style="width: 630px;padding: 12px; background-color: #ebebf3; outline: none; border: 1px solid  rgba(0, 0, 0, 0.15); border-radius: 10px;">
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <label for="company"
                        style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Company</label>
                    <input type="text" v-model="formData.company" id="company" placeholder="Company"
                        style="width: 630px;padding: 12px; background-color: #ebebf3; outline: none;border: 1px solid  rgba(0, 0, 0, 0.15); border-radius: 10px;">
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="display: flex; align-items: center;gap: 10px;">
                    <label for="description"
                        style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Description</label>
                    <img src="/src/assets/description.svg" alt="">
                </div>
                <textarea v-model="formData.description" id="description" name=""
                    style="resize: none;width: 630px; height: 100px; padding: 15px; background-color: #ebebf3; outline: none; border: 1px solid  rgba(0, 0, 0, 0.15); border-radius: 10px;"></textarea>
            </div>
        </div>

        <div style="height: 1px; width: 100%; background-color: rgba(168, 168, 168, 0.4);"></div>

        <div class="allocation-itemclass" style="display: flex;gap: 40px">
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label for="selectComponent1"
                    style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Allocation Rule:</label>
                <div class="custom-select">
                    <select id="selectComponent1" v-model="formData.selectComponent1"
                        style="border: 1px solid  rgba(0, 0, 0, 0.15); v">
                        <option value="">Select</option>
                        <option value="1">Lorem ipsum dolor sit amet.</option>
                        <option value="2">Lorem ipsum dolor sit amet.</option>
                        <option value="3">Lorem ipsum dolor sit amet.</option>
                        <option value="4">Lorem ipsum dolor sit amet.</option>
                    </select>
                </div>
            </div>

            <div style="flex-direction: column; gap: 8px;">
                <label for="selectComponent2"
                    style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Item Class:</label>
                <div class="custom-select">
                    <select v-model="formData.selectComponent2" id="selectComponent2"
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

        <div class="allocation-itemclass" style="display: flex;gap: 40px">
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label for="selectComponent3"
                    style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">NMFC Code:</label>
                <div class="custom-select">
                    <select v-model="formData.selectComponent3" id="selectComponent3"
                        style="border: 1px solid  rgba(0, 0, 0, 0.15);">
                        <option value="">Select</option>
                        <option value="1">Lorem ipsum dolor sit amet.</option>
                        <option value="2">Lorem ipsum dolor sit amet.</option>
                        <option value="3">Lorem ipsum dolor sit amet.</option>
                        <option value="4">Lorem ipsum dolor sit amet.</option>
                    </select>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label for="selectComponent4"
                    style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Packing Class:</label>
                <div class="custom-select">
                    <select v-model="formData.selectComponent4" id="selectComponent4"
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

        <div class="allocation-itemclass" style="display: flex;gap: 40px">
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label for="selectComponent5"
                    style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Location Rule:</label>
                <div class="custom-select">
                    <select v-model="formData.selectComponent5" id="selectComponent5"
                        style="border: 1px solid  rgba(0, 0, 0, 0.15);">
                        <option value="">Select</option>
                        <option value="1">Lorem ipsum dolor sit amet.</option>
                        <option value="2">Lorem ipsum dolor sit amet.</option>
                        <option value="3">Lorem ipsum dolor sit amet.</option>
                        <option value="4">Lorem ipsum dolor sit amet.</option>
                    </select>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label for="selectComponent6"
                    style="font-size: 12px; font-weight: 600;color: rgba(31, 31, 31, 0.8);">Storage Component:</label>
                <div class="custom-select">
                    <select v-model="formData.selectComponent6" id="selectComponent6"
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

        <div style="height: 1px; width: 100%; background-color: rgba(168, 168, 168, 0.4);"></div>

        <div class="" style="display: flex; align-items: center;gap: 10px; ">
            <input v-model="formData.inactive" type="checkbox" name="" id="inactive">
            <label style="font-size: 12px;font-weight: 700;color: rgba(31, 31, 31, 0.8); "
                for="inactive">Inactive</label>
        </div>


        <div class="last-updated">
            <div class="calendar">
                <label for="lastUpdated" style="color: rgba(31, 31, 31, 0.8); font-weight: 600">Last Updated:</label>
                <input v-model="formData.lastUpdated" type="date" id="lastUpdated"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
            </div>

            <div class="calendar">
                <label for="updatedby" style="color: rgba(31, 31, 31, 0.8); font-weight: 600">Updated By:</label>
                <input v-model="formData.updatedby" type="date" id="updatedby"
                    style="border: 1px solid  rgba(0, 0, 0, 0.15);">
            </div>
        </div>

        <button type="submit"
            style="background-color: #0000; border: 1px solid rgba(0, 0, 0, 0.15); border-radius: 10px; padding: 10px; cursor: pointer; width: 100px; width: fit-content;">Submit</button>

    </form>



    <!-- ok and cancel buttons -->
    <!-- <div class="cancel-ok-buttons">
        <button id="cancel-button">Cancel</button>
        <button id="ok-button">ok</button>
    </div> -->

</template>

<style scoped></style>
