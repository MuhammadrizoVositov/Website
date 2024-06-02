<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Card from "../components/card/index.vue";
import Acoount from "../components/Acoount/index.vue";
// import Register from "@/components/auth/register/index.vue";
import Login from "@/components/auth/login/index.vue"
// import Crud   from "../views/Crud.vue";
import Image from "../assets/image/img1.jpg"
const data = [
    { id: 1, img: Image },
    { id: 2, img: Image },
    { id: 3, img: Image },
    { id: 4, img: Image },
    { id: 5, img: Image },
    { id: 6, img: Image },
]

const postsMockData = [
    { id: 1, img: Image, name: "Palonchi", date: "Mar 22, 2023", title: "THE LOUNGEWEAR PIECES I SWEAR BY", dasc: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...." },
    { id: 2, img: Image, name: "Palonchi", date: "Mar 22, 2023", title: "THE LOUNGEWEAR PIECES I SWEAR BY", dasc: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...." },
    { id: 3, img: Image, name: "Palonchi", date: "Mar 22, 2023", title: "THE LOUNGEWEAR PIECES I SWEAR BY", dasc: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...." },
    { id: 4, img: Image, name: "Palonchi", date: "Mar 22, 2023", title: "THE LOUNGEWEAR PIECES I SWEAR BY", dasc: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...." },
    { id: 5, img: Image, name: "Palonchi", date: "Mar 22, 2023", title: "THE LOUNGEWEAR PIECES I SWEAR BY", dasc: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...." },
]

const posts = ref([])
const url = import.meta.env.VITE_BASE_URL;

const getPosts = async () => {
    try {
        const response = await axios.get(`${url}/api/items`)
        posts.value = response?.data
    } catch (error) {
        alert(error.message)
    }
}

onMounted(() => {
    getPosts()
})


</script>

<template>
    <div class="mt-[100px]">
        <h6 class="text-[60px] text-center  border-b border-[#000] py-[25px]">THE BLOG</h6>
        <div class="px-[100px]">
            <div class=" mt-[40px]">
                <Card :posts="posts" />
            </div>
            <div class="flex  mt-[50px] border-[1px] border-[#000] w-full h-[700px]">
                <div class="w-[50%] h-[100%]">
                    <img src="../assets/image/img1.jpg" alt="" class="h-[100%] object-cover ">
                </div>
                <div class="flex items-center justify-center w-[50%] h-[100%]">
                    <div class="w-[400px]">
                        <h6 class="text-[40px]">ABOUT MIKAYLA</h6>
                        <p class="mt-[10px] ">
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
                            click “Edit Text” or double click me to add your own content and make changes
                            to the font. I’m a great place for you to tell a story and let your users
                            know a little more about you.
                        </p>
                        <button class=" bg-black px-[15px] py-[8px] text-[#fff] mt-[20px]">Get to know Me</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-[70px]">
            <h6 class="text-[35px] text-center  border-y py-[30px] border-[#000]">FOLLOW ME ELSEWHERE</h6>
        </div>

        <div class="grid grid-cols-6 gap-4 px-[100px] ">
            <div v-for="item in data" :key="item.id">
                <img :src="item.img" alt="Blog image" class=" h-[250px] object-cover " />
            </div>
        </div>

        <div class="my-[70px]">
            <h6 class="text-[35px] text-center  border-y py-[30px] border-[#000]"> SHOP MY LOOK</h6>
        </div>

        <div class="w-full h-[700px] px-[100px]">
            <div class="flex  mt-[50px] border-[2px] border-[#000] h-[100%]">
                <div class="flex items-center justify-center w-[50%] h-[100%]">
                    <img src="../assets/image/img1.jpg" alt="" class="h-[300px] w-[300px] object-cover ">
                </div>
                <div class=" w-[50%] h-[100%]">
                    <img src="../assets/image/img1.jpg" alt="" class="h-[100%] object-cover ">
                </div>
            </div>
        </div>
    </div>
    <!-- <Login /> -->


</template>