import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { SoutenanceService } from './soutenance.service';
import { Soutenance, SoutenanceSchema } from './soutenance.model';
import { SoutenanceContoller } from './soutenance.contoller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Soutenance.name, schema: SoutenanceSchema },
    ]),
  ],
  providers: [SoutenanceService],
  controllers: [SoutenanceContoller],
})
export class SoutenanceModule {}
