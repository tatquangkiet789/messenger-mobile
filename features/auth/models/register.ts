import { checkImageExtension, checkImageSize } from '@/utils/validation';
import { z } from 'zod';

export const registerSchema = z
    .object({
        firstName: z.string({
            required_error: 'Vui lòng nhập tên của bạn',
        }),
        lastName: z.string({
            required_error: 'Vui lòng nhập họ của bạn',
        }),
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
        confirmPassword: z.string({
            required_error: 'Vui lòng nhập lại mật khẩu',
        }),
        email: z
            .string({
                required_error: 'Vui lòng nhập email của bạn',
            })
            .email({ message: 'Email không hợp lệ' }),
        avatar: z
            .any()
            .refine((image: File) => image === undefined, {
                message: 'Vui lòng chọn ảnh đại diện',
            })
            .refine((image: File) => checkImageExtension(image), {
                message: 'Chỉ hỗ trợ ảnh có định hạng .jpg, .png và .jpeg ',
            })
            .refine((image: File) => checkImageSize(image), {
                message: 'Kích thước tối đa của ảnh là 5MB',
            }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Mật khẩu không trùng nhau',
        path: ['confirmPassword'],
    });

export type RegisterForm = z.infer<typeof registerSchema>;
