import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { RouterModule, Routes } from '@angular/router';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ArticleComponent } from './components/article/article.component';
import { TagListModule } from '../shared/modules/tagList/tagList.module';
import { ArticleService } from './services/article.service';
import { DeleteArticleEffect } from './store/effects/deteteArticle.effect';

const routes:Routes=[
  {
    path:'articles/:slug',
    component:ArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect,DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    TagListModule
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers:[SharedArticleService,ArticleService]
})
export class ArticleModule {}
