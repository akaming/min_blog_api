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

Route.get('/projects', "ProjectsController.index"); // 전체 목록
Route.post('/sign-in', "AuthController.signIn");
Route.get('/projects/:id', "ProjectsController.show");    // project data 조회

Route.group(()=> {
  Route.post('/projects', "ProjectsController.store");   // project data 생성
  Route.patch('/projects/:id', "ProjectsController.update");    // project data 수정
  Route.delete('/projects/:id', "ProjectsController.destory");   // project data 삭제
}).middleware('auth');
