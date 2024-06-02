<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const firstName = ref('admin');
const lastName = ref('admin');
const userName = ref('admin');
const emailAddress = ref('admin@gmail.com');
const password = ref('admin123');
const router = useRouter()
const url = import.meta.env.VITE_BASE_URL;

const onSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${url}/api/accounts/Register`, {
      firstName: firstName.value,
      lastName: lastName.value,
      userName: userName.value,
      emailAddress: emailAddress.value,
      password: password.value
    });

    if (response.status === 200) {
      router.push('/')
    }
  } catch (error) {
    alert(error.message);
  }
}
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="m-[50px] py-[35px] w-[500px] h-[600px] bg-indigo-400 rounded-[4px]">
      <h6 class="text-[26px] text-center text-[#fff]">REGISTRATION</h6>
      <form @submit.prevent="onSubmit" class="flex flex-col items-center gap-[20px] mt-[40px]">
        <div class="flex items-center gap-[10px] rounded-[4px] bg-white w-[70%] py-[10px] px-[10px]">
          <input v-model="firstName" type="text" placeholder="First Name" class="w-[100%] h-[100%] outline-none">
        </div>
        <div class="flex items-center gap-[10px] rounded-[4px] bg-white w-[70%] py-[10px] px-[10px]">
          <input v-model="lastName" type="text" placeholder="Last Name" class="w-[100%] h-[100%] outline-none">
        </div>
        <div class="flex items-center gap-[10px] rounded-[4px] bg-white w-[70%] py-[10px] px-[10px]">
          <input v-model="userName" type="text" placeholder="Username" class="w-[100%] h-[100%] outline-none">
        </div>
        <div class="flex items-center gap-[10px] rounded-[4px] bg-white w-[70%] py-[10px] px-[10px]">
          <input v-model="emailAddress" type="email" placeholder="Email" class="w-[100%] h-[100%] outline-none">
        </div>
        <div class="flex items-center gap-[10px] rounded-[4px] bg-white w-[70%] py-[10px] px-[10px]">
          <input v-model="password" type="password" placeholder="Password" class="w-[100%] h-[100%] outline-none">
        </div>
        <button type="submit"
          class="mt-[20px] bg-indigo-500 w-[200px] py-[10px] rounded-[10px] text-[#fff] text-[18px]">
          Create Account
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Add any specific styles here */
</style>
