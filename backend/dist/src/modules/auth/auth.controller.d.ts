export declare class AuthController {
    register(body: any): Promise<{
        id: string;
        email: string;
    }>;
    login(body: any): Promise<{
        accessToken: any;
    }>;
}
