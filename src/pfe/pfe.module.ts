import { Module } from '@nestjs/common';
import { PfeController } from './pfe.controller';
import { PfeService } from './pfe.service';
//Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectPfe, SubjectPfeSchema } from './sujet-pfe.model';
import { ProfessorsModule } from 'src/professors/professors.module';
import { StudentsModule } from 'src/students/students.module';
import { EntrepriseModule } from '../entreprise/entreprise.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SubjectPfe.name, schema: SubjectPfeSchema },
    ]),
    ProfessorsModule,
    StudentsModule,
    EntrepriseModule
  ],
  controllers: [PfeController],
  providers: [PfeService],
})
export class PfeModule {}
