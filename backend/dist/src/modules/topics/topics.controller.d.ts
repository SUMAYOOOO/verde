export declare class TopicsController {
    get(id: string): Promise<{
        id: string;
        title: string;
        description: string | null;
        orderIndex: number;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        isFree: boolean;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        courseId: string;
    }>;
    getPrice(id: string): Promise<{
        error: string;
        priceId?: undefined;
    } | {
        priceId: any;
        error?: undefined;
    }>;
}
