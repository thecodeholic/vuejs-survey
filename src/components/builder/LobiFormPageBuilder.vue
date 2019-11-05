<template>
  <div class="lobi-form-builder-page" :class="{'page-folded': isFolded}">
    <div>
      <h1>Form Page</h1>
      <LobiFormSectionBuilder v-for="(section, index) in formPage.sections"
                              :key="index"
                              :form-object="formObject"
                              :form-page="formPage"
                              :section="section"></LobiFormSectionBuilder>
    </div>
  </div>
</template>

<script>
  import LobiFormSectionBuilder from "./LobiFormSectionBuilder";
  export default {
    name: "LobiFormPageBuilder",
    components: {LobiFormSectionBuilder},
    props: {
      formPage: Object,
      formObject: Object,
      readOnly: Boolean,
      isFirst: Boolean,
      isLast: Boolean
    },
    data() {
      return {
        isFolded: false
      }
    }
  }
</script>

<style scoped>

</style>
