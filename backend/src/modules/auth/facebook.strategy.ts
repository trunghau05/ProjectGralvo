import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-facebook';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
	constructor(configService: ConfigService) {
		super({
		  clientID: process.env.FACEBOOK_CLIENT_ID || '',
		  clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
		  callbackURL: process.env.FACEBOOK_CALLBACK_URL || '',
		  profileFields: ['id', 'emails', 'name', 'displayName', 'photos'],
		  scope: ['email'],
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
	): Promise<any> {
		return {
			provider: 'facebook',
			id: profile.id,
			email: profile.emails?.[0]?.value,
			name: profile.displayName,
			photo: profile.photos?.[0]?.value,
		};
	}
}
