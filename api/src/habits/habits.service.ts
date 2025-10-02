import { Injectable } from '@nestjs/common';
import { createSupabaseClient, TABLE_NAMES } from 'utils/supabase-util';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Habit } from './entities/habit.entity';

const supabase = createSupabaseClient();

@Injectable()
export class HabitsService {
  async create(createHabitDto: CreateHabitDto): Promise<Habit> {
    const { data, error } = await supabase.from(TABLE_NAMES.HABITS)
      .insert(createHabitDto)
      .select('*')
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async findAll(): Promise<Habit[]> {
    const { data, error } = await supabase.from(TABLE_NAMES.HABITS)
      .select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async findOne(id: number): Promise<Habit> {
    const { data, error } = await supabase.from(TABLE_NAMES.HABITS)
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async update(id: number, updateHabitDto: UpdateHabitDto) {
    const { data, error } = await supabase.from(TABLE_NAMES.HABITS)
      .update(updateHabitDto)
      .eq('id', id)
      .select('*')
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async delete(id: number): Promise<void> {
    const { error } = await supabase.from(TABLE_NAMES.HABITS)
      .delete()
      .eq('id', id);
    if (error) {
      throw new Error(error.message);
    }
  }
}
