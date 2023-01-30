import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { message } from '../models/message';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss'],
})
export class FormMessageComponent implements OnInit {
  @Input() public init!: message;
  @Output() public submitted: EventEmitter<message>;
  public form!: FormGroup;
  public canalId!: string;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.submitted = new EventEmitter();

    this.route.params.subscribe((params) => {
      this.canalId = params['id'];
      console.log(`route : ${this.canalId}`);
    });
  }

  // id mauvaise pratique ?

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: [this.init.user],
      content: [this.init.content],
      canalId: this.canalId,
      id: [this.init.id],
      date: [this.init.date],
    });
  }

  ngOnSubmit(): void {
    console.log(`in submit`);
    console.log(this.canalId);
    this.submitted.emit(this.form.value);
  }
}
