import { Component } from '@angular/core';
import aboutme from '../../../../assets/data/aboutme.json';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-section00',
  templateUrl: './section00.component.html',
  styleUrls: ['./section00.component.scss'],
})
export class Section00Component {
  title: string = 'Full Stack Developer';
  name: string = aboutme.name;
  social: any = aboutme.social;
  titleArray: any = [
    'Full Stack Developer',
    'Front-End Developer',
    'Back-End Developer',
  ];
  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle(this.name);
    var i = 1;
    setInterval(() => {
      $('.headerTitle').removeClass('load');
      setTimeout(() => {
        this.title = this.titleArray[i];
        $('.headerTitle').addClass('load');
        i++;
        if (i === 3) {
          i = 0;
        }
      }, 1000);
    }, 5000);
  }
  scroll(id: any) {
    const elmnt: any = document.getElementById(id);
    elmnt.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
