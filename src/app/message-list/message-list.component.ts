import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [
    new Message(3, "Michael", "michael@aaron.de", "This is my third message.", "12.04.2019", "13:07:09"),
    new Message(2, "Violeta", "violetta@aaron.de", "This is my second message.", "08.04.2019", "01:12:34"),
    new Message(1, "Aaron", "mail@aaron.de", "This is my fist message.", "03.03.2019", "23:52:02")
  ];

  constructor() { }

  ngOnInit() {
  }

}
