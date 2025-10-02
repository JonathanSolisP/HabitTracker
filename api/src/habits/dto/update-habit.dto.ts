import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitDto } from './create-habit.dto';

export class UpdateHabitDto extends PartialType(CreateHabitDto) {
    // Add any additional properties or methods specific to updating a habit
}
