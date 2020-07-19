<template>

  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/app">App</router-link>
    </div>

    <div class="main-layout">
        <router-view/>
    </div>

  </div>
  
</template>


