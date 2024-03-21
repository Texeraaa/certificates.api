import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { CourseService } from "./course.service";
import { CreateCourseDTO } from "./dto/createCourse.dto";
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CourseResponseDTO } from "./dto/courseResponse.dto";

@ApiTags('Course')
@Controller('/course')
export class CourseController{
    constructor(
        private courseService: CourseService
    ){} 
    
    @Get()
    @ApiResponse({status: 200, description: 'Retorna uma lista de cursos cadastrados', type: CourseResponseDTO, isArray: true})
    async read(){
        const response = await this.courseService.readCourse()
        return response
    }

    @Post()
    @HttpCode(201)
    @ApiOperation({summary: 'Criar um novo curso'})
    @ApiResponse({status:201,description: 'Curso criado com sucesso!'})
    @ApiBody({type: CreateCourseDTO,description: 'Dados do curso'})
    async create(@Body() createCourseDTO: CreateCourseDTO){
        const response = await this.courseService.createCourse(createCourseDTO)
        return{
            status: 201,
            message: 'Curso criado com sucesso!',
            return:{
                id: response.idCurso,
                curso: response.nomeCurso
            }
        }
    }
    
    @Delete('/:id')
    @ApiOperation({summary: 'Deleta um curso pelo ID'})
    @ApiResponse({status: 200,description: 'Curso deletado com sucesso'})
    @ApiParam({name: 'id', description: 'ID do curso a ser deletado',type: String})
    async delete(@Param('id') id: string){
        await this.courseService.deleteCourse(id)
        return{
            status: 200,
            message: 'Curso deletado com sucesso'
        }
    }
}