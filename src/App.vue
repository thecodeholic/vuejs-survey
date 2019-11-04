<template>
  <div id="app">
    <LobiFormBuilder/>
    <HelloI18n/>
    {{ $t('message')}}
  </div>
</template>

<script>

  import HelloI18n from "./components/HelloI18n";
  import LobiFormBuilder from "./components/builder/LobiFormBuilder";

  export default {
    name: 'app',
    components: {LobiFormBuilder, HelloI18n}
  }
</script>

<style>
</style>
