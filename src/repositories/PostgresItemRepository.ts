import { pool } from '../db';
import { Item, ItemRepository } from './ItemRepository';

export class PostgresItemRepository implements ItemRepository {
  async create(name: string): Promise<Item> {
    const result = await pool.query(
      'INSERT INTO items (name) VALUES ($1) RETURNING id, name, created_at',
      [name]
    );
    return this.mapRow(result.rows[0]);
  }

  async findAll(): Promise<Item[]> {
    const result = await pool.query('SELECT id, name, created_at FROM items ORDER BY id');
    return result.rows.map(this.mapRow);
  }

  async findById(id: number): Promise<Item | null> {
    const result = await pool.query(
      'SELECT id, name, created_at FROM items WHERE id = $1',
      [id]
    );
    return result.rows[0] ? this.mapRow(result.rows[0]) : null;
  }

  async delete(id: number): Promise<void> {
    await pool.query('DELETE FROM items WHERE id = $1', [id]);
  }

  private mapRow(row: any): Item {
    return { id: row.id, name: row.name, createdAt: row.created_at };
  }
}