import { Controller, Get, Param } from '@nestjs/common';
import prisma from '../../prisma.client';
import { StripeService } from '../payments/stripe.service';
const stripeService = new StripeService();

@Controller('topics')
export class TopicsController {
  @Get(':id')
  async get(@Param('id') id: string) {
    return prisma.topic.findUnique({ where: { id }});
  }

  @Get(':id/price')
  async getPrice(@Param('id') id: string) {
    const topic = await prisma.topic.findUnique({ where: { id }});
    if (!topic) return { error: 'Not found' };
    const priceId = await stripeService.getOrCreatePriceForTopic(id);
    return { priceId };
  }
}
