import { Routes } from '@angular/router';
import { AllTasksComponent } from './Components/pages/all-tasks/all-tasks.component';
import { CompletedTasksComponent } from './Components/pages/completed-tasks/completed-tasks.component';
import { ImportantTasksComponent } from './Components/pages/important-tasks/important-tasks.component';

export const routes: Routes = [
    {
        path:"",
        component:AllTasksComponent
    },
    {
        path:"completed",
        component:CompletedTasksComponent
    },
    {
        path:"important",
        component:ImportantTasksComponent
    }
];
