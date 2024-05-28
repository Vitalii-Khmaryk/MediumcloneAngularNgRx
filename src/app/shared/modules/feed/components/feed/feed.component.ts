import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { Observable, Subscription } from 'rxjs';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { environment } from 'src/environment/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import queryString from 'query-string';
@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit,OnDestroy {
  @Input('apiUrl') apiUrlProps: string;
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<GetFeedResponseInterface | null>;
  limit = environment.limit;
  baseUrl: string = '';
  currentPage!: number;

  queryParamsSubscription!:Subscription

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners() {
  this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage=Number(params['page'] || '1');
      this.fetchFeed();
    });
  }

  private fetchFeed(): void {
    const offset=this.currentPage*this.limit-this.limit;
    const parsedUrl=queryString.parseUrl(this.apiUrlProps);
    const stringifiedParams=queryString.stringify({
      limit:this.limit,
      offset,
      ...parsedUrl.query
    })
    const apiUrlWithParams=`${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}
