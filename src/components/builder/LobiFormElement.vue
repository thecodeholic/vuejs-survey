<template>
  <div class="lobi-form-builder-element">
<!--    <h5>Element</h5>-->
    <LobiFormQuestion v-if="element.type === TYPE_QUESTION" :element="element" :question="element.question"></LobiFormQuestion>
  </div>
</template>

<script>
  import LobiFormQuestion from "./LobiFormQuestion";
  export default {
    name: "LobiFormElement",
    components: {LobiFormQuestion},
    data: () => {
      return {
        TYPE_QUESTION: 1
      }
    },
    props: {
      section: Object,
      element: Object
    }
  }
</script>

<style scoped>

</style>
