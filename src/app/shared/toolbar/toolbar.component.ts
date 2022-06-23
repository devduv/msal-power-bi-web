import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input()
  public user: any;

  @Output()
  public logoutEmitter: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  logout() {
    this.logoutEmitter.emit();
  }
}
