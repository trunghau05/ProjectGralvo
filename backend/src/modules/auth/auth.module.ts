import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { FacebookStrategy } from './facebook.strategy';
import { GoogleStrategy } from './google.strategy';
import { PrismaService } from 'src/common/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [ConfigModule],
	controllers: [AuthController],
	providers: [AuthService, FacebookStrategy, GoogleStrategy, PrismaService],
})
export class AuthModule {}
