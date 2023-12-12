<script setup lang="ts">
import ColorPicker from './ColorPicker.vue'
import IconsPicker from './IconsPicker.vue'
import { List } from '~~/types'
import { validateList } from '~~/utils/validations'

const emit = defineEmits(['listAdded'])

const errorMsg = ref('')

// check form handling
const addListHandler = async (e: any) => {
  const listData: List = {
    userId: 'id',
    title: e.target.listName.value,
    color: e.target.color.value,
    icon: e.target.icon.value
  }
  const validationError = validateList(listData)

  if (validationError) {
    errorMsg.value = validationError
    return
  }

  const { error } = await useFetch('/api/list/', {
    method: 'POST',
    body: listData
  })

  if (error.value) {
    errorMsg.value = error.value.message
    return
  }

  emit('listAdded', listData)
}
</script>

<template>
  <div class="form-container">
    <form class="list-form" @submit.prevent="addListHandler">
      <h1 v-if="errorMsg" class="error">
        {{ errorMsg }}
      </h1>
      <div>
        <label for="listName">List Name:</label>
        <input id="listName" type="text" name="listName">
      </div>

      <ColorPicker />
      <IconsPicker />
      <button>
        Add
      </button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  @apply flex flex-col w-full h-60 text-slate-200 font-mono text-2xl bg-slate-800  z-50 border-2 border-yellow-400 rounded-tl-none rounded-3xl hover:shadow-sm hover:scale-105 transition-all duration-200 shadow-2xl;
}
.list-form {
  @apply flex flex-col px-20 py-5 justify-center items-center;
}
input {
  @apply text-black;
}

.error{
  @apply text-red-500 text-center text-xl font-mono mb-2;
}
</style>
