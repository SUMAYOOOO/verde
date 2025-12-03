"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
const stripe_service_1 = require("./stripe.service");
const stripeService = new stripe_service_1.StripeService();
const stripe = new stripe_1.default(process.env.STRIPE_SECRET || '', { apiVersion: '2023-10-16' });
let PaymentsController = class PaymentsController {
    async checkout(body) {
        const { topicId, successUrl, cancelUrl } = body;
        if (!topicId)
            throw new common_1.BadRequestException('Missing topicId');
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
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Post)('checkout'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "checkout", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, common_1.Controller)('payments')
], PaymentsController);
//# sourceMappingURL=payments.controller.js.map