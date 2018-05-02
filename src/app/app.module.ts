import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { customHttpProvider } from './common/services/chttp.service';

import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

import { AuthGuard } from './services/auth.guard';
import { routing } from './app.routing';
import { AuthService } from './services/auth.service';
import { CommentService } from './services/comment.service';
import { UpdateService } from './services/update.service';
import { UpdateCreateComponent } from './update-create/update-create.component';
import { EditComponent } from './user/edit/edit.component';
import { ResourceService } from './services/resource.service';
import { ImageViewUploadComponent } from './common/components/image-view-upload/image-view-upload.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    CommentsComponent,
    CommentComponent,
    HomeComponent,
    LoginComponent,
    UpdateCreateComponent,
    EditComponent,
    ImageViewUploadComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AuthService,
    CommentService,
    UpdateService,
    ResourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
