<template>
  <div id="app">
    <el-menu 
    :default-active="$route.path"
    class="el-menu-demo"
    mode="horizontal"
    router="true"
    background-color=""
    text-color=""
    active-text-color="#42b983">
      <el-menu-item index="/"><img alt="Vue logo" src="./assets/logo.png" height="20px"></el-menu-item>
      <el-menu-item index="/elements">Elements</el-menu-item>
      <el-menu-item style="float: right;">
        <el-input placeholder="Search" size="small" prefix-icon="el-icon-search"></el-input>
      </el-menu-item>
      
    </el-menu>
    <div class="line"></div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./styles/index.scss";

</style>
