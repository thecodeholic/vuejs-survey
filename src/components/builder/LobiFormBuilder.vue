<template>
  <div class="lobi-form-builder">
      <form :name="formName" role="form" novalidate>
        <div class="lobi-title-page">

          <b-form-group :label="$t('lobiForm.form.name')" label-for="formName">
            <b-form-input
                    type="text"
                    name="formName"
                    id="formName"
                    v-model="formData.name"
                    :readonly="readOnly"
                    :placeholder="$t('lobiForm.form.name_placeholder')"
                    required
            ></b-form-input>
          </b-form-group>
          <b-form-group :label="$t('lobiForm.form.description')" label-for="formDescription">
            <ckeditor :editor="editor" v-model="formData.description"></ckeditor>
          </b-form-group>
        </div>
        <div class="form-page-list">
          <LobiFormPageBuilder v-for="(page, index) in formData.pages"
                               v-bind:key="index"
                               :form-page="page"
                               :form-object="formData"
                               :is-first="index === 0"
                               :is-last="index === formData.pages.length -1"
                               :read-only="readOnly" @deletePage="deletePage"></LobiFormPageBuilder>
        </div>
        <div class="text-right">
          <b-button @click="addPage()">{{$t('lobiForm.form.addPage')}}</b-button>
        </div>
      </form>
  </div>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import LobiFormPageBuilder from "./LobiFormPageBuilder";

  export default {
    name: "LobiFormBuilder",
    components: {LobiFormPageBuilder},
    props: {
      formName: String,
      formData: Object,
      readOnly: Boolean,
    },
    data() {
      return {
        editor: ClassicEditor
      }
    },
    methods: {
      addPage(){
        this.formData.pages.push({
          name: `Page #${this.formData.pages.length + 1}`
        });
      },
      deletePage(p){
        this.formData.pages = this.formData.pages.filter(page => page !== p);
      }
    }
  }
</script>

<style scoped>

</style>
