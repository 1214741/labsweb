import { TestBed } from '@angular/core/testing';

import { ArabicToRomanService } from './app.component';

describe('ArabicToRomanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArabicToRomanService = TestBed.get(ArabicToRomanService);
    expect(service).toBeTruthy();
  });

  it('convert numbers from 1 to 4', () => {
    const service: ArabicToRomanService = TestBed.get(ArabicToRomanService);
    let romanNumber = service.convertArabicToRoman(1);
    console.log({ romanNumber });
    expect(romanNumber == 'I').toBeTruthy();
    romanNumber = service.convertArabicToRoman(2);
    console.log({ romanNumber });
    expect(romanNumber == 'II').toBeTruthy();
    romanNumber = service.convertArabicToRoman(3);
    console.log({ romanNumber });
    expect(romanNumber == 'III').toBeTruthy();
    romanNumber = service.convertArabicToRoman(4);
    console.log({ romanNumber });
    expect(romanNumber == 'IV').toBeTruthy();
  });
  it('convert numbers 10, 50, 100, 500, 1000', () => {
    const service: ArabicToRomanService = TestBed.get(ArabicToRomanService);
    let romanNumber = service.convertArabicToRoman(10);
    console.log({ romanNumber });
    expect(romanNumber == 'X').toBeTruthy();
    romanNumber = service.convertArabicToRoman(50);
    console.log({ romanNumber });
    expect(romanNumber == 'L').toBeTruthy();
    romanNumber = service.convertArabicToRoman(100);
    console.log({ romanNumber });
    expect(romanNumber == 'C').toBeTruthy();
    romanNumber = service.convertArabicToRoman(1000);
    console.log({ romanNumber });
    expect(romanNumber == 'M').toBeTruthy();
  })
  it('convert any number to roman', () => {
    const service: ArabicToRomanService = TestBed.get(ArabicToRomanService);
    let romanNumber = service.convertArabicToRoman(155);
    console.log({ romanNumber });
    expect(romanNumber == 'CLV').toBeTruthy();
    romanNumber = service.convertArabicToRoman(588);
    console.log({ romanNumber });
    expect(romanNumber == 'DLXXXVIII').toBeTruthy();
  })
});
