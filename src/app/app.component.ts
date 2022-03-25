import { Component } from '@angular/core';
import { ToastType, ToastPosition } from './toast/toast.model';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title:string;
  public message:string;

  constructor(private _toastService:ToastService) {    
  }

  public showWarningToast():void{
    this._toastService.show(this.title, this.message, 30, ToastType.Warning, ToastPosition.TopRight);
  }

  public showErrorToast():void{
    this._toastService.show(this.title, this.message, 3, ToastType.Error, ToastPosition.TopLeft);
  }

  public showInfoToast():void{
    this._toastService.show(this.title, this.message, 3, ToastType.Info, ToastPosition.Center);
  }
}
