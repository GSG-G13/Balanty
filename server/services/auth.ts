import bcrypt from 'bcrypt';
import { User } from '../models';
import { CustomError } from '../utils';
import { signupSchema } from '../validations/schema';
import { generateToken } from '../utils/jwt/generateToken';

interface UserData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: number;
  role: string;
}

const signupService = async (userData: UserData) => {
  const { username, email, password, phone, role } = userData;

  const validatedData = await signupSchema.validateAsync(userData);

  if (!validatedData) {
    throw new CustomError(456, 'bad request');
  }

  const userExists = await User.findOne({ where: { username } });

  if (userExists) {
    throw new CustomError(500, 'User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    phone,
    email,
    password: hashedPassword,
    role,
  });

  const token = await generateToken({ username, email, phone, role });

  return { newUser, token };
};

export { signupService };
