import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-footer',
  templateUrl: './shared-footer.component.html',
  styleUrls: ['./shared-footer.component.scss']
})
export class SharedFooterComponent {

  constructor() { }

  footerInit = {
    copyright: "Dev. Allysson Ferreira Copyright © 2022.",
    SocialNetwork: [
      {
        image: '../../../../../assets/icons/brands/git64xlight.svg',
        href: 'https://github.com/AllyssonLFerreira/'
      },
      {
        image: '../../../../../assets/icons/brands/linkedin64x.svg',
        href: 'https://www.linkedin.com/in/allyssonferreira/',
      },
      {
        image: '../../../../../assets/icons/brands/instagram64x.svg',
        href: 'https://www.instagram.com/cfallyssonferreira/',
      }
    ]
  }

}
