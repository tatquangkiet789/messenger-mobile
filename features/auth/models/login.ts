import { z } from 'zod';

export const loginSchema = z.object({
    username: z
        .string({
            required_error: 'Vui lòng nhập tên tài khoản',
        })
        .min(3, { message: 'Tên tài khoản không dưới 3 kí tự' })
        .max(50, { message: 'Tên tài khoản không vượt quá 50 kí tự' }),
    password: z
        .string({
            required_error: 'Vui lòng nhập mật khẩu',
        })
        .min(3, { message: 'Mật khẩu không dưới 3 kí tự' })
        .max(255, { message: 'Mật khẩu không vượt quá 255 kí tự' }),
});

export type LoginForm = z.infer<typeof loginSchema>;
