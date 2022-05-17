import { PrismaClient } from '@prisma/client';
import { ERROR_TYPES } from '../../errors';
import { User } from '../../utils/types';

export class AuthService {
  private prisma: PrismaClient = new PrismaClient();

  async signup(user: User): Promise<void> {
    try {
      await this.prisma.user.create({
        data: user,
      });
    } catch (error: any) {
      throw ERROR_TYPES.databaseError('Error while creating a user');
    }
  }

  async getUsers(): Promise<User[] | undefined> {
    try {
      const users = await this.prisma.user.findMany();
      console.log(users);
      return users;
    } catch (error: any) {
      console.log(`Error while creating a user ${error.message}`);
    }
  }
}
