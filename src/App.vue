<template>
  <div id="app">
<!--    <pre>{{formData}}</pre>-->
    <LobiFormBuilder form-name="testForm" :form-data="formData" :read-only="readOnly"/>
    <HelloI18n/>
    {{ $t('message')}}
  </div>
</template>

<script>

  import HelloI18n from "./components/HelloI18n";
  import LobiFormBuilder from "./components/builder/LobiFormBuilder";

  export default {
    name: 'app',
    components: {
      LobiFormBuilder,
      HelloI18n
    },
    data() {
      return {
        formData: {
          pages: [
            {
              sections: [
                {},
                {},
              ]
            },
            {
              sections: [
                {
                  elements: [
                    {

                    }
                  ]
                }
              ]
            }
          ]
        },
        readOnly: false
      }
    }
  }
</script>

<style>
</style>
