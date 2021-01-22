import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { ProfessorsModule } from './professors/professors.module';
import { MajorModule } from './major/major.module';
import { ClassModule } from './class/class.module';
import { DepartmentModule } from './department/department.module';
import { YearModule } from './Year/year.module';
import { SessionModule } from './session/session.module';
import { PfeModule } from './pfe/pfe.module';
import { SoutenanceModule } from './soutenance/soutenance.module';
import { EntrepriseController } from './entreprise/entreprise.controller';
import { EntrepriseModule } from './entreprise/entreprise.module';
import { SuperviserModule } from './superviser/superviser.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule,
    StudentsModule,
    ProfessorsModule,
    MajorModule,
    ClassModule,
    DepartmentModule,
    YearModule,
    SessionModule,
    PfeModule,
<<<<<<< HEAD
    SoutenanceModule
=======
    EntrepriseModule,
    SuperviserModule,
    ReportModule
>>>>>>> 3606f2514e93867567efac6911a146e1752c8bc7
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
