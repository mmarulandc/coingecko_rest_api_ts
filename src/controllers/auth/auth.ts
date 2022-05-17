import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../../services/auth/auth';
import { User } from '../../utils/types';

export class AuthController {
  private authService: AuthService = new AuthService();
  signup = async (req: Request, res: Response, next: NextFunction) => {
    const user: User = req.body;
    try {
      await this.authService.signup(user);
      return res.send(200);
    } catch (error: any) {
      console.log(`error has ocurred ${error.message}`);
      next(error);
    }
  };

  getUsers = async (req: Request, res: Response) => {
    try {
      // console.log("pito");

      const users = await this.authService.getUsers();
      return res.send(users);
    } catch (error: any) {
      console.log(error.message);

      return res.status(500).send(error.message);
    }
  };
}
