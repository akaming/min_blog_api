import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from "App/Models/Project";

export default class ProjectsController {
    // 목록
    public async index ({}: HttpContextContract) {
      const projects = await Project.all();
      return projects;
    }

    // 개별 생성
    public async store ({}: HttpContextContract) {
      const project = new Project();
      project.title = "제목";
      project.imageSrc = "이미지";
      project.content = "본문";
      project.link = "url";
      await project.save();

      return project;
    }

    // 개별 조회
    public async show ({}: HttpContextContract) {
    }

    // 개별 수정
    public async update ({}: HttpContextContract) {
    }

    // 개별 삭제
    public async destroy ({}: HttpContextContract) {
    }
}
