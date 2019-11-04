<template>
  <div class="lobi-form-page-builder" :class="{'page-folded': isFolded}">
    <div @mouseover="hoverIn()" @mouseleave="hoverOut()">
      <div class="mw-page-tab-container">
        <div class="mw-form-page-tab">
          <span class="mw-page-tab-text" role="heading" translate="mwForm.page.tab.heading"
                translate-values="{page: ctrl.formPage.number, allPages:ctrl.formObject.pages.length}">Strona 1 z 3</span>
          <span class="mw-page-tab-checkbox">
                    <label>
                        <input type="checkbox" ng-model="ctrl.formPage.namedPage" ng-disabled="ctrl.readOnly"><span
                            class="mw-page-tab-checkbox-text" translate="mwForm.page.pageWithNameCheckbox">named</span>
                    </label>
                </span>
        </div>
        <div class="mw-page-tab-triangle"></div>
        <div class="mw-page-tab-actions" ng-switch="ctrl.readOnly">
          <button type="button" class="fold-button" ng-click="ctrl.fold()"
                  ng-attr-title="{{'mwForm.buttons.fold' | translate}}"
                  uib-popover="{{'mwForm.buttons.fold' | translate}}" popover-trigger="mouseenter"
                  popover-placement="top">
            <i class="fa fa-compress"></i>
          </button>
          <button type="button" class="unfold-button" ng-click="ctrl.unfold()"
                  ng-attr-title="{{'mwForm.buttons.unfold' | translate}}"
                  uib-popover="{{'mwForm.buttons.unfold' | translate}}" popover-trigger="mouseenter"
                  popover-placement="top">
            <i class="fa fa-expand"></i>
          </button>
          <button type="button" class="move-down-button" ng-click="ctrl.moveDown()" ng-if="!ctrl.isLast"
                  ng-switch-when="false"
                  ng-attr-title="{{'mwForm.buttons.moveDown' | translate}}"
                  uib-popover="{{'mwForm.buttons.moveDown' | translate}}" popover-trigger="mouseenter"
                  popover-placement="top">
            <i class="fa  fa-chevron-down"></i>
          </button>
          <button type="button" class="move-up-button" ng-click="ctrl.moveUp()" ng-if="!ctrl.isFirst"
                  ng-switch-when="false"
                  ng-attr-title="{{'mwForm.buttons.moveUp' | translate}}"
                  uib-popover="{{'mwForm.buttons.moveUp' | translate}}" popover-trigger="mouseenter"
                  popover-placement="top">
            <i class="fa fa-chevron-up"></i>
          </button>
          <button type="button" class="remove-button" mw-confirm-click confirmed-action="ctrl.removePage()"
                  ng-switch-when="false"
                  ng-attr-title="{{'mwForm.buttons.removePage' | translate}}"
                  uib-popover="{{'mwForm.buttons.removePage' | translate}}" popover-trigger="mouseenter"
                  popover-placement="top">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LobiFormPageBuilder",
    data() {
      return {
        isFolded: false
      }
    }
  }
</script>

<style scoped>

</style>
