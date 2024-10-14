import { Injectable } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { PersonalEntity } from './entities/personal.entity';

@Injectable()
export class PersonalService {
  create(createPersonalDto: CreatePersonalDto) {
    return 'This action adds a new personal';
  }

  private readonly personals = [
    {
      personalId: 1,
      username: 'juan',
      password: 'cambiar',
    },
    {
      personalId: 2,
      username: 'maria',
      password: 'adivinar',
    },
  ];

  findAll() {
    return `This action returns all personal ALL`;
  }

  async findOne(username: string): Promise<PersonalEntity | undefined> {
    return this.personals.find(user => user.username === username);
  }

  update(id: number, updatePersonalDto: UpdatePersonalDto) {
    return `This action updates a #${id} personal`;
  }

  remove(id: number) {
    return `This action removes a #${id} personal`;
  }
}
