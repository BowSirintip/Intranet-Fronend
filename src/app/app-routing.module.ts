import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormProductComponent } from './form-product/form-product.component';
import { MemberComponent } from './member/member.component';
import { ReportComponent } from './report/report.component';
import { ShopComponent } from './shop/shop.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { CommunicateComponent } from './communicate/communicate.component';
import { StockComponent } from './stock/stock.component';
import { LawComponent } from './law/law.component';
import { SafetyComponent } from './safety/safety.component';
import { ITComponent } from './it/it.component';
import { HrComponent } from './hr/hr.component';
import { HeadnewComponent } from './hr/hr-new/headnew/headnew.component';
import { DetailnewComponent } from './hr/hr-new/detailnew/detailnew.component';
import { TrainingFormComponent } from './hr/training/training-form/training-form.component';
import { KmFormComponent } from './hr/km/km-form/km-form.component';
import { ActivityFormComponent } from './hr/activity-pictures/activity-form/activity-form.component';
import { FormComponent } from './hr/form/form.component';
import { SeminarComponent } from './hr/questions/seminar/seminar.component';
import { AppComponent} from './app.component';
import { HrisComponent } from './hr/hris/hris.component';
import { FormnewComponent } from './secretary/cg-news/formnew/formnew.component';
import { PolicySecComponent } from './secretary/policy-sec/policy-sec.component';
import { TrainingSecComponent } from './secretary/training-sec/training-sec.component';
import { OtherSecComponent } from './secretary/other-sec/other-sec.component';
import { CsrFormComponent } from './communicate/csr-news/csr-form/csr-form.component';
import { GalleryMarketingComponent } from './communicate/gallery-marketing/gallery-marketing.component';
import { PolicycommuFormComponent } from './communicate/policy-commu/policycommu-form/policycommu-form.component';
import { DownloadCommuComponent } from './communicate/download-commu/download-commu.component';
import { JournalComponent } from './communicate/journal/journal.component';
import { LawFormComponent } from './law/law-news/law-form/law-form.component';
import { RegulationsComponent } from './law/regulations/regulations.component';
import { PictureFormComponent } from './secretary/picture-sec/picture-form/picture-form.component';
import { TrickComponent } from './law/trick/trick.component';
import { ActivityLawComponent } from './law/activity-law/activity-law.component';
import { SsoComponent } from './hr/sso/sso.component';
import { WelfareComponent } from './hr/welfare/welfare.component';
import { PopularityComponent } from './hr/popularity/popularity.component';
import { SatetyFormComponent } from './safety/safety-new/satety-form/satety-form.component';
import { AboutSafetyComponent } from './safety/about-safety/about-safety.component';
import { Calenda5sComponent } from './safety/calenda5s/calenda5s.component';
import { ProjectSafetyComponent } from './safety/project-safety/project-safety.component';
import { AwardComponent } from './safety/award/award.component';
import { KnowledgebaseComponent } from './safety/knowledgebase/knowledgebase.component';
import { ItFormComponent } from './it/it-news/it-form/it-form.component';
import { ItPolicyComponent } from './it/it-policy/it-policy.component';
import { FormsItComponent } from './it/forms-it/forms-it.component';
import { PicturecomFormComponent } from './communicate/picture-commu/picturecom-form/picturecom-form.component';
import { PicturetrainFormComponent } from './hr/activity-pictures/internal-training/picturetrain-form/picturetrain-form.component';
import { SeminarQaComponent } from './hr/questions/seminar/seminar-qa/seminar-qa.component';
import { ItFormqaComponent } from './it/qa-it/it-formqa/it-formqa.component';
import { LawFormqaComponent } from './law/qa-law/law-formqa/law-formqa.component';
import { ClubFormComponent } from './safety/club/club-form/club-form.component';
import { TopicComponent } from './q-a/topic/topic.component';
import { FormsqaComponent } from './q-a/formsqa/formsqa.component';
import { FormAnsComponent } from './q-a/form-ans/form-ans.component';
import { NewsAdminComponent } from './news-admin/news-admin.component';
import { ImgHRFormComponent } from './imgHR/img-hr-form/img-hr-form.component';
import { ActivityFormSecComponent } from './secretary/picture-sec/activity-form-sec/activity-form-sec.component';
import { PicturecomActivityComponent } from './communicate/picture-commu/picturecom-activity/picturecom-activity.component';
import { ClubActivityComponent } from './safety/club/club-activity/club-activity.component';
import { KmUserComponent } from './km-form/km-user/km-user.component';
import { KmAdminComponent } from './km-form/km-admin/km-admin.component';

