import { Router } from 'express';

import emojiRoute from './emoji.route';

const apiRoute = Router();

apiRoute.use('/emoji', emojiRoute);

export default apiRoute;