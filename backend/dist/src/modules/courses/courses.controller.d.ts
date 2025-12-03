export declare class CoursesController {
    list(): Promise<({
        topics: {
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
        }[];
    } & {
        id: string;
        title: string;
        description: string | null;
        slug: string;
        orderIndex: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    bySlug(slug: string): Promise<{
        topics: {
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
        }[];
    } & {
        id: string;
        title: string;
        description: string | null;
        slug: string;
        orderIndex: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
