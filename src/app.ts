import express, { NextFunction, Request, Response } from 'express';
const app = express();
import cors from 'cors';
import createError from 'http-errors';

// use middleware
app.use(express.json());
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
    res.json({
        message: 'welcome to the server',
    });
});

app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(500, 'Routes not found'));
});

app.use((err: any, req: Request, res: Response) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });
});

export default app;
