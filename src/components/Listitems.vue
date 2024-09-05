<script setup>
import { ref, computed, watch } from 'vue';
import Navbar from './Navbar.vue';
import { useRouter } from 'vue-router';

// Generate random data
const items = Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `Item${i + 1}`,
    company: `Company ${Math.floor(Math.random() * 10) + 1}`,
    description: `Description for item ${i + 1}`,
}));


const currentPage = ref(1);
const itemsPerPage = ref(10);
const sortOrder = ref('asc');
const searchQuery = ref('');


const filteredItems = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return items.filter(item => item.name.toLowerCase().includes(query));
});

const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage.value));

const paginatedItems = computed(() => {
    let sortedItems = [...filteredItems.value];


    sortedItems.sort((a, b) => {
        return sortOrder.value === 'asc' ? a.id - b.id : b.id - a.id;
    });

    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    return sortedItems.slice(startIndex, startIndex + itemsPerPage.value);
});

const visibleButtonsCount = 5;
const visibleButtonRange = computed(() => {
    const start = Math.max(1, currentPage.value - Math.floor(visibleButtonsCount / 2));
    const end = Math.min(totalPages.value, start + visibleButtonsCount - 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});


const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};


const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const goToPage = (page) => {
    currentPage.value = page;
};

watch(itemsPerPage, () => {
    if (currentPage.value > totalPages.value) {
        currentPage.value = totalPages.value;
    }
});

const toggleSortOrder = () => {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
};

const router = useRouter();

const navigateToItemPage = (itemName) => {
    router.push({ name: 'ItemPage', params: { itemName } });
};



</script>



<template>
    <div class="container">
        <Navbar />
        <div class="items-container">
            <div class="content-section">
                <div class="content">
                    <!-- heading -->
                    <p>Items List</p>

                    <div class="items-table">
                        <!-- search icons and sort by -->
                        <div class="search-sort">
                            <!-- search -->
                            <div class="search-box">
                                <img src="/src/assets/search.svg" alt="search icon" />
                                <input type="text" placeholder="Search items..." v-model="searchQuery" />
                            </div>

                            <!-- sort by -->
                            <div class="sort-by-button">
                                <img src="/src/assets/za.svg" alt="" />
                                <p>Sort by</p>
                            </div>
                        </div>

                        <!-- table -->
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th class="checbox-heading">
                                        <input type="checkbox" name="" id="" style="margin-top: 1px;" />
                                        <div style="display: flex; align-items: center; gap: 8px;"
                                            @click="toggleSortOrder">
                                            <span>Item Name</span>
                                            <img src="/src/assets/arrowdown.svg"
                                                :class="{ 'rotate-180': sortOrder === 'desc' }" style="cursor: pointer;"
                                                alt="Sort Order" />
                                        </div>
                                    </th>
                                    <th style="">Company</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in paginatedItems" :key="item.id"
                                    @click="navigateToItemPage(item.name)">

                                    <td class="row-set">
                                        <input type="checkbox" :id="'checkbox-' + item.id" />
                                        <label :for="'checkbox-' + item.id">{{ item.name }}</label>
                                    </td>
                                    <td>{{ item.company }}</td>
                                    <td>{{ item.description }}</td>
                                    <td style="text-align: end;">
                                        <img src="/src/assets/tablerow.svg" alt="Actions" />
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>

                    <!-- results per page and next previous button -->
                    <div class="results-page">


                        <div class="results">
                            <span>Results per page</span>
                            <select v-model="itemsPerPage">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="70">70</option>
                                <option value="80">80</option>
                                <option value="100">100</option>
                                <option value="150">150</option>
                                <option value="200">200</option>
                            </select>
                        </div>


                        <div class="next-pre-buttons">
                            <button @click="previousPage" :disabled="currentPage === 1" class="backButton">
                                <div class="back-button">
                                    <img src="/src/assets/backarrow.svg" alt="" />
                                    <span>Back</span>
                                </div>
                            </button>

                            <button v-for="page in visibleButtonRange" :key="page" @click="goToPage(page)"
                                :class="{ 'selected-page': currentPage === page }">
                                {{ page }}
                            </button>

                            <button @click="nextPage" :disabled="currentPage === totalPages" class="nextButton">
                                <div class="next-button">
                                    <span>Next</span>
                                    <img src="/src/assets/nextarrow.svg" alt="" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style src="/src/styles/ListItems.css"></style>
