import e, { Router } from 'express';

import { getAllEmoji } from '../controllers/emoji.controller';

const emojiRoute = Router();

emojiRoute.get('/', getAllEmoji);

export default emojiRoute;