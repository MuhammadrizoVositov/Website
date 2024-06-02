<script setup lang="ts">

// import Button from '@/components/ui/button/Button.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class=" flex items-center justify-center border-b border-[#000] w-full fixed top-0 left-0 bg-white">
        <nav class=" flex items-center  ">
            <div >
                <ul class=" flex items-center  ">
                    <li class="hover:bg-black hover:text-[#fff] border border-[#000] py-[25px] px-[50px] text-[25px] font-mono">
                        <RouterLink to="/">
                            Home
                        </RouterLink>
                    </li>
                    <li class="hover:bg-black hover:text-[#fff] border border-[#000] py-[25px] px-[50px] text-[25px] font-mono">
                        <RouterLink to="/about">
                            About
                        </RouterLink>
                    </li>
                    <li class="hover:bg-black hover:text-[#fff] border border-[#000] py-[25px] px-[50px] text-[25px] font-mono">
                        <RouterLink to="/contact">
                            Contact
                        </RouterLink>
                    </li>
                    <li class="hover:bg-black hover:text-[#fff] border border-[#000] py-[25px] px-[50px] text-[25px] font-mono">
                        <RouterLink to="/about">
                            About
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class=" hover:bg-black hover:text-[#fff] border border-[#000] py-[25px] px-[50px] text-[25px]">
                <RouterLink to="/profile">
                    Profile
                </RouterLink>
            </div>
        </nav>
    </div>
</template>











<!-- <Button>
    <RouterLink to="/login">
        Login
    </RouterLink>
</Button>
<Button>
    <RouterLink to="/login">
        Login
    </RouterLink>
</Button>
<div class="flex">
    <p>asda</p>
    <p>asda</p> -->