import { Request, Response, NextFunction} from "express";


class TestController {
    public async test(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.status(200).json({ message: 'Test controller works!' });
    }
}

export default TestController;