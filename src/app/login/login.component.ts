import { Component, OnInit, Inject } from '@angular/core';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { AuthService } from '../core/services/auth.service';
import { ReuseTabService } from '@delon/abc';
import { Router } from '@angular/router';
import { StartupService } from '../core/startup/startup.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  userName: string;
  password: string;
  error = '';

  constructor(
    private router: Router,
    private message: NzMessageService,
    private authService: AuthService,
    private startupSvc: StartupService,

    @Inject(ReuseTabService) private reuseTabService: ReuseTabService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService
  ) {
    this.tokenService.clear(); // 登录之前清空原登录信息
  }

  ngOnInit() {

  }

  onSubmit(formValue) {
    this.loading = true;
    this.authService.loginWithCredentials(this.userName, this.password).subscribe(data => {
      if (data.success) {// 身份验证成功
        // 清空路由复用信息
        this.reuseTabService.clear();
        // 设置Token信息
        this.tokenService.set({
          token: data.access_token, // '123456789',
          userId: data.id,
          name: this.userName,
          realName: data.realName,
          email: data.email,
          avatar: data.avatar,
          time: +new Date()
        });
        // 重新获取 StartupService 内容，若其包括 User 有关的信息的话
        this.startupSvc.load().then(() => {
          this.loading = false;
          this.message.success(data.message);
          // this.router.navigate(['/']);
        });
      } else {
        console.log(data.message);
        this.error = `账户或密码错误`;
        return;
      }
    });
  }
}
