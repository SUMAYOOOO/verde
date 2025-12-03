"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = void 0;
const stripe_1 = require("stripe");
const prisma_client_1 = require("../../prisma.client");
const stripe = new stripe_1.default(process.env.STRIPE_SECRET || '', { apiVersion: '2023-10-16' });
class StripeService {
    async getOrCreatePriceForTopic(topicId) {
        const topic = await prisma_client_1.default.topic.findUnique({ where: { id: topicId } });
        if (!topic)
            throw new Error('Topic not found');
        const existing = topic.metadata?.stripePriceId;
        if (existing)
            return existing;
        const product = await stripe.products.create({ name: topic.title, description: topic.description || '' });
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: Math.round((topic.price || 0) * 100),
            currency: 'usd'
        });
        await prisma_client_1.default.topic.update({ where: { id: topicId }, data: { metadata: { ...topic.metadata, stripePriceId: price.id } } });
        return price.id;
    }
}
exports.StripeService = StripeService;
//# sourceMappingURL=stripe.service.js.map