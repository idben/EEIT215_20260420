<script setup>
import { ref } from 'vue';

const formData = ref("3344")
const isSaved = ref(true)

const handleInput = (event) => {
    formData.value = event.target.value;
    console.log(formData.value);
    isSaved.value = false;
}
</script>
<template>
    <h1>編輯頁面</h1>
    <input :value="formData" @input="handleInput" type="text" class="form-control" placeholder="請輸入內容">
    <div v-if="!isSaved" class="text-danger">尚未儲存...</div>
    <div class="d-flex mt-3">
        <button class="btn btn-primary ms-auto">儲存</button>
    </div>

</template>
<style scoped></style>