import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MySecondAppSharedModule } from 'app/shared/shared.module';
import { TagComponent } from './tag.component';
import { TagDetailComponent } from './tag-detail.component';
import { TagUpdateComponent } from './tag-update.component';
import { TagDeletePopupComponent, TagDeleteDialogComponent } from './tag-delete-dialog.component';
import { tagRoute, tagPopupRoute } from './tag.route';

const ENTITY_STATES = [...tagRoute, ...tagPopupRoute];

@NgModule({
  imports: [MySecondAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [TagComponent, TagDetailComponent, TagUpdateComponent, TagDeleteDialogComponent, TagDeletePopupComponent],
  entryComponents: [TagDeleteDialogComponent]
})
export class MySecondAppTagModule {}
