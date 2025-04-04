// icons.module.ts
import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import {ionHomeOutline,ionRocketOutline,ionBriefcase,ionPeople,ionPaperPlane,ionLogInOutline,ionMenuOutline,ionCloseOutline } from '@ng-icons/ionicons';

@NgModule({
  imports: [NgIconsModule.withIcons({ionHomeOutline,ionRocketOutline,ionBriefcase,ionPeople,ionPaperPlane,ionLogInOutline,ionMenuOutline,ionCloseOutline})],
  exports: [NgIconsModule]
})
export class IconsModule {}
