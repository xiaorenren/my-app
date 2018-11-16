export class TokenObj {
  id: number;
  access_token: string;
  email: string;
  userName: string;
  realName: string;
  token_type: string;
  expires_in: number;
  message: string;
  success: boolean;
  expires: Date;
  avatar: string;

  constructor() { }
}
