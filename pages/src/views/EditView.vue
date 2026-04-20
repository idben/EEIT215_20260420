<script setup>
import { ref } from 'vue';

import { onBeforeRouteLeave } from 'vue-router';

const formData = ref("3344")
const isSaved = ref(true)

const handleInput = (event) => {
    formData.value = event.target.value;
    console.log(formData.value);
    isSaved.value = false;
}

const handleSave = () => {
    isSaved.value = true;
}

onBeforeRouteLeave(() => {
    if (isSaved.value) return;
    const answer = confirm("有未儲存的變更，是否要離開??")
    if (!answer) return false;
})
</script>
<template>
    <h1>編輯頁面</h1>
    <input :value="formData" @input="handleInput" type="text" class="form-control" placeholder="請輸入內容">
    <div v-if="!isSaved" class="text-danger">尚未儲存...</div>
    <div class="d-flex mt-3">
        <button @click="handleSave" class="btn btn-primary ms-auto">儲存</button>
    </div>

</template>
<style scoped></style>