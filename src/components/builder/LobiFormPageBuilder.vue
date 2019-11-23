<template>
  <div class="lobi-form-builder-page card mb-3" :class="{'page-folded': isFolded}">
    <div class="card-header">
      {{formPage.name}}
      <b-button @click="deletePage()" pill size="sm" variant="outline-dark" class="float-right">
        <font-awesome-icon :icon="'trash-alt'" />
      </b-button>
    </div>
    <div class="card-body">
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
    },
    methods: {
      deletePage(){
        this.$emit('deletePage', this.formPage);
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
