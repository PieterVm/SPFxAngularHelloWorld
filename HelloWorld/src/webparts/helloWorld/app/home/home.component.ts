import { Component, Inject } from "@angular/core";


@Component({
  selector: "home",
  template: require("./home.template.html") as string
})
export class HomeComponent {

  title: string;

  constructor() {
   this.title = "hello world";
  }
}
