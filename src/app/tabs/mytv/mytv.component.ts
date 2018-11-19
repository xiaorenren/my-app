import { Component, OnInit, Inject } from '@angular/core';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'app-mytv',
  templateUrl: './mytv.component.html',
  styleUrls: ['./mytv.component.scss']
})
export class MytvComponent implements OnInit {

  constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {

    console.log(this.tokenService.get().token);
  }

  ngOnInit() {
  }

}
