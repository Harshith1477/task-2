import express from 'express';
import dotenv from 'dotenv';
import { PostgresItemRepository } from './repositories/PostgresItemRepository';
import { ItemService } from './services/ItemService';
import { createItemRoutes } from './routes/itemRoutes';

dotenv.config();

const app = express();
app.use(express.json());

const repo = new PostgresItemRepository(); // swap this line to InMemoryItemRepository to change storage; service/routes stay the same
const service = new ItemService(repo);

app.use('/', createItemRoutes(service));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));