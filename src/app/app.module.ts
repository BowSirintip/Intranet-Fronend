import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockComponent } from './stock/stock.component';
import { ShopComponent } from './shop/shop.component';
import { MemberComponent } from './member/member.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSortModule } from '@angular/material/sort'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { httpInterceptorProviders } from './http_interceptors/interceptors';
import { FormProductComponent } from './form-product/form-product.component';
import { ReportComponent } from './report/report.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SecretaryComponent } from './secretary/secretary.component';
import { CommunicateComponent } from './communicate/communicate.component';
import { LawComponent } from './law/law.component';
import { SafetyComponent } from './safety/safety.component';
import { ITComponent } from './it/it.component';
import { HrComponent } from './hr/hr.component';
import { HeadnewComponent } from './hr/hr-new/headnew/headnew.component';
import { DetailnewComponent } from './hr/hr-new/detailnew/detailnew.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HrisComponent } from './hr/hris/hris.component';
import { TrainingFormComponent } from './hr/training/training-form/training-form.component';
import { ELearningComponent } from './hr/training/e-learning/e-learning.component';
import { KmFormComponent } from './hr/km/km-form/km-form.component';
import { PortfolioComponent } from './hr/km/portfolio/portfolio.component';
import { ActivityFormComponent } from './hr/activity-pictures/activity-form/activity-form.component';
import { FormComponent } from './hr/form/form.component';
import { SeminarComponent } from './hr/questions/seminar/seminar.component';
import { FormnewComponent } from './secretary/cg-news/formnew/formnew.component';
import { DetailnewSecComponent } from './secretary/cg-news/detailnew-sec/detailnew-sec.component';
import { PolicySecComponent } from './secretary/policy-sec/policy-sec.component';
import { TrainingSecComponent } from './secretary/training-sec/training-sec.component';
import { OtherSecComponent } from './secretary/other-sec/other-sec.component';
import { GalleryModule } from 'ng-gallery';
import { CsrFormComponent } from './communicate/csr-news/csr-form/csr-form.component';
import { CsrDetailComponent } from './communicate/csr-news/csr-detail/csr-detail.component';
import { GalleryMarketingComponent } from './communicate/gallery-marketing/gallery-marketing.component';
import { PolicycommuFormComponent } from './communicate/policy-commu/policycommu-form/policycommu-form.component';
import { DownloadCommuComponent } from './communicate/download-commu/download-commu.component';
import { JournalComponent } from './communicate/journal/journal.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { LawFormComponent } from './law/law-news/law-form/law-form.component';
import { LawDetailComponent } from './law/law-news/law-detail/law-detail.component';
import { RegulationsComponent } from './law/regulations/regulations.component';
import { PictureFormComponent } from './secretary/picture-sec/picture-form/picture-form.component';
import { TrickComponent } from './law/trick/trick.component';
import { ActivityLawComponent } from './law/activity-law/activity-law.component';
import { SsoComponent } from './hr/sso/sso.component';
import { WelfareComponent } from './hr/welfare/welfare.component';
import { PopularityComponent } from './hr/popularity/popularity.component';
import { SatetyFormComponent } from './safety/safety-new/satety-form/satety-form.component';
import { SafetyDetailComponent } from './safety/safety-new/safety-detail/safety-detail.component';
import { AboutSafetyComponent } from './safety/about-safety/about-safety.component';
import { Calenda5sComponent } from './safety/calenda5s/calenda5s.component';
import { ProjectSafetyComponent } from './safety/project-safety/project-safety.component';
import { AwardComponent } from './safety/award/award.component';
import { KnowledgebaseComponent } from './safety/knowledgebase/knowledgebase.component';
import { ItFormComponent } from './it/it-news/it-form/it-form.component';
import { ItDetailComponent } from './it/it-news/it-detail/it-detail.component';
import { ItPolicyComponent } from './it/it-policy/it-policy.component';
import { FormsItComponent } from './it/forms-it/forms-it.component';
import { PicturecomFormComponent } from './communicate/picture-commu/picturecom-form/picturecom-form.component';
import { PicturetrainFormComponent } from './hr/activity-pictures/internal-training/picturetrain-form/picturetrain-form.component';
import { SeminarQaComponent } from './hr/questions/seminar/seminar-qa/seminar-qa.component';
import { SeminarTopicComponent } from './hr/questions/seminar/seminar-topic/seminar-topic.component';
import { ItFormqaComponent } from './it/qa-it/it-formqa/it-formqa.component';
import { ItTopicqaComponent } from './it/qa-it/it-topicqa/it-topicqa.component';
import { LawFormqaComponent } from './law/qa-law/law-formqa/law-formqa.component';
import { LawTopicqaComponent } from './law/qa-law/law-topicqa/law-topicqa.component';
import { ClubFormComponent } from './safety/club/club-form/club-form.component';
import { DialogSuccessComponent } from './dialog/dialog-success/dialog-success.component';
import { DialogErrorComponent } from './dialog/dialog-error/dialog-error.component';
import { TopicComponent } from './q-a/topic/topic.component';
import { FormsqaComponent } from './q-a/formsqa/formsqa.component';
import { FormAnsComponent } from './q-a/form-ans/form-ans.component';
import { DialogAnsComponent } from './q-a/dialog-ans/dialog-ans.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NewsAdminComponent } from './news-admin/news-admin.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ImgHRFormComponent } from './imgHR/img-hr-form/img-hr-form.component';
import { ActivityFormSecComponent } from './secretary/picture-sec/activity-form-sec/activity-form-sec.component';
import { PicturecomActivityComponent } from './communicate/picture-commu/picturecom-activity/picturecom-activity.component';
import { ClubActivityComponent } from './safety/club/club-activity/club-activity.component';
// import { LightboxModule } from 'ngx-lightbox';
import { LightboxModule } from 'ng-gallery/lightbox';
import 'hammerjs';  
import 'mousetrap';
import { KmAdminComponent } from './km-form/km-admin/km-admin.component';
import { KmUserComponent } from './km-form/km-user/km-user.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { GalleryModule, ModalGalleryComponent } from '@ks89/angular-modal-gallery';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    StockComponent,
    ShopComponent,
    MemberComponent,
    FormProductComponent,
    ReportComponent,
    SecretaryComponent,
    CommunicateComponent,
    LawComponent,
    SafetyComponent,
    ITComponent,
    HrComponent,
    HeadnewComponent,
    DetailnewComponent,
    HrisComponent,
    TrainingFormComponent,
    ELearningComponent,
    KmFormComponent,
    PortfolioComponent,
    ActivityFormComponent,
    FormComponent,
    SeminarComponent,
    FormnewComponent,
    DetailnewSecComponent,
    PolicySecComponent,
    TrainingSecComponent,
    OtherSecComponent,
    CsrFormComponent,
    CsrDetailComponent,
    GalleryMarketingComponent,
    PolicycommuFormComponent,
    DownloadCommuComponent,
    JournalComponent,
    LawFormComponent,
    LawDetailComponent,
    RegulationsComponent,
    PictureFormComponent,
    TrickComponent,
    ActivityLawComponent,
    SsoComponent,
    WelfareComponent,
    PopularityComponent,
    SatetyFormComponent,
    SafetyDetailComponent,
    AboutSafetyComponent,
    Calenda5sComponent,
    ProjectSafetyComponent,
    AwardComponent,
    KnowledgebaseComponent,
    ItFormComponent,
    ItDetailComponent,
    ItPolicyComponent,
    FormsItComponent,
    PicturecomFormComponent,
    PicturetrainFormComponent,
    SeminarQaComponent,
    SeminarTopicComponent,
    ItFormqaComponent,
    ItTopicqaComponent,
    LawFormqaComponent,
    LawTopicqaComponent,
    ClubFormComponent,
    DialogSuccessComponent,
    DialogErrorComponent,
    TopicComponent,
    FormsqaComponent,
    FormAnsComponent,
    DialogAnsComponent,
    NewsAdminComponent,
    ImgHRFormComponent,
    ActivityFormSecComponent,
    PicturecomActivityComponent,
    ClubActivityComponent,
    KmAdminComponent,
    KmUserComponent,

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDialogModule,
    GalleryModule,
    NgImageSliderModule,
    AngularEditorModule,
    MatTabsModule,
    AngularFileUploaderModule,
    LightboxModule,
    PdfViewerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    Ng2SearchPipeModule,
  ],

  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
  entryComponents: [DetailnewComponent],
})
export class AppModule { }
