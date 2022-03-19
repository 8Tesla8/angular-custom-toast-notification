import { BehaviorSubject } from 'rxjs';
import { ToastModel } from './toast.model';

export class ToastService {
  $toastState = new BehaviorSubject<ToastModel>(new ToastModel(false));

  public show(seconds: number = 5) {
    if (seconds <= 0) {
      seconds = 5;
    }

    let toast = new ToastModel(true);

    this.$toastState.next(toast);
    setTimeout(() => this.$toastState.next(new ToastModel(false)), seconds * 1000);
  }

}
