// icons.module.ts
import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import {ionHomeOutline,ionRocketOutline,ionBriefcase,ionPeople,ionPaperPlane,ionLogInOutline,ionMenuOutline,ionCloseOutline,ionLogoGoogle,ionEye,ionEyeOff,ionPersonOutline,ionDocument,ionAddCircle,ionDocumentTextOutline,ionFileTrayFullOutline,ionPersonCircleOutline,ionBriefcaseOutline,ionNotificationsOutline,ionRocket,ionDocuments,ionPerson,ionNotifications,ionJournal,ionLocationOutline,ionCashOutline,ionCalendarOutline } from '@ng-icons/ionicons';

@NgModule({
  imports: [NgIconsModule.withIcons({ionHomeOutline,ionRocketOutline,ionBriefcase,ionPeople,ionPaperPlane,ionLogInOutline,ionMenuOutline,ionCloseOutline,ionLogoGoogle,ionEye,ionEyeOff,ionPersonOutline,ionDocument,ionAddCircle,ionDocumentTextOutline,ionFileTrayFullOutline,ionPersonCircleOutline,ionBriefcaseOutline,ionNotificationsOutline,ionRocket,ionDocuments,ionPerson,ionNotifications,ionJournal,ionLocationOutline,ionCashOutline,ionCalendarOutline })],
  exports: [NgIconsModule]
})
export class IconsModule {}
