import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories = [{
    name: 'Car Keys',
    value: false
  }, {
    name: 'Phone',
    value: false
  }, {
    name: 'ID/Drivers License',
    value: false
  }, {
    name: 'Wallet',
    value: false
  }, {
    name: 'Other',
    value: false
  }];

  selection(name: string) {
    this.categories.forEach(x => {
      if (x.name !== name) {
        x.value = !x.value
      }
    })
  }
}
