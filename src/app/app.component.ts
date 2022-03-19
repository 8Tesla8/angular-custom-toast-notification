import { Component } from '@angular/core';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _toastService:ToastService) {    
  }
  
  public showToast():void{
    this._toastService.show(50);
  }
}
