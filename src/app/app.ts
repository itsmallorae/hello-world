import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header, NavItem } from './components/header/header';
import { Intro } from './components/intro/intro';
import { DesThink } from './components/des-think/des-think';
import { HootOwl } from './components/hoot-owl/hoot-owl';
import { EmpTitle } from './components/emp-title/emp-title';
import { EmpContent } from "./components/emp-content/emp-content";
import { EmpContent2 } from "./components/emp-content-2/emp-content-2";
import { DefTitle } from "./components/def-title/def-title";
import { ProbStat } from "./components/prob-stat/prob-stat";
import { ValueProp } from './components/value-prop/value-prop';
import { IdeTitle } from "./components/ide-title/ide-title";
import { CompAudits } from "./components/comp-audits/comp-audits";
import { RapidSketch } from "./components/rapid-sketch/rapid-sketch";
import { ProTitle } from "./components/pro-title/pro-title";
import { UserFlow } from "./components/user-flow/user-flow";
import { Wireframes } from "./components/wireframes/wireframes";
import { Lofi } from "./components/lofi/lofi";
import { Hifi } from "./components/hifi/hifi";
import { TestTitle } from "./components/test-title/test-title";
import { Research } from "./components/research/research";
import { Plan } from "./components/plan/plan";
import { Resume } from './components/resume/resume';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThankYou } from './components/thank-you/thank-you';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Intro, DesThink, HootOwl, EmpTitle, EmpContent, EmpContent2, DefTitle, ProbStat, ValueProp, IdeTitle, CompAudits, RapidSketch, ProTitle, UserFlow, Wireframes, Lofi, Hifi, TestTitle, Research, Plan, Resume, FontAwesomeModule, ThankYou], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hello-world');
  imgSrc = 'https://placehold.co/600x400';
  isDisabled = false;       
  
  menuItems = signal<NavItem[]>([
    { label: 'Intro' , path: '/', fragment: 'intro' },
    { label: 'Design Thinking' , path: '/', fragment: 'design-thinking' },
    { label: 'Hoot Owl' , path: '/', fragment: 'hoot-owl' }
  ]);
}
