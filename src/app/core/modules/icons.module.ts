import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
    faGitSquare, 
    faLinkedinIn, 
    faLinkedin,
    faInstagramSquare 
  } from "@fortawesome/free-brands-svg-icons"

@NgModule({
  exports: [ 
  FontAwesomeModule,
 ]
})

export class IconsModule { 
  constructor (library: FaIconLibrary) {
    library.addIcons(
      faGitSquare,
      faLinkedin,
      faLinkedinIn,
      faInstagramSquare
    )
  }
}
