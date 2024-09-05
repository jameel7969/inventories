<script setup>
import Navbar from './Navbar.vue';
import { ref, reactive, computed } from 'vue';
import FormOne from './Formone.vue';
import FormTwo from './Formtwo.vue';
import FormThree from './Formthree.vue';

// Define the reactive state
const activeTab = ref('form1');

const formData = reactive({
    form1: {
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
    },
    form2: {
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
        componentselect3: '',
        inactive: false,
        lastUpdated: '',
        updatedby: ''
    },
    form3: {
        itemClass: '',
        itemTemplate: '',
        company: '',
        dynamicItems: [], // Ensure dynamicItems is initialized
        inactive: false,
        lastUpdated: '',
        updatedBy: ''
    }
});

// Compute the current form component based on the active tab
const currentForm = computed(() => {
    switch (activeTab.value) {
        case 'form1':
            return FormOne;
        case 'form2':
            return FormTwo;
        case 'form3':
            return FormThree;
        default:
            return FormOne;
    }
});
</script>

<template>
    <div class="container">
        <!-- Importing navabr component -->
        <Navbar />

        <div class="category-container ">
            <div class="content-section">

                <div class="content">

                    <!-- icon and name -->
                    <div class="backicon-name">
                        <div class="arrow-box">
                            <img src="/src/assets/backarrow.svg" alt="">
                        </div>

                        <div class="category-name">
                            <span id="back-list">Back to item list</span>
                            <p id="categoryName">MESH202BLK-FR</p>
                        </div>
                    </div>


                    <!-- buttons with differnet categories -->
                    <div class="category-buttons">
                        <button class="general-button" @click="activeTab = 'form1'"
                            :class="{ 'active-tab': activeTab === 'form1' }">
                            <div class="img-general">
                                <img src="/src/assets/generalicon.svg" alt="" style="margin-top: -4px;">
                                <span>General</span>
                            </div>
                        </button>

                        <button class="handling-button" @click="activeTab = 'form2'"
                            :class="{ 'active-tab': activeTab === 'form2' }">
                            <div class="img-handling">
                                <img src="/src/assets/handlingicon.svg" alt="">
                                <span>Handling</span>
                            </div>
                        </button>

                        <button class="unit-button" @click="activeTab = 'form3'"
                            :class="{ 'active-tab': activeTab === 'form3' }">
                            <div class="img-unit">
                                <img src="/src/assets/unitmeasureicon.svg" alt="" style="margin-top: 5px;">
                                <span>Unit of Measure</span>
                            </div>
                        </button>
                    </div>


                    <component :is="currentForm" :formData="formData[activeTab]"></component>

                    <!-- <form @submit.prevent="handleSubmit">
                        <label for="name">Name:</label>
                        <input type="text" v-model="form.name" id="name" />

                        <label for="email">Email:</label>
                        <input type="email" v-model="form.email" id="email" />

                        <button type="submit">Submit</button>
                    </form> -->

                </div>

            </div>
        </div>


    </div>



</template>

<style src="/src/styles/Categoryone.css"></style>
