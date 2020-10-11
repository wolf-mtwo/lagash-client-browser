import { Component, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IntegrationService } from '../../service/integration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'ngbd-modal-reader-create',
  templateUrl: './modal.html'
})
export class NgbdModalReaderCreate {
  submitted = false;
  readerForm: FormGroup;
  faculties: any = [];
  carrers: any = [];
  semesters: any = [];
  @Input() token;

  constructor(
    public modal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private integration_service: IntegrationService
    ) {
    this.search();
  }

  ngOnInit() {
    this.semesters = this.calc_ingress(this.get_years());
    this.readerForm = this.formBuilder.group({
      _id: this.next(),
      auth_type: 'LOCAL',
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      faculty_id: ['', Validators.required],
      career_id: ['', Validators.required],
      card_type: ['', Validators.required],
      card_id: [this.token, Validators.required],
      semester: ['', Validators.required],
      enabled: [true, Validators.required]
    });
  }

  search() {
    this.integration_service.get_faculties()
    .subscribe((items) => {
      this.faculties = items;
    }, (error) => {
      console.log(<any>error);
    });
    this.integration_service.get_carrers()
    .subscribe((items) => {
      this.carrers = items;
    }, (error) => {
      console.log(<any>error);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.readerForm.invalid) {
      return;
    }
    this.integration_service.store_reader(this.readerForm.value)
    .subscribe((item) => {
      this.modal.close(item);
    }, (error) => {
      console.log(<any>error);
    });
  }

  get fields() {
    return this.readerForm.controls;
  }

  filter(carrers, fields) {
    return carrers.filter((o)=> o.faculty_id === fields.faculty_id.value);
  }

  next() {
    var code = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
    return code;
  }

  get_years() {
    let result = [];
    let year = new Date().getFullYear();
    for (let index = 0; index < 6; index++) {
      result.push(year--);
    }
    return result;
  }

  calc_ingress(years) {
    let result = ['OTROS'];
    years.forEach((year) => {
      result.push(`${year}-A`);
      result.push(`${year}-B`);
    });
    return result;
  }

  onReset() {
    this.submitted = false;
    this.readerForm.reset();
  }
}
