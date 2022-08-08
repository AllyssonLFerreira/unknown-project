import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-footer',
  templateUrl: './shared-footer.component.html',
  styleUrls: ['./shared-footer.component.scss']
})
export class SharedFooterComponent {

  constructor() { }

  footerInit = {
    props: [
      {
        image: '../../../../../assets/icons/github.svg',
        href: 'https://github.com/AllyssonLFerreira/',
        text: 'GitHub'
      },
      {
        image: '../../../../../assets/icons/linkedin.svg',
        href: 'https://www.linkedin.com/in/allyssonferreira/',
        text: 'Linkedin'
      },
      {
        image: '../../../../../assets/icons/instagram.svg',
        href: 'https://www.instagram.com/cfallyssonferreira/',
        text: 'Instagram'
      }
    ]
  }

}
