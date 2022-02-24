<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img src="./assets/images/tomato.png">
        <span class="activebackground"></span>
      </router-link>
      <router-link to="/settings">
        <img src="./assets/images/misic.png" />
        <span class="activebackground"></span>
      </router-link>
      <router-link to="/list">
        <img src="./assets/images/chart.png" />
        <span class="activebackground"></span>
      </router-link>
    </div>
    <keep-alive include="Home">
      <router-view />
    </keep-alive>
  </div>
</template>
