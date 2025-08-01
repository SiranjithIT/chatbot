import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService, UserReq, ChatHistory } from '../chat.service';
import { error } from 'console';
import { ChatCommunicationService } from '../chat-communication.service';

@Component({
  selector: 'app-chat-prompt',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-prompt.component.html',
  styleUrl: './chat-prompt.component.css'
})
export class ChatPromptComponent {
  user_query:string = "";
  constructor(private chatService: ChatService, private chatCommunicationService: ChatCommunicationService){}

  getResponse(){
    this.user_query = this.user_query.trim();
    if(this.user_query != ""){
      const request: UserReq = {
        user_query: this.user_query
      }
      this.chatService.getResponse(request).subscribe(
        {
          next: (AIresponse) =>{
            //console.log(AIresponse)
            const chat: ChatHistory = {
              user_query : this.user_query,
              response : AIresponse.response
            };
            this.chatService.addChat(chat);
            this.chatCommunicationService.notifyTaskAdded(chat);
          },
          error: (error) =>{
            console.log(error);
          }
        }
      );
    }
  }
}
