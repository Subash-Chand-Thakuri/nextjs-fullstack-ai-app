import {resend} from '@/lib/resend'
import  VerificationEmail  from '../../emails/VerificationEmail'
import {ApiResponse} from '@/types/ApiResponse'
import { Verification } from 'next/dist/lib/metadata/types/metadata-types';

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'subashthakuri799@gmail.com',
            to: email,
            subject: 'FullStack | Verification Code',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return {success: true, message: 'Verification email send successfully'}
    } catch (error) {
        console.error("Error on sending verification email",error)
         return {success: false, message: 'Failed to send the verification email'}
    }
}
