<script setup>
import ColorPicker from './ColorPicker.vue'
import IconsPicker from './IconsPicker.vue'

const emit = defineEmits(['listAdded'])

const errorMsg = ref(null)

const addListHandler = async (e) => {
  const listData = {
    title: e.target.listName.value,
    color: e.target.color.value,
    icon: e.target.icon.value
  }
  if (listData.title.trim() === '') {
    errorMsg.value = 'List name cannot be empty'
    return
  }
  if (listData.color.trim() === '') {
    errorMsg.value = 'List color cannot be empty'
    return
  }
  const { error } = await useFetch('/api/list/', {
    method: 'POST',
    body: listData
  })

  errorMsg.value = error.value.message

  emit('listAdded', listData)
}
</script>

<template>
  <div class="form-container">
    <form class="list-form" @submit.prevent="addListHandler">
      <h1 v-if="errorMsg">
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
</style>
