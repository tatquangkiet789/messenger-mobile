export type CommonResponse = {
    statusCode: number;
    content: unknown;
};

export type MessageResponse = {
    message: string;
};

export type PageResponse = {
    statusCode: number;
    content: unknown;
    isLastPage: boolean;
};
