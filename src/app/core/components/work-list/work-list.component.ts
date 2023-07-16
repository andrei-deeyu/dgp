import { Component } from '@angular/core';
import { Work } from '../../models/work.model';
import { WorkListService } from '../../services/work-list.service';

@Component({
  selector: 'work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent {
  workList: Array<Work> = [];
  showHidden: boolean = false;
  formOpened: boolean = false;

  constructor(private service: WorkListService) {}

  ngOnInit() {
    this.workList = this.service.workList;
  }

  openLink(link: string) {
    window.location.href = link;
  }

  hide(index: number) {
    this.workList[index].hidden = !this.workList[index].hidden;
  }

  addNewWork(newWork: Work) {
    newWork.hidden = false;

    this.workList.push(newWork)
    console.log(this.workList)
  }
}
