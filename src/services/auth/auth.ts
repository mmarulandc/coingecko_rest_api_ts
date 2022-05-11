import { PrismaClient, Prisma } from "@prisma/client";
import { User } from '../../utils/types';

export class AuthService {
  private prisma: PrismaClient = new PrismaClient();
  
  async signup(user: User): Promise<void> {
    try {
      await this.prisma.user.create({
        data: user
      })
    } catch(error: any) {
      console.log(`Error while creating a user ${error.message}`)
    }
  }

  async getUsers(): Promise<User[] | undefined> {
    
    try {
      const users = await this.prisma.user.findMany();
      console.log(users)
      return users
      
    } catch(error: any) {
      console.log(`Error while creating a user ${error.message}`)
    }
  }
}
