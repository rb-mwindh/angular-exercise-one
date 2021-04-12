import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: '<h1 [class.red]="isRed">Hello World!</h1>',
  styles: ["h1 { color: black; }", "h1.red { color: red; }"]
})
export class HelloComponent {
  private _isRed = false;
  @Input() set isRed(arg: any) {
    this._isRed = coerceBooleanProperty(arg);
  }
}
