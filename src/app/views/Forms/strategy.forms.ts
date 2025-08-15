import { FormControl, FormGroup, Validators } from '@angular/forms';

export class StrategyForms {
  form(): FormGroup {
    return new FormGroup({
      maxLaps: new FormControl('', [Validators.required]),
    });
  }
}
