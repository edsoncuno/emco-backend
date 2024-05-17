import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const handleError = async (error: any, req: Request, res: Response, next: NextFunction) => {
    console.error(error.stack)
    res.status(500)
    res.json({ name: "Error", message: "Error en el servidor" })
};