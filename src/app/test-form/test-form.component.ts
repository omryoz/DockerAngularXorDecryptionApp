import { XorEncryptorService } from './../xor-encryptor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.sass']
})
export class TestFormComponent {
  public foundPossibilities = false;
  keyLengthOptions = [1, 2, 3, 4, 5];
  decrypted = [];
  // tslint:disable-next-line:no-trailing-whitespace

  constructor(private xorEncryptorService: XorEncryptorService) { }

  private run(textToDecrypt, keyLegth) {
    const encryptedTextAsArray = textToDecrypt.split(',');
    const result = this.xorEncryptorService.guessKey(encryptedTextAsArray, keyLegth);
    if (result.length > 0) {
      this.foundPossibilities = true;
    }
    this.decrypted = result;
  };
  private clear() {
    this.decrypted = [];
    this.foundPossibilities = false;
  }

}
