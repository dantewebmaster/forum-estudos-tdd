'use strict'

const Thread = use('App/Models/Thread')
const { validate } = use('Validator')

class ThreadController {
  async store({ request, auth, response }) {
    const thread = await auth.user.threads().create(request.only(['title', 'body']))

    return response.json({ thread })
  }

  async destroy({ params }) {
    await Thread.query().where('id', params.id).delete()
  }

  async update({ request, auth, params, response }) {
    const thread = await Thread.findOrFail(params.id)

    thread.merge(request.only(['title', 'body']))
    await thread.save()
    return response.json({ thread })
  }

  async index({ response }) {
    const threads = await Thread.all()
    return response.json({ threads })
  }

  async show({ params, response }) {
      const thread = await Thread.findOrFail(params.id)
      return response.json({ thread })
  }
}

module.exports = ThreadController
