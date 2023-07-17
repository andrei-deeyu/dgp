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

  toggleWorkSettings(input: EventTarget | null) {
    let inputEl = input as HTMLElement;

    let el: HTMLElement | null | undefined = inputEl.parentNode?.querySelector('.workSettings');
    let els = this.elementRef.nativeElement.querySelectorAll('.workSettings');

    els.forEach(( otherEl: HTMLElement ) => otherEl !== el ? otherEl.style.display = 'none' : null);

    if( el && el.style.display == 'block' )
      el.style.display = 'none'
    else if( el ) el.style.display = 'block'
  }

  hideWork(index: number, input: EventTarget | null) {
    this.workList[index].hidden = !this.workList[index].hidden;
    this.toggleWorkSettings(input);
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
