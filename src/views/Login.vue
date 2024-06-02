<script setup>
import axios from 'axios';
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const emailAddress = ref('')
const password = ref('')

const router = useRouter()
const url = import.meta.env.VITE_BASE_URL;

const login = async () => {
    try {
        const response = await axios.post(`${url}/api/accounts/login`, {
            emailAddress: emailAddress.value,
            password: password.value
        })
        router.push('/')
        console.log(response);
        localStorage.setItem('token', response?.data)
    } catch (error) {
        alert(error.message)
    }
}
</script>

<template>
    <div class="flex justify-center items-center mt-[50px]">
        <div class="m-[50px] py-[35px] w-[500px] h-[600px] bg-indigo-400 rounded-[4px]">
            <h6 class="text-[26px] text-center text-[#fff]">LOGIN</h6>
            <form @submit.prevent="login" class="flex flex-col items-center gap-[20px] mt-[40px]">
                <div class=" flex items-center gap-[10px] rounded-[4px]  bg-white w-[70%] py-[10px] px-[10px]">
                    <input v-model="emailAddress" type="text" placeholder="Emal" class="w-[100%] h-[100%] outline-none">
                </div>
                <div class=" flex items-center gap-[10px] rounded-[4px]  bg-white w-[70%] py-[10px] px-[10px]">
                    <input v-model="password" type="text" placeholder="Password" class="w-[100%] h-[100%] outline-none">
                </div>
                <button type="submit"
                    class="mt-[20px] bg-indigo-500 w-[200px] py-[10px] rounded-[10px] text-[#fff] text-[18px]">
                    submit
                </button>
                <p class="border border-white px-4 py-2">If you have a account <RouterLink class="text-white" to="/login">login</RouterLink> </p>
            </form>
        </div>
    </div>
</template>