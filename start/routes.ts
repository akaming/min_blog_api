/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/projects', "ProjectsController.index"); // 목록
Route.post('projects', "ProjectsController.store");   // 신규 생성
Route.get('projects/:id', "ProjectsController.show");    // 개별 조회
Route.patch('projects/:id', "ProjectsController.update");    // 개별 수정
Route.delete('projects/:id', "ProjectsController.destory");   // 게뱔 삭제
Route.post('sign-in', "AuthController.signIn");
