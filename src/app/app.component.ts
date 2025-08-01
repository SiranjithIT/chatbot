import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatPromptComponent } from './chat-prompt/chat-prompt.component';
import { ConversationComponent } from './conversation/conversation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatPromptComponent, ConversationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatbot';
}
