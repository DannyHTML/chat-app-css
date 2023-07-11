<template>
  <div
    class="relative w-1/2 h-[600px] bg-gradient-to-b from-lightMagenta to-lightViolet rounded-br-full"
  >
    <div
      class="absolute right-0 translate-x-1/2 top-14 w-[280px] h-full bg-white shadow-2xl rounded-3xl"
    >
      <!-- Start header -->

      <div
        class="relative flex justify-center items-center w-11/12 m-auto h-20 rounded-b-lg rounded-t-2xl mt-4 bg-gradient-to-l from-lightMagenta to-lightViolet"
      >
        <div class="absolute w-3/5 h-5 -top-1 bg-white rounded-b-2xl"></div>
        <div class="flex w-11/12 justify-between mt-4">
          <div class="flex items-center gap-2">
            <div>
              <img class="" src="/images/icon-previous.svg" alt="" />
            </div>
            <div class="h-7 w-7 border-2 rounded-full">
              <img class="rounded-full" src="/images/avatar.jpg" alt="" />
            </div>
            <div>
              <h2 class="capitalize text-sm text-white">samuel green</h2>
              <p class="text-white text-xs opacity-50">Available to Walk</p>
            </div>
          </div>
          <div>
            <div>
              <font-awesome-icon
                icon="fa-solid fa-ellipsis-vertical"
                style="color: #be2d2d"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- End header -->

      <div class="w-11/12 m-auto bg-appBackground rounded-t-lg rounded-b-2xl">
        <div class="flex flex-col gap-2 w-1/2 text-xs pt-4 ml-2 mb-4">
          <div class="rounded-xl p-1 bg-gray-200">
            <p class="text-chatLeft font-medium text-[10px] ml-1">
              That sounds great. i'd be happy to discuss more.
            </p>
          </div>
          <div class="rounded-xl p-1 bg-gray-200">
            <p class="text-chatLeft font-medium text-[10px] ml-1">
              Could you send over some pictures of your dog, please?
            </p>
          </div>
        </div>
        <div class="flex justify-center mb-2">
          <div class="flex gap-2 w-10">
            <img class="rounded-xl" src="/images/dog-image-1.jpg" alt="" />
            <img class="rounded-xl" src="/images/dog-image-2.jpg" alt="" />
            <img class="rounded-xl" src="/images/dog-image-3.jpg" alt="" />
          </div>
        </div>
        <div class="flex flex-col mb-2">
          <div class="flex justify-end mb-2">
            <p
              class="w-1/2 text-[10px] mr-2 pl-3 p-1 rounded-xl bg-white text-chatLeft font-medium"
            >
              Here are a few pictures. She’s a happy girl!
            </p>
          </div>
          <div class="flex justify-end">
            <p
              class="w-1/2 text-[10px] mr-2 pl-3 p-1 rounded-xl bg-white text-chatLeft font-medium"
            >
              Can you make it?
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-2 w-1/2 text-xs ml-2 mb-4">
          <div class="rounded-xl p-1 bg-gray-200">
            <p class="text-chatLeft font-medium text-[10px] ml-1">
              She looks so happy! The time we discussed works. How long shall I
              take her out for?
            </p>
          </div>
        </div>
        <div class="flex flex-col w-1/2 text-xs ml-2">
          <div class="rounded-xl p-1 bg-gray-200">
            <p class="text-chatLeft font-medium text-[10px] ml-1">
              <button>test</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
