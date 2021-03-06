import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FetchPostComponent } from './fetch-post/fetch-post.component';
import { PackageSearchComponent } from './package-search/package-search/package-search.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { httpInterceptorProviders } from './http-interceptors';
import { MessageService } from './message.service';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { PostService } from './pages/posts/posts.service';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    UsersComponent,
    FetchDataComponent,
    FetchPostComponent,
    PackageSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzCarouselModule,
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    PostService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders,
    { provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
