import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import Prism from 'prismjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  @Input() code: string;
  currentcode: string;

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  get codeInStyleTag(): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(`<style>${this.code}</style>`);
  }

  get highlightedCode(): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(Prism.highlight(this.code, Prism.languages.css));
  }

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    setInterval(() => {
      if (this.currentcode !== this.code) {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;

        this.currentcode = this.code;
      }
    }, 600);
  }
}
