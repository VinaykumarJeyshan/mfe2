import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeFragmentComponent } from './mfe-fragment/mfe-fragment.component';
import { Route, RouterModule } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', component: MfeFragmentComponent },   // Add route
  
];

@NgModule({
  declarations: [
    MfeFragmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes)
  ],
})
export class RemoteMfeModule { }
