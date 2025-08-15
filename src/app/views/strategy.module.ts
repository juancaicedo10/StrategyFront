import { NgModule } from '@angular/core';
import { ViewComponentComponent } from './Components/view-component/view-component.component';
import { CommonModule } from '@angular/common';
import { StrategyRoutingModule } from './strategy.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewComponentComponent],
  imports: [CommonModule, StrategyRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [],
})
export class StrategyModule {}
