import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import Stripe from 'stripe';
import { StripeService } from './stripe.service';

const stripeService = new StripeService();
const stripe = new Stripe(process.env.STRIPE_SECRET || '', { apiVersion: '2023-10-16' });

@Controller('payments')
export class PaymentsController {
  @Post('checkout')
  async checkout(@Body() body: any) {
    const { topicId, successUrl, cancelUrl } = body;
    if (!topicId) throw new BadRequestException('Missing topicId');
    const priceId = await stripeService.getOrCreatePriceForTopic(topicId);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      success_url: successUrl || 'https://example.com/success',
      cancel_url: cancelUrl || 'https://example.com/cancel'
    });
    return { url: session.url, id: session.id };
  }
}
