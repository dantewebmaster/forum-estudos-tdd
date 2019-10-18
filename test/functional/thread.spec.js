'use strict'

const { test, trait } = use('Test/Suite')('Thread')

trait('Test/ApiClient')

test('can create threads', async ({ client }) => {
  const response = await client.post('/threads').send({
    title: 'test title',
    body: 'body',
  }).end()

  response.assertStatus(200)
})
