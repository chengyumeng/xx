import { Component, OnInit, Input } from '@angular/core';
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
        const stylePre = document.getElementById('style-text');
        stylePre.scrollTop = stylePre.scrollHeight + 2000;
        this.currentcode = this.code;
      }
    }, 600);
  }
}
