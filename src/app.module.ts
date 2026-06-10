import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { PromptsModule } from './modules/prompts/prompts.module';
import { RecommendationModule } from './modules/recommendation/recommendation.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(), // Setup event system for microservice readiness
    PrismaModule,
    AuthModule,
    PromptsModule,
    RecommendationModule,
  ],
})
export class AppModule {}
