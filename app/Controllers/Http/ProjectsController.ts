import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from "App/Models/Project";
export default class ProjectsController {
    // 전체 목록
    public async index ({}: HttpContextContract) {
      const projects = await Project.all();
      return projects;
    }

    // project data 생성
    public async store ({auth, request}: HttpContextContract) {
      const data = request.only(['title', 'imageSrc', 'content', 'link']);;

      const project = new Project();
      project.userId = auth.user!.id;
      project.title = data.title;
      project.imageSrc = data.imageSrc;
      project.content = data.content;
      project.link = data.link;

      return await project.save();
    }

    // project data 조회
    public async show ({params}: HttpContextContract) {
      return await Project.query().where('id', params.id).firstOrFail();
    }

    // project data 수정
    public async update ({}: HttpContextContract) {

    }

    // project data 삭제
    public async destroy ({ auth, params }: HttpContextContract) {
      await Project.query().where('user_id', auth.user!.id).where('id', params.id).delete();
      return 'ok';
    }
}
