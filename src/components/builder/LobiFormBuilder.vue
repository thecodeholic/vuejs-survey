<template>
  <div class="lobi-form-builder">
    <form :name="formName" role="form" novalidate>
      <div class="lobi-title-page">

        <b-form-group
                :label="$t('lobiForm.form.name')"
                label-for="formName"
        >
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
        <b-form-group
                :label="$t('lobiForm.form.description')"
                label-for="formDescription"
        >
          <ckeditor :editor="editor" v-model="formData.description"></ckeditor>

        </b-form-group>
      </div>
      <div class="form-page-list">
            <LobiFormPageBuilder ng-repeat="page in ctrl.formData.pages| mwStartFrom:ctrl.currentPage * ctrl.options.pageSize | limitTo:ctrl.options.pageSize" form-page="page" form-object="ctrl.formData" is-first="$first" is-last="$last" read-only="ctrl.readOnly"></LobiFormPageBuilder>
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
    }
  }
</script>

<style scoped>

</style>
