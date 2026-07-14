export interface Item {
  id: number;
  name: string;
  createdAt: Date;
}

export interface ItemRepository {
  create(name: string): Promise<Item>;
  findAll(): Promise<Item[]>;
  findById(id: number): Promise<Item | null>;
  delete(id: number): Promise<void>;
}