import { Injectable } from '@angular/core';
import { StrategyForms } from '../Forms/strategy.forms';
import { FormGroup } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StrategyService extends StrategyForms {
  strategyform: FormGroup = this.form();
  constructor(private readonly http$: HttpService) {
    super();
  }


  getStrategies(): Observable<any> {
    const { maxLaps } = this.strategyform.value;

    const params = new HttpParams().append('maxLaps', maxLaps);
    return this.http$.get<any>('Strategy/optimal', params);
  } 
}
