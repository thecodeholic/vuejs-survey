<template>
  <div class="lobi-form-builder-section">
    <h3>Section</h3>
    <LobiFormElement v-for="(element, index) in section.elements"
                     :key="index"
                     :section="section"
                     :element="element"></LobiFormElement>
  </div>
</template>

<script>
  import LobiFormElement from "./LobiFormElement";
  export default {
    name: "LobiFormSectionBuilder",
    components: {LobiFormElement},
    props: {
      formPage: Object,
      formObject: Object,
      section: Object
    }
  }
</script>

<style scoped>

</style>
