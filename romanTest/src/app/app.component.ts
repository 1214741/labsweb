import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArabicToRomanService {

    basicSymbols = null;
  
  constructor() {
    this.basicSymbols = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  }


  convertArabicToRoman(arabicNumber: number): string {
    
    let arabicconversor = arabicNumber;
    let romanResult = '';
    for(let i in this.basicSymbols) {
      console.log(`symbol: ${i}`)
      while(arabicNumber >= this.basicSymbols[i]) {
        
        romanResult += i;
        console.log('testing....')
        arabicconversor -= this.basicSymbols[i];
      }
    } 
    console.log(romanResult)
    return romanResult;
  }

}