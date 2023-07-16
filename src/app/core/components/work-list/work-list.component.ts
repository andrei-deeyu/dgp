import { Component, ElementRef } from '@angular/core';
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
  formOpened: { obj: Work, index: number } | boolean = false;

  constructor(
    private service: WorkListService,
    private elementRef: ElementRef
    ) {}

  ngOnInit() {
    this.workList = this.service.workList;
  }

  openLink(link: string) {
    window.location.href = link;
  }

  toggleWorkSettings(index: number) {
    let els = this.elementRef.nativeElement.querySelectorAll('.workSettings');

    els.forEach(( el: HTMLElement ) => els[index] !== el ? el.style.display = 'none' : null);

    if( els[index].style.display == 'block' )
      els[index].style.display = 'none'
    else els[index].style.display = 'block'
  }

  hideWork(index: number) {
    this.workList[index].hidden = !this.workList[index].hidden;
    this.toggleWorkSettings(index);
  }

  deleteWork(index: number) {
    this.workList.splice(index, 1);
  }

  eventListener(response: { obj: Work, alreadyExists: number | null } ) {
    if(response.alreadyExists !== null) {
      this.workList[response.alreadyExists] = response.obj;
    } else this.workList.push(response.obj);
  }
}
