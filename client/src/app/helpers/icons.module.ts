// icons.module.ts
import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import {ionHomeOutline,ionRocketOutline,ionBriefcase,ionPeople,ionPaperPlane,ionLogInOutline,ionMenuOutline,ionCloseOutline,ionLogoGoogle,ionEye,ionEyeOff,ionPersonOutline,ionDocument,ionAddCircle,ionDocumentTextOutline,ionFileTrayFullOutline,ionPersonCircleOutline,ionBriefcaseOutline,ionNotificationsOutline,ionRocket,ionDocuments,ionPerson,ionNotifications,ionJournal,ionLocationOutline,ionCashOutline,ionCalendarOutline,ionMail,ionSave,ionStatsChart,ionCalendar, ionLocation, ionStar, ionStarHalf, ionTimeOutline, ionClose, ionRefresh, } from '@ng-icons/ionicons';

@NgModule({
  imports: [NgIconsModule.withIcons({ionHomeOutline,ionRocketOutline,ionBriefcase,ionPeople,ionPaperPlane,ionLogInOutline,ionMenuOutline,ionCloseOutline,ionLogoGoogle,ionEye,ionEyeOff,ionPersonOutline,ionDocument,ionAddCircle,ionDocumentTextOutline,ionFileTrayFullOutline,ionPersonCircleOutline,ionBriefcaseOutline,ionNotificationsOutline,ionRocket,ionDocuments,ionPerson,ionNotifications,ionJournal,ionLocationOutline,ionCashOutline,ionCalendarOutline,ionMail,ionSave,ionStatsChart,ionCalendar,ionLocation,ionStar,ionStarHalf,ionTimeOutline,ionClose,ionRefresh })],
  exports: [NgIconsModule]
})
export class IconsModule {}
