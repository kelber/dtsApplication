import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageComponent } from './message/message.component';
// import { StoreComponent } from './store.component';



const routes: Routes = [
  { path: 'msg', component: MessageComponent,
    children: [
      { path: '', component: MessageListComponent },
      { path: 'message-list', component: MessageListComponent },
      { path: 'message-detail', component: MessageDetailComponent },
    ]


 }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }