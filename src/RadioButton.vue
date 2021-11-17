<template>
    <input type="radio" :change="onChange" value="klaus" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'RadioButton',
})
</script>
