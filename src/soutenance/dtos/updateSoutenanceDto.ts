import { Room } from '../enums/room.enum';
import { CreateProfessorDto } from '../../professors/DTO-Professor/create-professor.dto';
import { CreatePfeDto } from '../../pfe/dtos/createPfeDto';

export class UpdateSoutenanceDto {
  readonly room: Room;
  readonly dateTime: Date;
  readonly subjectPfe: CreatePfeDto;
  readonly jury: CreateProfessorDto[];
  readonly president: CreateProfessorDto[];
}
