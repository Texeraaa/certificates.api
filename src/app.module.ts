import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MysqlConfigService } from './config/mysql.config.service';
import { EventModule } from './event/event.module';
import { ParticipantModule } from './participant/participant.module';
import { ParticipantEventModule } from './participant-event/participant-event.module';
import { EventPaperModule } from './event-paper/event-paper.module';

@Module({
  imports: [
    EventModule,
    ParticipantModule,
    ParticipantEventModule,
    EventPaperModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: MysqlConfigService,
      inject: [MysqlConfigService]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
