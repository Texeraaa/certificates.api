import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseEntity } from "./entity/course.entity";
import { CourseController } from "./course.controller";
import { CourseService } from "./course.service";

@Module({
    imports: [TypeOrmModule.forFeature([CourseEntity])],
    providers: [CourseService],
    controllers: [CourseController]
})

export class CourseModule{}