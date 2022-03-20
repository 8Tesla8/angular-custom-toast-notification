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
    this._toastService.show('title', 'information for this event is very  large 2222 44444 77777 888888', 50);
  }
}
