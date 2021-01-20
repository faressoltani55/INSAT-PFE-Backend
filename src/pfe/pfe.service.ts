import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SubjectPfe, SubjectPfeDocument } from './sujet-pfe.model';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePfeDto } from './dtos/createPfeDto';
import { UpdatePfeDto } from './dtos/updatePfeDto';
import { UpdateStatusPfeDto } from './dtos/updateStatusPfeDto';
import { SubjectStatus } from './enums/subject-status.enum';

@Injectable()
export class PfeService {
  constructor(
    @InjectModel(SubjectPfe.name)
    private readonly pfeModel: Model<SubjectPfeDocument>,
  ) {}

  async create(createPfeDto: CreatePfeDto): Promise<SubjectPfe> {
    console.log(new this.pfeModel());
    const createdPfe = new this.pfeModel(createPfeDto);
    console.log(createPfeDto);
    return createdPfe.save();
  }

  async findAll(status : SubjectStatus): Promise<SubjectPfe[]> {
    return this.pfeModel.find({status: status}).exec();
  }

  async findById(id): Promise<SubjectPfe> {
    return await this.pfeModel.findById(id).exec();
  }

  async update(id, updatePfeDto: UpdatePfeDto): Promise<any> {
    return await this.pfeModel.findByIdAndUpdate(id, updatePfeDto, {
      new: true,
    });
  }

  async updateStatus(id, updateStatusPfeDto: UpdateStatusPfeDto): Promise<any> {
    return await this.pfeModel.findByIdAndUpdate(id, updateStatusPfeDto, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.pfeModel.findByIdAndRemove(id);
  }
}
