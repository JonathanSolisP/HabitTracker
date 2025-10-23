import { frequency } from "src/commons/enums/frequency.enum";
import { ApiProperty, ApiTags } from "@nestjs/swagger";

@ApiTags('Habit')
export class Habit {
    @ApiProperty({ example: '00000000-0000-0000-0000-000000000000' })
    id: string;
    @ApiProperty({ example: 'Habit Name' })
    name: string;
    @ApiProperty({ example: 'Habit Description' })
    description?: string;
    @ApiProperty({ example: '2025-10-23T00:00:00.000Z' })
    createdAt?: Date;
    @ApiProperty({ example: '1: daily, 2: weekly, 3: monthly, 4: biweekly, 5: yearly', enum: frequency })
    frequency: frequency;
    @ApiProperty({ example: 'Habit Target' })
    target: string;
    @ApiProperty({ example: 'false' })
    completed: boolean;
}

