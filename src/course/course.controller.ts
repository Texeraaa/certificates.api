import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { CourseService } from "./course.service";
import { CreateCourseDTO } from "./dto/createCourse.dto";

@Controller('/course')
export class CourseController{
    constructor(
        private courseService: CourseService
    ){}
    
    @Get()
    async readCourse(){
        const response = await this.courseService.readCourse()
        return response
    }

    @Post()
    @HttpCode(201)
    async createCourse(@Body() createCourseDTO: CreateCourseDTO){
        const response = await this.courseService.createCourse(createCourseDTO)
        return{
            status: 201,
            message: 'Curso criado com sucesso',
            return:{
                id: response.idCurso,
                curso: response.nomeCurso
            }
        }
    }
    
    @Delete('/:id')
    async deleteCourse(@Param('id') id: string){
        await this.courseService.deleteCourse(id)
        return{
            status: 200,
            message: 'Curso deletado com sucesso'
        }
    }
}