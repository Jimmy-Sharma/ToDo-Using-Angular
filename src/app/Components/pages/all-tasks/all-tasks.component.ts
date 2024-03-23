import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css'
})
export class AllTasksComponent {
  newtask: string = ""
  taskResults: any[] = []
  httpService = inject(HttpService)
  ngOnInit(){
    this.getAllTasks()
  }
  addTask() {
    console.log(this.newtask)
    this.httpService.addTask(this.newtask).subscribe((res) => {
      console.log("added to db")
      this.newtask = ""
      this.getAllTasks()
    })
  }

  getAllTasks() {
    this.httpService.getAllTasks().subscribe((res:any) => {
      this.taskResults=res
    })
  }
}
