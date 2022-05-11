import { Request, Response } from "express";
import { AuthService } from "../../services/auth/auth";
import { User } from "../../utils/types";

export class AuthController {
  private authService: AuthService = new AuthService();
  async signup(req: Request, res: Response) {
    const user: User = req.body;
    try {
      await this.authService.signup(user);
      return res.send(200);
    } catch (error: any) {
      console.log(`error has ocurred ${error.message}`);
      return res.status(500).send("error has ocurred");
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      // console.log("pito");
      
      const users = await this.authService.getUsers();
      return res.send(users);
    }catch(error: any) {
      console.log(error.message);
      
      return res.status(500).send(error.message)
    }
  }
}
