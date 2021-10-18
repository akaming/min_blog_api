import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from "App/Models/Project";

export default class ProjectsController {
    // 전체 목록
    public async index ({}: HttpContextContract) {
      const projects = await Project.all();
      return projects;
    }

    // project data 생성
    public async store ({request}: HttpContextContract) {
      const data = request.only(['title', 'imageSrc', 'content', 'link']);;

      const project = new Project();
      project.merge(data);

      await project.save();

      return project;
    }

    // project data 조회
    public async show ({}: HttpContextContract) {

    }

    // project data 수정
    public async update ({}: HttpContextContract) {
    }

    // project data 삭제
    public async destroy ({}: HttpContextContract) {
    }
}