const routes: Routes = [
  {
    path: "report",
    component : ReportComponent
  },
  {
    path: "KmUser",
    component : KmUserComponent
  },
  {
    path: "KmAdmin",
    component : KmAdminComponent
  },
  {
    path: "ClubActivity/:id",
    component : ClubActivityComponent
  },
  {
    path: "PicturecomActivity/:id",
    component : PicturecomActivityComponent
  },
  {
    path: "newAdmin",
    component : NewsAdminComponent
  },
  {
    path: "ImgAdmin",
    component : ImgHRFormComponent
  },
  {
    path: "FormAns",
    component : FormAnsComponent
  },
  {
    path: "Formsqa",
    component : FormsqaComponent
  },
  {
    path: "TopicQA",
    component : TopicComponent
  },
  {
    path: "ClubForm/:id",
    component : ClubFormComponent
  },
  {
    path: "LawFormqa",
    component : LawFormqaComponent
  },
  {
    path: "ItFormqa",
    component : ItFormqaComponent
  },
  {
    path: "SeminarQa",
    component : SeminarQaComponent
  },
  {
    path: "PicturecomForm/:id",
    component : PicturecomFormComponent
  },
  {
    path: "Picturetrain/:id",
    component : PicturetrainFormComponent
  },
  {
    path: "ActivityFormSec/:id",
    component : ActivityFormSecComponent
  },
  {
    path: "FormsIt",
    component : FormsItComponent
  },
  {
    path: "itPolicy",
    component : ItPolicyComponent
  },
  {
    path: "itnews",
    component : ItFormComponent
  },
  {
    path: "Knowledgebase",
    component : KnowledgebaseComponent
  },
  {
    path: "Award",
    component : AwardComponent
  },
  {
    path: "ProjectSafety",
    component : ProjectSafetyComponent
  },
  {
    path: "Calenda5s",
    component : Calenda5sComponent
  },
  {
    path: "AboutSafety",
    component : AboutSafetyComponent
  },
  {
    path: "SatetyNew",
    component : SatetyFormComponent
  },
  {
    path: "Popularity",
    component : PopularityComponent
  },
  {
    path: "Welfare",
    component : WelfareComponent
  },
  {
    path: "sso",
    component : SsoComponent
  },
  {
    path: "ActivityLaw",
    component : ActivityLawComponent
  },
  {
    path: "Trick",
    component : TrickComponent
  },
  {
    path: "stock",
    component : StockComponent
  },
  {
    path: "stock/form/:id",
    component : FormProductComponent
  },
  {
    path: "stock/form",
    component : FormProductComponent
  },
  {
    path: "shop",
    component : ShopComponent
  },
  {
    path: "secretary",
    component : SecretaryComponent
  },
  {
    path: "communicate",
    component : CommunicateComponent
  },
  {
    path: "law",
    component : LawComponent
  },
  {
    path: "safety",
    component : SafetyComponent
  },
  {
    path: "it",
    component : ITComponent
  },
  {
    path: "app",
    component : AppComponent
  },
  {
    path: "member",
    component : MemberComponent
  },
  {
    path: "hr",
    component : HrComponent
  },
  {
    path: "hrnew/form",
    component : HeadnewComponent
  },
  {
    path: "training/form",
    component : TrainingFormComponent
  },
  {
    path: "km/form",
    component : KmFormComponent
  },
  {
    path: "detailhrnew",
    component : DetailnewComponent
  },
  {
    path: "hris/form",
    component : HrisComponent
  },
  {
    path: "activity/form/:id",
    component : ActivityFormComponent
  },
  {
    path: "form",
    component : FormComponent
  },
  {
    path: "Seminar",
    component : SeminarComponent
  },
  {
    path: "secretary/form",
    component : FormnewComponent
  },
  {
    path: "policy/form",
    component : PolicySecComponent
  },
  {
    path: "training-sec/form",
    component : TrainingSecComponent
  },
  {
    path: "other-sec/form",
    component : OtherSecComponent
  },
  {
    path: "csr/form",
    component : CsrFormComponent
  },
  {
    path: "GalleryMarketing",
    component : GalleryMarketingComponent
  },
  {
    path: "Policycommunicate/form",
    component: PolicycommuFormComponent
  },
  {
    path: "Download/form",
    component: DownloadCommuComponent
  },
  {
    path: "journal/form",
    component: JournalComponent
  },
  {
    path: "Law/form",
    component: LawFormComponent
  },
  {
    path: "Regulations/form",
    component: RegulationsComponent
  },
  {
    path: "PictureSec/form/:id",
    component: PictureFormComponent
  },
  {
    path: "**",
    component : MemberComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
