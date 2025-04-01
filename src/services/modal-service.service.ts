import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private isModalVisibleSubject = new BehaviorSubject<boolean>(false);
  
  isModalVisible$ = this.isModalVisibleSubject.asObservable();

  constructor() { }

  ShowModal(){
    this.isModalVisibleSubject.next(true);
  }

  HideModal(){
    this.isModalVisibleSubject.next(false);
  }
}


