/*
import { describe, expect, it, beforeEach } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'
/* import { faker } from '@faker-js/faker'
import { Prisma } from '@prisma/client' */
import { resetDatabase } from '~/prisma/utils'

await setup({
  server: true,
  browser: false
})

beforeEach(() => {
  resetDatabase()
})

describe('/api/list/', () => {
  it('GET returns an empty list when no lists exist', async () => {
    const result = await $fetch('/server/api/list/')
    expect(result.body).toStrictEqual([])
  })
})

describe('/api/list/:id', () => {
  it('GET returns 404 when id does not exist', async () => {
    const result = await $fetch('/api/list/1', {}).catch(error => error.data)
    expect(result).toStrictEqual({
      message: 'Failed to find example with id 1',
      stack: '',
      statusCode: 404,
      statusMessage: 'Failed to find list with id 1',
      url: '/api/example/1'
    })
  })

   it('POST creates an entity, then GET allows to fetch it', async () => {
    // 1. Create the entity and assert that it has the correct shape & values
    const listTest = {
      listId: faker.datatype.uuid(),
      userId: faker.datatype.uuid(),
      title: faker.lorem.sentence(),
      color: faker.color.human(),
      icon: faker.datatype.string(),
      tasks: []
    }
    const exampleToCreate: Prisma.ExampleCreateInput = { ...listTest }

    const exampleAfterUpsert = await $fetch(`/api/example/${faker.datatype.uuid()}`, {
      method: 'POST',
      body: exampleToCreate
    })

    expect(Object.keys(exampleAfterUpsert).sort()).toEqual(['listId', 'userId', 'title', 'color', 'icon', 'tasks'].sort())
    expect(exampleAfterUpsert.listId).toBe(exampleToCreate.listId)
    expect(exampleAfterUpsert.description).toBe(exampleToCreate.description)

    // 2. Fetch the entity from the GET endpoint
    const exampleFromGet = await $fetch(`/api/example/${exampleAfterUpsert.id}`)

    expect(exampleFromGet).toStrictEqual(exampleAfterUpsert)
  })
}) */
