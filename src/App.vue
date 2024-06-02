<script setup>
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import Profile from "./views/Profile.vue";
import Header from './components/header/index.vue'
import Footer from "./components/Footer/index.vue"
import axios from "axios";
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const token = ref(localStorage.getItem("token"));

console.log(token.value);

onMounted(() => {
  if (token.value === null) {
    router.push('/register')
  }
})
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
