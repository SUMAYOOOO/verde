import { Controller, Get, Param } from '@nestjs/common';
import prisma from '../../prisma.client';
@Controller('courses')
export class CoursesController {
  @Get()
  async list() {
    return prisma.course.findMany({ include: { topics: true }});
  }
  @Get(':slug')
  async bySlug(@Param('slug') slug: string) {
    return prisma.course.findUnique({ where: { slug }, include: { topics: true }});
  }
}
