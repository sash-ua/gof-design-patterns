import {CreationalComponent} from '../core/components/creational/creational.component';
import {BehavioralComponent} from '../core/components/behavioral/behavioral.component';
import {PageNotFoundComponent} from '../core/components/page-not-found/page-not-found.component';
import {StructuralComponent} from '../core/components/structural/structural.component';
import {Routes} from '@angular/router';

const CREATIONAL_CHILDREN_ROUTES = [
  {path: '', redirectTo: 'factory-method', pathMatch: 'full'},
  {
    path: 'factory-method',
    loadChildren: () => import('../modules/creational/factory-method/factory-method.module').then(m => m.FactoryMethodModule)
  },
  {
    path: 'abstract-factory',
    loadChildren: () => import('../modules/creational/abstract-factory/abstract-factory.module').then(m => m.AbstractFactoryModule)
  },
  {path: 'builder', loadChildren: () => import('../modules/creational/builder/builder.module').then(m => m.BuilderModule)},
  {path: 'prototype', loadChildren: () => import('../modules/creational/prototype/prototype.module').then(m => m.PrototypeModule)},
  {path: 'singleton', loadChildren: () => import('../modules/creational/singleton/singleton.module').then(m => m.SingletonModule)}
];

const STRUCTURAL_CHILDREN_ROUTES = [
  {path: '', redirectTo: 'adapter', pathMatch: 'full'},
  {path: 'adapter', loadChildren: () => import('../modules/structural/adapter/adapter.module').then(m => m.AdapterModule)},
  {path: 'bridge', loadChildren: () => import('../modules/structural/bridge/bridge.module').then(m => m.BridgeModule)},
  {path: 'composite', loadChildren: () => import('../modules/structural/composite/composite.module').then(m => m.CompositeModule)},
  {path: 'decorator', loadChildren: () => import('../modules/structural/decorator/decorator.module').then(m => m.DecoratorModule)},
  {path: 'facade', loadChildren: () => import('../modules/structural/facade/facade.module').then(m => m.FacadeModule)},
  {path: 'flyweight', loadChildren: () => import('../modules/structural/flyweight/flyweight.module').then(m => m.FlyweightModule)},
  {path: 'proxy', loadChildren: () => import('../modules/structural/proxy/proxy.module').then(m => m.ProxyModule)}
];

const BEHAVIORAL_CHILDREN_ROUTES = [
  {path: '', redirectTo: 'chain-of-responsibility', pathMatch: 'full'},
  {
    path: 'chain-of-responsibility',
    loadChildren: () => import('../modules/behavioral/chain-of-responsibility/chain-of-responsibility.module').then(m => m.ChainOfResponsibilityModule)
  },
  {path: 'command', loadChildren: () => import('../modules/behavioral/command/command.module').then(m => m.CommandModule)},
  {path: 'interpreter', loadChildren: () => import('../modules/behavioral/interpreter/interpreter.module').then(m => m.InterpreterModule)},
  {path: 'iterator', loadChildren: () => import('../modules/behavioral/iterator/iterator.module').then(m => m.IteratorModule)},
  {path: 'mediator', loadChildren: () => import('../modules/behavioral/mediator/mediator.module').then(m => m.MediatorModule)},
  {path: 'memento', loadChildren: () => import('../modules/behavioral/memento/memento.module').then(m => m.MementoModule)},
  {path: 'observer', loadChildren: () => import('../modules/behavioral/observer/observer.module').then(m => m.ObserverModule)},
  {path: 'state', loadChildren: () => import('../modules/behavioral/state/state.module').then(m => m.StateModule)},
  {path: 'strategy', loadChildren: () => import('../modules/behavioral/strategy/strategy.module').then(m => m.StrategyModule)},
  {
    path: 'template-method',
    loadChildren: () => import('../modules/behavioral/template-method/template-method.module').then(m => m.TemplateMethodModule)
  },
  {path: 'visitor', loadChildren: () => import('../modules/behavioral/visitor/visitor.module').then(m => m.VisitorModule)},
];

export const ROUTES: Routes = [
  {path: '', redirectTo: 'creational', pathMatch: 'full'},
  {path: 'creational', component: CreationalComponent, children: CREATIONAL_CHILDREN_ROUTES},
  {path: 'structural', component: StructuralComponent, children: STRUCTURAL_CHILDREN_ROUTES},
  {path: 'behavioral', component: BehavioralComponent, children: BEHAVIORAL_CHILDREN_ROUTES},
  {path: '**', component: PageNotFoundComponent},
];
