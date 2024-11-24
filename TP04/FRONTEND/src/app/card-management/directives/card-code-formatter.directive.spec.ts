// card-code-formatter.directive.spec.ts
import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { CardCodeFormatterDirective } from './card-code-formatter.directive';

describe('CardCodeFormatterDirective', () => {
  let elementRefMock: ElementRef;
  let ngControlMock: NgControl;

  beforeEach(() => {
    elementRefMock = new ElementRef(document.createElement('input'));
    ngControlMock = {
      invalid: false,
      touched: false,
    } as NgControl;
  });

  it('should create an instance', () => {
    const directive = new CardCodeFormatterDirective(elementRefMock, ngControlMock);
    expect(directive).toBeTruthy();
  });
});
