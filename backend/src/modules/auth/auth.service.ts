import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService) {}

	async validateOAuthLogin(profile: {
		provider: string;
		id: string;
		email?: string;
		name?: string;
		photo?: string;
	}): Promise<User> {
		// Tìm user theo provider/id, nếu chưa có thì tạo mới
		let user = await this.prisma.user.findFirst({
			where: {
				provider: profile.provider,
				providerId: profile.id,
			},
		});
		if (!user) {
			user = await this.prisma.user.create({
				data: {
					provider: profile.provider,
					providerId: profile.id,
					email: profile.email ?? '',
					fullName: profile.name ?? '',
					avatarUrl: profile.photo,
					isVerified: true,
					username: profile.email ?? profile.id,
				},
			});
		}
		return user;
	}
}
