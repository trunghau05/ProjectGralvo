import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import type { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('facebook')
	@UseGuards(AuthGuard('facebook'))
	async facebookLogin() {

	}

	@Get('facebook/callback')
	@UseGuards(AuthGuard('facebook'))
	async facebookCallback(@Req() req: Request, @Res() res: Response) {
		const user = await this.authService.validateOAuthLogin(req.user as any);
		return res.json({ success: true, data: user, message: 'Facebook login success' });
	}

	@Get('google')
	@UseGuards(AuthGuard('google'))
	async googleLogin() {

	}

	@Get('google/callback')
	@UseGuards(AuthGuard('google'))
	async googleCallback(@Req() req: Request, @Res() res: Response) {
		const user = await this.authService.validateOAuthLogin(req.user as any);
		return res.json({ success: true, data: user, message: 'Google login success' });
	}
}
