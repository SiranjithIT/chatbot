import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatHistory } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class ChatCommunicationService {

  constructor() { }

  private chatAddedSource = new Subject<ChatHistory>();

  chatAdded$ = this.chatAddedSource.asObservable();

  notifyTaskAdded(chat: ChatHistory) {
    this.chatAddedSource.next(chat);
  }
}
