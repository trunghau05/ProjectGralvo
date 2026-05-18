import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	constructor(configService: ConfigService) {
		super({
		  clientID: process.env.GOOGLE_CLIENT_ID || '',
		  clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		  callbackURL: process.env.GOOGLE_CALLBACK_URL || '',
		  scope: ['email', 'profile'],
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
	): Promise<any> {
		return {
			provider: 'google',
			id: profile.id,
			email: profile.emails?.[0]?.value,
			name: profile.displayName,
			photo: profile.photos?.[0]?.value,
		};
	}
}
