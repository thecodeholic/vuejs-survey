<template>
  <div id="app">
    <!--    <pre>{{formData}}</pre>-->
    <LobiFormBuilder form-name="testForm" :form-data="formData" :read-only="readOnly"/>
    <pre>{{formData | json}}</pre>
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
              name: 'My Sample page',
              sections: [
                {
                  elements: [
                    {
                      type: 1,
                      question: {
                        type: 'text',
                        text: 'What is your name?'
                      }
                    }
                  ]
                },
                {
                  elements: [
                    {
                      type: 1,
                      question: {
                        type: 'text'
                      }
                    }
                  ]
                },
              ]
            },
            {
              name: 'My Second page',
              sections: [
                {
                  elements: [
                    {
                      type: 1,
                      question: {
                        type: 'text'
                      }
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

<style lang="scss">
  #app {
    background-color: #eeeeee;
    padding: 40px;
  }
</style>
