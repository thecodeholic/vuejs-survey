<template>
  <form :name="formName" role="form" novalidate>
    <div class="mw-title-page">

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
  </form>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
    name: "LobiFormBuilder",
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
