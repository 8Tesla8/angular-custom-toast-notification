import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  public title = 'toast-title';
  public message = 'toast-message';

  public position: ToastPosition = ToastPosition.TopRight;
  public type: ToastType = ToastType.Info;


  //buttons 
  //- close
  //- additional action
}

export enum ToastPosition{
  TopRight = 'position-top-right',
  TopLeft = 'position-top-left',
  Center = 'position-center',
}

//icon
export enum ToastType{
  Warning = 'warning',
  Error = 'error',
  Info = 'info',
  None = 'none',
}