import { Router } from '@angular/router';
import { Component, Type } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Global } from '../../service/global.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BooksService } from '../../service/books.service';
import { StoreService } from '../../service/store.service';
import { BackpackService } from '../../service/backpack.service';
import { ReaderService } from '../../service/readers.service';
import { IntegrationService } from '../../service/integration.service';
import { NgbdModalReaderCreate } from './modal';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'module-books',
  templateUrl: './component.html',
  styleUrls: ['../../wargos.css', './component.sass']
})
export class LoansComponent {
  items: any = [];
  loans: any = [];
  faculties: any = [];
  carrers: any = [];
  I18N = null;
  user = null;
  token: string = null;

  constructor(
    private router: Router,
    private global: Global,
    private toastr: ToastrService,
    private _service: BooksService,
    private reader_service: ReaderService,
    private integration_service: IntegrationService,
    private loans_store: BackpackService,
    private store: StoreService,
    private _modalService: NgbModal,
  ) {
    this.loans = this.populate(loans_store.load());
    this.I18N = loans_store.I18N;
    integration_service.on((item) => {
      this.user = item;
    });
    this.search();
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
      this.user = this.store.load('user', false) || null;
    }, (error) => {
      console.log(<any>error);
    });
  }

  populate(loans) {
    return loans.map((loan) => {
      loan.code = [
        loan.item.material.code_material,
        loan.item.material.code_author,
        loan.item.ejemplar.suffix,
        'Ej.' + loan.item.ejemplar.order
      ].join(' ');
      return loan;
    });
  }

  load_user(reader) {
    this.store.save('user', reader, false);
    this.integration_service.user_emit(reader);
    this.user = reader;
  }

  clean() {
    this.store.remove('user');
    this.user = null;
  }

  find() {
    this.reader_service.find_by_id(this.token)
    .subscribe((item) => {
      this.load_user(item);
    }, (error) => {
      this.toastr.warning('Esta credencial no esta registrado', 'Credencial');
      const modal = this._modalService.open(NgbdModalReaderCreate);
      modal.componentInstance.token = this.token;
      modal.result.then((res) => {
        this.load_user(res);
      }, (erro) => {
        console.log('Dismissed action: ' + erro);
      });
      console.log(<any>error);
    });
  }

  booking() {
    if (!this.user) {
        this.toastr.warning('Para realizar una reservacion tiene que ser un lector', 'Lector');
        return;
    }
    if (!confirm('Esta seguro que quiere reservar estos materiales bibliograficos')) {
        return;
    }
    this.loans.forEach((loan) => {
      if (loan.state) {
        return;
      }
      var item = {
        _id: this.next(),
        material_type: loan.key,
        code: loan.code,
        material_id: loan.item.material._id,
        ejemplar_id: loan.item.ejemplar._id,
        state: 'BOOKED',
        reader_id: this.user._id,
        third_system: 'lagash-default-user'
      }
      this.integration_service.store_loan(item)
      .subscribe(() => {
        loan.state = true;
      }, (error) => {
        console.log(<any>error);
      });
      return;
    });
    this.loans_store.remove_all();
  }

  public go_to_item(loan) {
    switch(loan.key) {
    case 'BOOK':
      this.router.navigate(['/books', loan.item.material._id]);
        break;
    case 'THESIS':
      this.router.navigate(['/thesis', loan.item.material._id]);
        break;
    case 'MAGAZINE':
      this.router.navigate(['/magazines', loan.item.material._id]);
        break;
    case 'NEWSPAPER':
      this.router.navigate(['/newspapers', loan.item.material._id]);
        break;
    default:
      throw new Error('not supported resource');
    }
  }

  next() {
    var code = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
    return code;
  }

  public remove_loan(item, i) {
    this.loans.splice(i, 1);
    this.loans_store.remove_position(i);
  }

  get_faculty(_id) {
    return this.faculties.find(o => o._id === _id);
  }

  get_carrer(_id) {
    return this.carrers.find(o => o._id === _id);
  }
}
