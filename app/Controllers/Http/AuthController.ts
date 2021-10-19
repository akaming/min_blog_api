// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from "@ioc:Adonis/Core/Hash";
import Users from "App/Models/Users";

export default class AuthController {

  public async signIn({request, auth, response}) {
    const user_id = request.input('user_id');
    const password = request.input('password');

    const user = await Users.findByOrFail('user_id', user_id);

    if(await Hash.verify(user.password, password)) {
      const token = await auth.use('api').generate(user);
      return {
        user,
        token
      };
    } else {
      response.status(403);
      return {massage: '비밀번호 불일치'};
    }
  }
}
