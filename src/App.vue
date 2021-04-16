<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full">
      <div class="flex flex-col px-2 bg-gray-200">
        <div id="nav" class="flex justify-center m-2 text-lg">
          <router-link class="text-2xl text-salmon-darkest" to="/">Home</router-link>
          <span class="px-2">|</span>
          <router-link class="text-2xl text-fuchsia-600" to="/operators">Operators</router-link>
          <span class="px-2">|</span>
          <router-link class="text-2xl text-green-600" to="/comment">Comment</router-link>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
