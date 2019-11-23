<template>
  <div class="lobi-form-builder-section card mb-3">
    <div class="card-header">
      Section
    </div>
    <div class="card-body">
      <LobiFormElement v-for="(element, index) in section.elements"
                       :key="index"
                       :section="section"
                       :element="element"></LobiFormElement>
    </div>
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
