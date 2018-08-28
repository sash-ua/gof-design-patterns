import {Routes} from '@angular/router';
import {CreationalComponent} from './core/components/creational/creational.component';
import {BehavioralComponent} from './core/components/behavioral/behavioral.component';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';
import {StructuralComponent} from './core/components/structural/structural.component';

const CREATIONAL_CHILDREN_ROUTES = [
  {path: '', redirectTo: 'factory-method', pathMatch: 'full'},
  {path: 'factory-method', loadChildren: './modules/creational/factory-method/factory-method.module#FactoryMethodModule'},
  {path: 'abstract-factory', loadChildren: './modules/creational/abstract-factory/abstract-factory.module#AbstractFactoryModule'},
  {path: 'builder', loadChildren: './modules/creational/builder/builder.module#BuilderModule'},
  {path: 'prototype', loadChildren: './modules/creational/prototype/prototype.module#PrototypeModule'},
  {path: 'singleton', loadChildren: './modules/creational/singleton/singleton.module#SingletonModule'}
];

const STRUCTURAL_CHILDREN_ROUTES = [
  {path: '', redirectTo: 'adapter', pathMatch: 'full'},
  {path: 'adapter', loadChildren: './modules/structural/adapter/adapter.module#AdapterModule'},
  {path: 'bridge', loadChildren: './modules/structural/bridge/bridge.module#BridgeModule'},
  {path: 'composite', loadChildren: './modules/structural/composite/composite.module#CompositeModule'},
  {path: 'decorator', loadChildren: './modules/structural/decorator/decorator.module#DecoratorModule'},
  {path: 'facade', loadChildren: './modules/structural/facade/facade.module#FacadeModule'},
  {path: 'flyweight', loadChildren: './modules/structural/flyweight/flyweight.module#FlyweightModule'},
  {path: 'proxy', loadChildren: './modules/structural/proxy/proxy.module#ProxyModule'}
];

const BEHAVIORAL_CHILDREN_ROUTES = [
  {path: '', redirectTo: 'chain-of-responsibility', pathMatch: 'full'},
  {path: 'chain-of-responsibility', loadChildren: './modules/behavioral/chain-of-responsibility/chain-of-responsibility.module#ChainOfResponsibilityModule'},
  {path: 'command', loadChildren: './modules/behavioral/command/command.module#CommandModule'},
  {path: 'interpreter', loadChildren: './modules/behavioral/interpreter/interpreter.module#InterpreterModule'},
  {path: 'iterator', loadChildren: './modules/behavioral/iterator/iterator.module#IteratorModule'},
  {path: 'mediator', loadChildren: './modules/behavioral/mediator/mediator.module#MediatorModule'},
  {path: 'memento', loadChildren: './modules/behavioral/memento/memento.module#MementoModule'},
  {path: 'observer', loadChildren: './modules/behavioral/observer/observer.module#ObserverModule'},
  {path: 'state', loadChildren: './modules/behavioral/state/state.module#StateModule'},
  {path: 'strategy', loadChildren: './modules/behavioral/strategy/strategy.module#StrategyModule'},
  {path: 'template-method', loadChildren: './modules/behavioral/template-method/template-method.module#TemplateMethodModule'},
  {path: 'visitor', loadChildren: './modules/behavioral/visitor/visitor.module#VisitorModule'},
];

export const ROUTES: Routes = [
  {path: '', redirectTo: 'creational', pathMatch: 'full'},
  {path: 'creational', component: CreationalComponent, children: CREATIONAL_CHILDREN_ROUTES},
  {path: 'structural', component: StructuralComponent, children: STRUCTURAL_CHILDREN_ROUTES},
  {path: 'behavioral', component: BehavioralComponent, children: BEHAVIORAL_CHILDREN_ROUTES},
  {path: '**', component: PageNotFoundComponent},
];
