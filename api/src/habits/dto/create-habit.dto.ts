import { ApiProperty } from "@nestjs/swagger";
import { frequency } from "src/commons/enums/frequency.enum";

export class CreateHabitDto {
    @ApiProperty({ example: 'Habit Name' })
    name: string;

    @ApiProperty({ example: 'Habit Description' })
    description?: string;

    @ApiProperty({ enum: frequency })
    frequency: frequency;

    @ApiProperty({ example: 'Habit Target' })
    target: string;
}
