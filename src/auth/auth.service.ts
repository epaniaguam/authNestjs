import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PersonalService } from 'src/personal/personal.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private personalService: PersonalService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string
  ): Promise<{access_token: string}> {
    const personal = await this.personalService.findOne(username);
    if (personal?.password !== pass) {
      throw new UnauthorizedException();
    }
    
 
    const payload = { sub: personal.personalId, username: personal.username };
    
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

}
