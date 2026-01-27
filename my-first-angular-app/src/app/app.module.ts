import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, TasksModule]
})
export class AppModule { }