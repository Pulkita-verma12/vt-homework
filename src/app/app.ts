import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {Register} from './register/register';
// import {Propertybinding} from './propertybinding/propertybinding';
// import { Classbinding } from './classbinding/classbinding';
// import{ Stylebinding} from './stylebinding/stylebinding';
// import { EventBinding } from './event-binding/event-binding';
// import { TwoWayBinding } from './two-way-binding/two-way-binding';
// import { NgifElse } from './ngif-else/ngif-else';
// import { Ngswitch } from './ngswitch/ngswitch';
// import { Keyup } from './keyup/keyup';
// import { Keydown } from './keydown/keydown';
// import { Mouseover } from './mouseover/mouseover';
// import { Mouseleave } from './mouseleave/mouseleave';
// import { Submit } from './submit/submit';
// import { Pipes } from './pipes/pipes';
// import { Employeedetail } from './employeedetail/employeedetail';
// import { Employeelist } from './employeelist/employeelist';
import { Dashboard } from './dashboard/dashboard';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Priyal Verma');
  firstname = 'Priyal';
  lastname = 'Verma';
}

