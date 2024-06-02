<script>
import { ref } from 'vue'
const openEditModal = ref(false)
</script>

<template>
    <div class="flex items-center justify-center mt-[150px]  w-[100%]">
        <div class="flex justify-center gap-[30px] w-full">
            <div class="py-[20px] flex gap-[15px] flex-col w-[300px] items-center shadow-md">
                <div class="w-[120px] h-[120px]  rounded-[50%] bg-black"></div>
                <h6 class="text-[20px]">Kim dur</h6>
                <p class="text-[18px]">Full Stak Developer</p>
                <!-- <p class="text-[18px]">Bay Area, San Francisco, CA</p> -->
                <button class="border py-[6px] px-[18px] text-[#fff] bg-indigo-500 rounded-[8px]">Uplaut Image</button>
            </div>
            <div class="flex justify-between flex-col items-start w-[500px] gap-[10px] shadow-md py-[10px] px-[15px]">
                <div class="flex items-center justify-between gap-[150px]">
                    <h6 class="text-[18px]">Full Name</h6>
                    <p v-if="!openEditModal" class="text-[18px]">Kenneth Valdez</p>
                    <input value="Kenneth Valdez" v-if="openEditModal" type="text"
                        class="border border-black p-2 rounded-md">
                </div>
                <div class="w-[100%] h-[0.5px] mt-[10px] bg-white"></div>
                <div class="flex items-center justify-between gap-[150px]">
                    <h6 class="text-[18px]">Last name</h6>
                    <p v-if="!openEditModal" class="text-[18px]">Kenneth Valdez</p>
                    <input value="Kenneth Valdez" v-if="openEditModal" type="text"
                        class="border border-black p-2 rounded-md">
                </div>
                <div class="w-[100%] h-[0.5px] mt-[10px] bg-white"></div>
                <div class="flex items-center justify-between gap-[150px]">
                    <h6 class="text-[18px]">Username</h6>
                    <p v-if="!openEditModal" class="text-[18px]">Kenneth Valdez</p>
                    <input value="Kenneth Valdez" v-if="openEditModal" type="text"
                        class="border border-black p-2 rounded-md">
                </div>
                <div class="w-[100%] h-[0.5px] mt-[10px] bg-white"></div>
                <div class="flex items-center justify-between gap-[190px]">
                    <h6 class="text-[18px]">Email</h6>
                    <p v-if="!openEditModal" class="text-[18px]">Kenneth Valdez</p>
                    <input value="Kenneth Valdez" v-if="openEditModal" type="text"
                        class="border border-black p-2 rounded-md">
                </div>
                <div class="w-[100%] h-[0.5px] mt-[10px] bg-white"></div>
                <div class="flex items-center justify-between gap-[160px]">
                    <h6 class="text-[18px]">Password</h6>
                    <p v-if="!openEditModal" class="text-[18px]">Kenneth Valdez</p>
                    <input value="Kenneth Valdez" v-if="openEditModal" type="text"
                        class="border border-black p-2 rounded-md">
                </div>
                <div class="w-[100%] h-[0.5px] mt-[10px] bg-white"></div>
                <button v-if="!openEditModal" @click="openEditModal = true"
                    class=" py-[8px] bg-blue-500 rounded-[10px] px-[30px]">Edit</button>
                <button v-if="openEditModal" class=" py-[8px] bg-blue-500 rounded-[10px] px-[30px]">Submit</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const data = ref([]);
const url = import.meta.env.VITE_BASE_URL;

console.log(url, 'url from profile');

if (!localStorage.getItem("token")) router.push("/");
if (localStorage.getItem("token")) {
    axios
        .get(`${url}/auth/profile`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
        })
        .then((res) => {
            data.value = res;
        });
}

const logOut = () => {
    localStorage.removeItem("token");
    router.push("/");
};
</script>
