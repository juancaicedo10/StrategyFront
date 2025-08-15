import { Component, OnInit } from '@angular/core';
import { StrategyService } from '../../Services/strategy.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css'],
})
export class ViewComponentComponent implements OnInit {
  constructor(private readonly service$: StrategyService) {}

  ngOnInit() {}

  strategies: any = [];

  get form(): FormGroup {
    return this.service$.strategyform;
  }

  save(): void {
    this.service$.getStrategies().subscribe((strategies) => {
      this.strategies = strategies;
    });
  }
}
