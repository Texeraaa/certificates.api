import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from './entity/course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDTO } from './dto/createCourse.dto';

export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseService: Repository<CourseEntity>,
  ) {}

  async readCourse() {
    return await this.courseService.find();
  }

  async createCourse(createCourseDTO: CreateCourseDTO) {
    return await this.courseService.save(createCourseDTO);
  }

  async deleteCourse(idCurso: string) {
    return await this.courseService.delete(idCurso);
  }
}
