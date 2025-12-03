import Stripe from 'stripe';
import prisma from '../../prisma.client';
const stripe = new Stripe(process.env.STRIPE_SECRET || '', { apiVersion: '2023-10-16' });

export class StripeService {
  async getOrCreatePriceForTopic(topicId: string) {
    const topic = await prisma.topic.findUnique({ where: { id: topicId }});
    if (!topic) throw new Error('Topic not found');
    const existing = topic.metadata?.stripePriceId;
    if (existing) return existing;
    // create product & price
    const product = await stripe.products.create({ name: topic.title, description: topic.description || '' });
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: Math.round((topic.price || 0) * 100),
      currency: 'usd'
    });
    // save to metadata
    await prisma.topic.update({ where: { id: topicId }, data: { metadata: { ...topic.metadata, stripePriceId: price.id } }});
    return price.id;
  }
}
