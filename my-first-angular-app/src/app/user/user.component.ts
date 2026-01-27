import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.modal';
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Old version use Input
  @Input({ required: true}) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // Same like Output(), no Signal created under the hood. just difference syntax
  // select = output<string>();

  // Old version use function
  get imagePath() {
    return "/assets/users/" + this.user.avatar;
  }

  // New version use input(), under the hood supported by Signal
  // avatar = input.required<string>();
  // name = input.required<string>();

  // New version use computed()
  // imagePath = computed(() => {
  //   return "/assets/users/" + this.avatar();
  // })

  onSelected() {
    this.select.emit(this.user.id);
  }
}
