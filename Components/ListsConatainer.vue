<script setup lang='ts'>
import ListForm from './Form/ListForm.vue'
import CreateListcard from '~~/Components/CreateListcard.vue'
import ListCard from '~~/Components/ListCard.vue'
import { List } from '~~/types'

// check how to handle data fetching as it is ususally in lifecycle hook
const { data } = await useFetch('/api/list/')

const showForm = ref(false)

const lists: List[] = data.value as List[]

const selectListHandler = (e: string) => {
  navigateTo(`/list/${e}`)
}

const addListHandler = (payload: List) => {
  lists.push(payload)
}

const showFormHandler = () => {
  showForm.value = !showForm.value
}

</script>

<template>
  <div class="lists-container">
    <div class="lists">
      <ListCard
        v-for="list in lists"
        :key="list.id"
        :list="list"
        @click="selectListHandler(list.id)"
      />
      <CreateListcard v-if="!showForm" @click="showFormHandler" />
      <div v-if="showForm" class="list-form" @click="showFormHandler">
        <ListForm class="add-list" @list-added="addListHandler" @click.stop />
      </div>
    </div>
  </div>
</template>

<style scoped>
.lists-container {
  @apply w-screen flex justify-center items-center relative;
}
.lists {
  @apply grid grid-cols-2 lg:grid-cols-3 gap-4 m-10 w-9/12 md:w-7/12;
}

.add-list {
  @apply m-10 w-8/12;
}

.list-form{
  @apply fixed w-screen h-screen flex justify-center items-center top-0 right-0 bg-black bg-opacity-30;
}

</style>
