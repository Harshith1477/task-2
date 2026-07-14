import { Item, ItemRepository } from './ItemRepository';

export class InMemoryItemRepository implements ItemRepository {
  private items: Item[] = [];
  private nextId = 1;

  async create(name: string): Promise<Item> {
    const item: Item = { id: this.nextId++, name, createdAt: new Date() };
    this.items.push(item);
    return item;
  }

  async findAll(): Promise<Item[]> {
    return this.items;
  }

  async findById(id: number): Promise<Item | null> {
    return this.items.find(i => i.id === id) ?? null;
  }

  async delete(id: number): Promise<void> {
    this.items = this.items.filter(i => i.id !== id);
  }
}