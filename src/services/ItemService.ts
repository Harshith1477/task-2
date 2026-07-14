import { ItemRepository, Item } from '../repositories/ItemRepository';

export class ItemService {
  constructor(private repo: ItemRepository) {}

  async createItem(name: string): Promise<Item> {
    if (!name || name.trim().length === 0) {
      throw new Error('Name is required');
    }
    return this.repo.create(name);
  }

  async getAllItems(): Promise<Item[]> {
    return this.repo.findAll();
  }

  async getItem(id: number): Promise<Item | null> {
    return this.repo.findById(id);
  }

  async deleteItem(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}