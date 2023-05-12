import { randomUUID } from "crypto";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { emailService } from "../../Utils/sendEmail.utils";
import { hashSync } from "bcryptjs";

class UsersService {
  async sendResetEmailPassword(email: string, protocol: string, host: string) {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new AppError("user not found", 404);
    }

    const resetToken = randomUUID();

    user.reset_token = resetToken;

    await userRepository.save(user);

    const resetPasswordTemplate = emailService.resetPasswordTemplate(
      email,
      user.name,
      protocol,
      host,
      resetToken
    );

    await emailService.sendEmail(resetPasswordTemplate);
  }

  async resetPassword(password: string, resetToken: string) {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
      where: { reset_token: resetToken },
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    user.password = hashSync(password, 10);
    user.reset_token = "";

    await userRepository.save(user);
  }
}

const usersService = new UsersService();

export { usersService };
