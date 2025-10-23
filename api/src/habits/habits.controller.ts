import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { HabitsService } from './habits.service';
import { Logger } from 'utils/logger';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Habit } from './entities/habit.entity';

@ApiTags('Habits')
@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService, private readonly logger: Logger) {}

  @Post()
  @ApiCreatedResponse({ type: Habit })
  create(@Body() createHabitDto: CreateHabitDto) {
    return this.habitsService.create(createHabitDto);
  }

  @Get()
  @ApiOkResponse({ type: [Habit] })
  findAll() {
    this.logger.log('Fetching all habits', 'HabitsController');
    return this.habitsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Habit })
  findOne(@Param('id') id: string) {
    this.logger.log(`Fetching habit with id ${id}`, 'HabitsController');
    return this.habitsService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ type: Habit })
  update(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitsService.update(+id, updateHabitDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Habit })
  delete(@Param('id') id: string) {
    this.logger.log(`Deleting habit with id ${id}`, 'HabitsController');
    return this.habitsService.delete(+id);
  }
}
