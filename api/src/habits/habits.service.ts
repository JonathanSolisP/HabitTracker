import { Injectable } from '@nestjs/common';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL ?? '';
const SUPABASE_SECRET = process.env.SUPABASE_SECRET ?? '';

const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET);

@Injectable()
export class HabitsService {
  create(createHabitDto: CreateHabitDto) {
    return 'This action adds a new habit';
  }

  async findAll() {
    const { data, error } = await supabase.from('Habits')
      .select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} habit`;
  }

  update(id: number, updateHabitDto: UpdateHabitDto) {
    return `This action updates a #${id} habit`;
  }

  remove(id: number) {
    return `This action removes a #${id} habit`;
  }
}
