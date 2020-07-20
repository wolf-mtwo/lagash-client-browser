import { Component, Type } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IntegrationService } from '../../service/integration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngbd-modal-reader-create',
  templateUrl: './modal.html'
})
export class NgbdModalReaderCreate {
  submitted = false;
  readerForm: FormGroup;
  faculties: any = [];
  carrers: any = [];

  constructor(
    public modal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private integration_service: IntegrationService
    ) {
    this.search();
  }

  ngOnInit() {
    this.readerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      faculty_id: ['', Validators.required],
      carrer_id: ['', Validators.required],
      card_type: ['', Validators.required],
      card_id: ['', Validators.required],
      semester: ['', Validators.required]
    })
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
    console.log(this.readerForm.value);
  }

  get fields() {
    return this.readerForm.controls;
  }

  filter(carrers, fields) {
    return carrers.filter((o)=> o.faculty_id === fields.faculty_id.value);
  }

  onReset() {
    this.submitted = false;
    this.readerForm.reset();
  }
}
