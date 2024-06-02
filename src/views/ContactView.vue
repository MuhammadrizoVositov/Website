<template>
    <div class="flex justify-center mt-[100px]">
        <div class=" flex items-center justify-center flex-col max-w-[1000px] my-[50px]">
            <h5 class="text-[60px] text-center font-serif">CONTACT</h5>
            <div class="w-[100%] h-[1px] bg-black my-[30px]"></div>
            <h6 class="text-[50px] text-center">FOR INQUIRIES AND COLLABORATIONS, REACH ME HERE</h6>
            <div class="flex flex-col gap-[20px] mt-[50px]">
                <div class="flex">
                    <div class="flex flex-col">
                        <label for="">First Name</label>
                        <input type="text" class="border border-[#000] h-[60px] w-[400px]">
                    </div>
                    <div class="flex flex-col">
                        <label for="" class="">Last Name</label>
                        <input type="text" class="border border-[#000] h-[60px] w-[400px]">
                    </div>
                </div>
                <div class="flex ">
                    <div class="flex flex-col">
                        <label for="">Email</label>
                        <input type="text" class="border border-[#000] h-[60px] w-[400px]">
                    </div>
                    <div class="flex flex-col">
                        <label for="" class="">Password</label>
                        <input type="text" class="border border-[#000] h-[60px] w-[400px]">
                    </div>
                </div>

                <div class="flex flex-col gap-[5px]">
                    <label for="">Leave us a message...</label>
                    <textarea  class="border border-[#000] resize-none h-[150px]"></textarea>
                </div>
                <button class=" bg-black text-[#fff] py-[15px]">Submit</button>
            </div>
        </div>
    </div>
</template>