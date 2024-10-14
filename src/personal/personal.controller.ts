import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { Public } from 'src/auth/decorators/public..decorator';

@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Post()
  create(@Body() createPersonalDto: CreatePersonalDto) {
    return this.personalService.create(createPersonalDto);
  }

  @Get()
  // @Public()
  findAll() {
    return this.personalService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.personalService.findOne(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonalDto: UpdatePersonalDto) {
    return this.personalService.update(+id, updatePersonalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalService.remove(+id);
  }
}
