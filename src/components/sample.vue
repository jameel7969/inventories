<script setup>
import Navbar from './Navbar.vue';

const items = Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    company: `Company ${Math.floor(Math.random() * 10) + 1}`,
    description: `Description for item ${i + 1}`,
}));




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
                                <input type="text" placeholder="Search items..." />
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
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <span>Item Name</span>
                                            <img src="/src/assets/arrowdown.svg" style="" alt="" />
                                        </div>
                                    </th>
                                    <th style="">Company</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in items" :key="item.id">
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


                    <!-- results per page and next previuous button -->
                    <div class="results-page">

                        <div class="results">
                            <span>Results per page</span>
                            <select name="" id="">
                                <option value="50">50</option>
                                <option value="60">60</option>
                                <option value="70">70</option>
                                <option value="80">80</option>
                            </select>
                        </div>

                        <!-- next and previous buttons -->
                        <div class="next-pre-buttons">
                            <button>
                                <div class="back-button">
                                    <img src="/src/assets/backarrow.svg" alt="">
                                    <span>Back</span>
                                </div>
                            </button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>
                                <div class="next-button">
                                    <span>Next</span>
                                    <img src="/src/assets/nextarrow.svg" alt="">
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>




const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Log the form data
    console.log('Form Data:', formdata.value);

    // Optional: Validate form fields before logging or submitting
    const fields = document.querySelectorAll('#formtwo input[type="text"], #formtwo textarea, #formtwo select, #formtwo input[type="checkbox"], #formtwo input[type="date"]');
    let isValid = true;

    fields.forEach(field => {
        const fieldType = field.type;
        const value = field.value.trim();

        // Check different input types
        if (fieldType === 'checkbox') {
            // Validate checkbox
            if (!field.checked) {
                console.log(`${fieldType} must be checked`);
                field.style.outline = '2px solid red';
                isValid = false;
            } else {
                field.style.outline = 'none';
            }
        } else if (fieldType === 'date') {
            // Validate calendar (date) input
            if (value === '') {
                console.log(`${fieldType} must be selected`);
                field.style.borderColor = 'red';
                isValid = false;
            } else {
                field.style.borderColor = 'rgba(0, 0, 0, 0.15)';
            }
        } else {
            // Validate text, textarea, and select
            if (value === '') {
                console.log(`${field.tagName} Value:`, value);
                field.style.borderColor = 'red';
                isValid = false;
            } else {
                field.style.borderColor = 'rgba(0, 0, 0, 0.15)';
            }
        }
    });

    if (isValid) {
        // Optionally log the data after validation
        console.log('Form Data:', formdata.value);
    } else {
        alert('Please fill out all fields.');
    }
};

// Attach handleSubmit function to form submission
onMounted(() => {
    const form = document.getElementById('formtwo');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});