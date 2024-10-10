import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorMessageComponent } from './components/common/error-message/error-message.component';
import { SuccessMessageComponent } from './components/common/success-message/success-message.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { HomeComponent } from './components/home/home.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { MenuDialogComponent } from './components/menu-dialog/menu-dialog.component';
import { ProjectInfoDialogComponent } from './components/projects/project-info-dialog/project-info-dialog.component';
import { ProjectInfoComponent } from './components/projects/project-info/project-info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StartAnimationDirective } from './directives/start-animation.directive';
import { ValidationErrorMessagePipe } from './pipes/validation-error-message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    MenuDialogComponent,
    FooterComponent,
    ProjectInfoComponent,
    HobbyComponent,
    ProjectInfoDialogComponent,
    ImageSliderComponent,
    ValidationErrorMessagePipe,
    SuccessMessageComponent,
    ErrorMessageComponent,
    StartAnimationDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
