import { Request, Response, NextFunction } from 'express';

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json(false);
        return;
    }
    const token = authHeader.split(" ")[1];

    try {
        const authResponse = await fetch("http://ese-authentication:3000/api/auth/check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token })
        });

        const isValid = await authResponse.json();
        if (isValid !== true) {
            res.status(401).json(false);
            return;
        }
        next();
    } catch (error) {
        console.error("Erro na autenticação:", error);
        res.status(401).json(false);
        return;
    }
}