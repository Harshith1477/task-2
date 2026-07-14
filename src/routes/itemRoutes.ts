import { Router } from 'express';
import { ItemService } from '../services/ItemService';

export function createItemRoutes(service: ItemService): Router {
  const router = Router();

  router.post('/items', async (req, res) => {
    try {
      const item = await service.createItem(req.body.name);
      res.status(201).json(item);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  });

  router.get('/items', async (req, res) => {
    const items = await service.getAllItems();
    res.json(items);
  });

  router.get('/items/:id', async (req, res) => {
    const item = await service.getItem(Number(req.params.id));
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  });

  router.delete('/items/:id', async (req, res) => {
    await service.deleteItem(Number(req.params.id));
    res.status(204).send();
  });

  return router;
}