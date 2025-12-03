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
exports.TopicsController = void 0;
const common_1 = require("@nestjs/common");
const prisma_client_1 = require("../../prisma.client");
const stripe_service_1 = require("../payments/stripe.service");
const stripeService = new stripe_service_1.StripeService();
let TopicsController = class TopicsController {
    async get(id) {
        return prisma_client_1.default.topic.findUnique({ where: { id } });
    }
    async getPrice(id) {
        const topic = await prisma_client_1.default.topic.findUnique({ where: { id } });
        if (!topic)
            return { error: 'Not found' };
        const priceId = await stripeService.getOrCreatePriceForTopic(id);
        return { priceId };
    }
};
exports.TopicsController = TopicsController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TopicsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id/price'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TopicsController.prototype, "getPrice", null);
exports.TopicsController = TopicsController = __decorate([
    (0, common_1.Controller)('topics')
], TopicsController);
//# sourceMappingURL=topics.controller.js.map