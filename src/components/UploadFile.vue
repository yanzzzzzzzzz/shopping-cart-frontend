<template>
  <div class="card flex justify-content-center">
    <input
      type="file"
      id="media"
      accept="image/*"
      @change="(event) => handleFileUpload(event)"
      class="hidden"
    />
    <label for="media">選擇圖片</label>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['update:modelValue']);

// 將 modelValue 映射為內部變數 file
const file = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

// 處理檔案上傳
const handleFileUpload = (e) => {
  const uploadedFile = e.target.files[0];
  if (!uploadedFile) return;

  const preview = URL.createObjectURL(uploadedFile);
  file.value = { file: uploadedFile, preview };
};

// 移除檔案
const removeFile = () => {
  file.value = null;
};
</script>
