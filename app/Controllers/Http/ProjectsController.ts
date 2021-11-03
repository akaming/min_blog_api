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
    public async update ({ auth, params, request, response }: HttpContextContract) {
      const project: Project = await Project.query().where('user_id', auth.user!.id).where('id', params.id).firstOrFail();
      const title = request.input('title');
      const imageSrc = request.input('imageSrc');
      const content = request.input('content');
      const link = request.input('link');

      if (project.userId !== auth.user!.id) {
        response.status(403); // 권한 없음 에러 403
        return { message: '수정할 권한이 없습니다.' };
      }

      project.title = title;
      project.imageSrc = imageSrc;
      project.content = content;
      project.link = link;

      await project.save(); //저장
      return project;
    }

    // project data 삭제
    public async destroy ({ auth, params }: HttpContextContract) {
      await Project.query().where('user_id', auth.user!.id).where('id', params.id).delete();
      return 'ok';
    }
}
