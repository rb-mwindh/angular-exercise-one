import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: '<h1 [class.red]="isRed">Hello World!</h1>',
  styles: ["h1 { color: black; }", "h1.red { color: red; }"]
})
export class HelloComponent {
  @Input() isRed = false;
}
