import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Work } from '../../models/work.model';

@Component({
  selector: 'work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.scss']
})
export class WorkFormComponent {
  @Input() openForm!: { obj: Work, index: number } | boolean;
  @Output() openFormChange: EventEmitter<{ obj: Work, index: number } | boolean> = new EventEmitter();
  @Output() submitEvent: EventEmitter<{ alreadyExists: number | null, obj: Work }> = new EventEmitter();

  form = new FormGroup({
    title: new FormControl(''),
    details: new FormControl(''),
    link: new FormControl('')
  })
  img: string | ArrayBuffer | null = null;
  hidden: boolean = false;

  ngOnChanges() {
    this.form.reset();
    this.img = null;
    this.hidden = false;

    if(this.openForm instanceof Object) {
      this.form.controls.title.setValue(this.openForm.obj.title)
      this.form.controls.details.setValue(this.openForm.obj.details)
      this.form.controls.link.setValue(this.openForm.obj.link)
      this.img = this.openForm.obj.img;
      this.hidden = this.openForm.obj.hidden;
    }
  }

  selectFile(event: any) {
    let file = event.target.files[0];

    if(!file.type.startsWith('image')) return;

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => this.img = reader.result;
  }

  submit(f: FormGroup) {
    let work: Work = {
      ...f.value, img: this.img, hidden: this.hidden
    }

    if( this.openForm instanceof Object )
      this.submitEvent.emit({ alreadyExists: this.openForm.index, obj: work });
    else
      this.submitEvent.emit({ alreadyExists: null, obj: work });

    this.closeForm();
    f.reset();
    this.img = null;
    this.hidden = false;
  }

  closeForm() {
    this.openFormChange.emit(false);
    this.img = null;
    this.hidden = false;
  }
}