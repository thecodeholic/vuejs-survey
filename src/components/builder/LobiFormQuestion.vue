<template>
  <div class="lobi-form-builder-question">
    <b-row class="my-1">
      <b-col sm="3">
        <label for="input-none">No State:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input id="input-none" :state="null" placeholder="No validation"></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "LobiFormQuestion",
    props: {
      element: Object,
      question: Object
    }
  }
</script>

<style scoped>

</style>
