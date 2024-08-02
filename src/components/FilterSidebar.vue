<template>
  <aside class="filter-sidebar">
    <h2>篩選條件</h2>
    <div class="filter-section">
      <h3>分類</h3>
      <div
        v-for="category of categories"
        :key="category.key"
        class="flex items-center"
      >
        <div class="mt-2">
          <Checkbox
            v-model="selectedCategories"
            :inputId="category.key"
            name="category"
            :value="category.name"
          />
          <label :for="category.key" class="ml-2">{{ category.name }}</label>
        </div>
      </div>
    </div>
    <div class="filter-section">
      <h3>價格範圍</h3>
      <div class="display: inline;">
        <InputText
          type="text"
          class="w-4rem"
          size="small"
          placeholder="最低價"
        />
        -
        <InputText
          type="text"
          class="w-4rem"
          size="small"
          placeholder="最高價"
        />
      </div>
    </div>
    <div class="filter-section">
      <h3>評價</h3>
      <div
        v-for="(count, index) in [5, 4, 3, 2, 1]"
        :key="index"
        class="inline-block mt-1"
      >
        <span
          v-for="n in 5"
          :key="n"
          :class="['pi', n <= count ? 'pi-star-fill' : 'pi-star', 'mr-2 ']"
          style="color: #ffce3d"
        ></span>
      </div>
    </div>
    <Button label="清除全部" />
  </aside>
</template>

<script setup>
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';
const categories = ref([
  { key: 'iPhone', name: 'iPhone' },
  { key: 'Android', name: 'Android' },
]);
const selectedCategories = ref([]);
</script>

<style scoped>
.filter-sidebar {
  width: 200px;
}

.filter-section {
  margin-bottom: 20px;
}

.filter-section h3 {
  margin-bottom: 10px;
  font-size: 1.1em;
}

.filter-section ul {
  list-style: none;
  padding: 0;
}

.filter-section ul li {
  margin-bottom: 10px;
}
.text-price-range {
  width: 100px;
}
</style>
