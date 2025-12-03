import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../prisma.client';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() body: any) {
    const { name, email, password } = body;
    if (!email || !password) throw new BadRequestException('Missing');
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({ data: { name, email, hashedPassword: hashed, role: 'student' }});
    return { id: user.id, email: user.email };
  }

  @Post('login')
  async login(@Body() body: any) {
    const { email, password } = body;
    const user = await prisma.user.findUnique({ where: { email }});
    if (!user || !user.hashedPassword) throw new BadRequestException('Invalid');
    const ok = await bcrypt.compare(password, user.hashedPassword);
    if (!ok) throw new BadRequestException('Invalid');
    const token = jwt.sign({ sub: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    return { accessToken: token };
  }
}
