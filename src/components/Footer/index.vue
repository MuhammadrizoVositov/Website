<script setup>
import InstargamIcon from "@/assets/icon/instagram_icon.svg"
import facebookIcon from "@/assets/icon/facebookIcon.svg"
</script>

<template>
    <div class="w-[100%] h-[1px] bg-black my-[80px]"></div>
    <div class="px-[340px]">
        <div class="flex items-center gap-[250px]   ">
            <div class="flex flex-col gap-[8px] ">
                <ul class=" flex flex-col gap-[8px] ">
                    <li class=" text-[28px] font-[600] ">
                        <RouterLink to="/">
                            Home
                        </RouterLink>
                    </li>
                    <li class=" text-[22px] font-[300] ">
                        <RouterLink to="/about">
                            About
                        </RouterLink>
                    </li>
                    <li class=" text-[22px] font-[300]">
                        <RouterLink to="/contact">
                            Contact
                        </RouterLink>
                    </li>
                    <!-- <li class=" text-[25px] fonr-[300]">
                    <RouterLink to="/about">
                        About
                    </RouterLink>
                </li> -->
                </ul>
                <div class=" text-[22px] font-[300]">
                    <RouterLink to="/profile">
                        Profile
                    </RouterLink>
                </div>
            </div>

            <div>
                <h6 class="text-[20px] mb-[30px]">Don't miss the fun.</h6>

                <label for="" class="text-[14px]">Enter your email here</label>
                <div class="flex mt-[5px]">
                    <input type="text" placeholder="Email Address" class="border border-[#000] py-[10px] px-[15px] w-[400px]">
                    <button class=" bg-black text-[#fff] py-[10px] px-[25px]">Subscribe</button>
                </div>
            </div>
        </div>

        <div class="flex items-center gap-[270px]  my-[80px]  ">
            <div class="flex items-center gap-[8px]">
                <img :src="InstargamIcon" alt="Instagram Icon" class="w-[24px] h-[24px]" />
                <img :src="facebookIcon" alt="" class="w-[24px] h-[24px]">
            </div>
            <div>
                <h6>© 2035 by Poise. Powered and secured by Wix</h6>
            </div>
        </div>
    </div>
</template>