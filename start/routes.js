'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('', 'ThreadController.store')
    .middleware('auth').validator('StoreThread')

  Route.put(':id', 'ThreadController.update')
    .middleware('auth', 'modifyThreadPolicy').validator('StoreThread')

  Route.delete(':id', 'ThreadController.destroy')
    .middleware('auth', 'modifyThreadPolicy')

  Route.get('', 'ThreadController.index')
  Route.get(':id', 'ThreadController.show')
}).prefix('threads')
