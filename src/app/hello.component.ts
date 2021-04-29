import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: '<h1 [class.red]="isRed">Hello World!</h1>',
  styles: ["h1 { color: black; }", "h1.red { color: red; }"]
})
export class HelloComponent {
  isRed = false;
  @Input("isRed") set _isRed(arg: any) {
    console.log(arg);
    this.isRed = !arg || arg === "true";
    console.log("this.isRed: ", this.isRed);
  }
}
