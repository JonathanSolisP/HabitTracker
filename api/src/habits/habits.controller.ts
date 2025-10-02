import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { Logger } from 'utils/logger';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService, private readonly logger: Logger) {}

  @Post()
  create(@Body() createHabitDto: CreateHabitDto) {
    return this.habitsService.create(createHabitDto);
  }

  @Get()
  findAll() {
    this.logger.log('Fetching all habits', 'HabitsController');
    return this.habitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.log(`Fetching habit with id ${id}`, 'HabitsController');
    return this.habitsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitsService.update(+id, updateHabitDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.logger.log(`Deleting habit with id ${id}`, 'HabitsController');
    return this.habitsService.delete(+id);
  }
}
