<template>
  <div class="lobi-form-builder-element">
    <h5>Element</h5>
    <LobiFormQuestion :element="element" :question="element.question"></LobiFormQuestion>
  </div>
</template>

<script>
  import LobiFormQuestion from "./LobiFormQuestion";
  export default {
    name: "LobiFormElement",
    components: {LobiFormQuestion},
    props: {
      section: Object,
      element: Object
    }
  }
</script>

<style scoped>

</style>
