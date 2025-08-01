import { Component, OnInit } from '@angular/core';
import { ChatService, ChatHistory } from '../chat.service';
import { ChatCommunicationService } from '../chat-communication.service';

@Component({
  selector: 'app-conversation',
  imports: [],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css'
})
export class ConversationComponent implements OnInit {
  constructor(
    private chatService: ChatService,
    private chatCommunicationService: ChatCommunicationService
  ) {}

  ngOnInit() {
    this.chatCommunicationService.chatAdded$.subscribe((chat: ChatHistory) => {
      console.log('New chat added:', chat);
      console.log(this.chatService.getChatHistory());
    });
  }
}
