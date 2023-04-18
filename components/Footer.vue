<template></template>

<style lang="scss" scoped>
@import '@/scss/abstracts';
.footer {
  height: $footer-height;
  vertical-align: center;
  width: 100%;
  background: transparent;
  color: $gray-6;
  font-size: pxToRem(12);
  text-align: center;
  padding: pxToRem(16px) pxToRem(10px) pxToRem(6px);
  &__link {
    color: inherit;
    @include hoctive {
      color: $gray-6;
    }
  }
}
</style>
