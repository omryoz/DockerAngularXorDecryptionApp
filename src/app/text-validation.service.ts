import { Injectable } from '@angular/core';

@Injectable()
export class TextValidationService {

  constructor() { }
  public validate(textToValidate) {
    if (/[^a-zA-Z0-9,.?!\s\-\"\'\<\>\\\/\:\;\]\[\(\)]/.test(textToValidate)) {
      return false;
    }
    return true;
  };

}
