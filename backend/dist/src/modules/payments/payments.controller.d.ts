export declare class PaymentsController {
    checkout(body: any): Promise<{
        url: string;
        id: string;
    }>;
}
