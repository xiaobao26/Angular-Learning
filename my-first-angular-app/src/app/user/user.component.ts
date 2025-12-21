import { Component, Input, input, computed } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Old version use Input
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  // Old version use function
  get imagePath() {
    return "/assets/users/" + this.avatar;
  }

  // New version use input()
  // avatar = input.required<string>();
  // name = input.required<string>();

  // New version use computed()
  // imagePath = computed(() => {
  //   return "/assets/users/" + this.avatar();
  // })

  onSelected() {
    console.log("coming soon ...");
  }
}
