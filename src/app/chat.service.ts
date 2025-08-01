import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserReq{
  user_query: string;
}

export interface UserRes{
  response: string;
}

export interface ChatHistory{
  user_query: string;
  response: string;
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
  private history: ChatHistory[] = [];

  getResponse(request: UserReq):Observable<UserRes>{
    return this.http.post<UserRes>(`http://localhost:8000/chat`,request);
  }

  addChat(chat: ChatHistory){
    this.history.push(chat);
  }

  getChatHistory(){
    return this.history;
  }
}
