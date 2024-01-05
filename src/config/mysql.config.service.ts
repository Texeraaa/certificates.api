import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class MysqlConfigService implements TypeOrmOptionsFactory{
    constructor(private configService: ConfigService){}
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return{
            type: 'mysql',
            host: 'localhost',
            port: 8080,
            username: 'root',
            password: 'user.root',
            database: 'easycert',
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
            synchronize: false
        }
    }
}