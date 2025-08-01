// conversation.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatService, ChatHistory } from '../chat.service';
import { ChatCommunicationService } from '../chat-communication.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-conversation',
  imports: [CommonModule, FormsModule, MarkdownComponent], // Keep MarkdownComponent here
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css'
})
export class ConversationComponent implements OnInit {
  chatHistory: ChatHistory[] = []

  constructor(
    private chatService: ChatService,
    private chatCommunicationService: ChatCommunicationService
  ) {}

  ngOnInit() {
    this.chatCommunicationService.chatAdded$.subscribe((chat: ChatHistory) => {
      console.log('New chat added:', chat);
      this.chatHistory = this.chatService.getChatHistory();
    });
  }
}
