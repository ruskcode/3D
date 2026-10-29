<script setup>
import { onMounted, ref } from "vue";

const message = ref("");
const loading = ref(false);
const error = ref("");

async function fetchMessage() {
  loading.value = true;
  error.value = "";

  try {
    const response = await fetch("/api/hello");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    message.value = data.message;
  } catch (err) {
    error.value = `请求失败：${err.message}`;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchMessage();
});
</script>

<template>
  <main class="container">
    <h1>Vue + Java</h1>
    <p>我的第一个 Vue 和 Spring Boot 前后端分离项目</p>

    <section class="card">
      <h2>后端返回的数据</h2>

      <p v-if="loading">正在加载...</p>
      <p v-else-if="error" class="error" role="alert">
        {{ error }}
      </p>
      <p v-else>{{ message }}</p>

      <button @click="fetchMessage" :disabled="loading">
        {{ loading ? "请求中..." : "重新请求" }}
      </button>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 760px;
  margin: 80px auto;
  padding: 24px;
}

h1 {
  font-size: 40px;
}

.card {
  margin-top: 24px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: white;
}

button {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: #047857;
  color: white;
  font: inherit;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: wait;
}

.error {
  color: #b91c1c;
}
</style>
