<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
const profileId = route.params.id;
</script>

<template>
  <div>
    <p>{{ profileId }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
