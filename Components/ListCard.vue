<script setup lang='ts'>
import { PropType } from 'nuxt/dist/app/compat/capi'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { List } from '~~/types'

const queryClient = useQueryClient()
const props = defineProps({
  list: {
    type: Object as PropType<List>,
    required: true
  }
})

const deleteListFn = async (listId: string) => {
  const { data, error } = await useFetch(`/api/list/${listId}`, {
    method: 'DELETE'
  })
  // eslint-disable-next-line no-console
  console.log(data, error)
}

const { mutate: deleteListMutation } = useMutation({
  mutationFn: deleteListFn,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['lists'] })
  }
})

const deleteListHandler = (e) => {
  e.stopPropagation()
  deleteListMutation(e.target.id)
  // eslint-disable-next-line no-console
  console.log('list deleted', e.target.id)
}

</script>

<template>
  <div>
    <div class="list-card" :style="'background-color: ' + props.list.color">
      <h1 class="icon" v-html="list.icon" />
      <h1 :id="props.list.id" class="close" @click="deleteListHandler">
        X
      </h1>
      <div class="list-content">
        <h1>{{ props.list.title }} ></h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-card {
  @apply flex flex-col-reverse w-32 h-32 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 border-2 border-yellow-400 hover:shadow-sm hover:scale-105 transition-all duration-200 rounded-3xl rounded-tl-none shadow-2xl  relative;
}
.list-content {
  @apply p-4 text-sm md:text-2xl lg:text-3xl font-mono ;
}
.icons-container {
  @apply flex justify-between items-center  bg-sky-400 rounded-3xl rounded-tl-none bg-opacity-30;
}
.icon {
  @apply w-32 h-32 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 absolute  text-8xl lg:text-8xl  opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200;
}
.close {
  @apply text-xl font-bold absolute top-0 right-0 px-4 py-1 m-2 opacity-25 hover:opacity-100 shadow-md bg-red-600 rounded-2xl;
}
</style>
