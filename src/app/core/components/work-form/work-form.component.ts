import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Work } from '../../models/work.model';

@Component({
  selector: 'work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.scss']
})
export class WorkFormComponent {
  @Input() openForm!: boolean;
  @Output() openFormChange: EventEmitter<boolean> = new EventEmitter();
  @Output() newWorkEvent: EventEmitter<Work> = new EventEmitter();

  form = new FormGroup({
    title: new FormControl(''),
    details: new FormControl(''),
    link: new FormControl('')
  })
  img: string | ArrayBuffer | null = null;

  selectFile(event: any) {
    let file = event.target.files[0];

    if(!file.type.startsWith('image')) return;

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => this.img = reader.result;
  }

  addNewWork(f: FormGroup) {
    this.newWorkEvent.emit({ ...f.value, img: this.img });
    this.closeForm();
    f.reset();
  }

  closeForm() {
    this.openFormChange.emit(false);
  }
}