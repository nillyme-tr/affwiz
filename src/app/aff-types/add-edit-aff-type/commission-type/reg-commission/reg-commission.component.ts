import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { countries } from 'src/app/data-countries';

@Component({
  selector: 'app-reg-commission',
  templateUrl: './reg-commission.component.html',
  styleUrls: ['./reg-commission.component.css']
})
export class RegCommissionComponent {
  countryitems = countries;
  
  affTypeFormCommissionTypeRegCommission = new FormGroup({

    registrationCommissions: new FormControl(''),
    registrationCommissions1: new FormControl(''),
    registrationCommissions2: new FormControl(''),
    regRateCountryBasedCheckbox: new FormControl(''),
    regRateCountryBasedInput: new FormControl(''),
  })
}
