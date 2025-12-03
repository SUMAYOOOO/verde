import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CoursesModule } from './modules/courses/courses.module';
import { TopicsModule } from './modules/topics/topics.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [AuthModule, CoursesModule, TopicsModule, PaymentsModule],
})
export class AppModule {}
