import { Component } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { Router } from '@angular/router';
import { StoreService } from '../../service/store.service';
import { BackpackService } from '../../service/backpack.service';
import { IntegrationService } from '../../service/integration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'module-books',
  templateUrl: './component.html',
  styleUrls: ['../../wargos.css', './component.css']
})
export class LoansComponent {
  items: any = [];
  loans: any = [];
  I18N = null;
  user = null;
  person: string = null;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private _service: BooksService,
    private integration_service: IntegrationService,
    private loans_store: BackpackService,
    private store: StoreService
  ) {
    this.user = store.load('user', false) || null;
    this.loans = this.populate(loans_store.load());
    this.I18N = loans_store.I18N;
    integration_service.on((item) => {
      this.user = item;
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

  booking() {
    
  }

  booking2() {
    var config = null;
    if (!this.user && !this.person) {
        this.toastr.warning('Para realizar una reservacion tiene que llenar en el campo su nombre', 'Nombre completo');
        return;
    }
    if (!confirm('Esta seguro que quiere reservar estos materiales bibliograficos')) {
        return;
    }
    if (this.person) {
      config = {
        user_id: null,
        name: this.person,
        third_system: null
      };
    }
    if (this.user) {
      config = {
        user_id: this.user._id,
        name: this.user.name,
        third_system: 'api.atendance.ninja'
      };
    }
    this.loans.forEach((loan) => {
        var item = {
        _id: this.next(),
        type: loan.key,
        code: loan.code,
        material_id: loan.item.material._id,
        ejemplar_id: loan.item.ejemplar._id,
        information: JSON.stringify({}),
        state: 'BOOKED',
        user_id: config._id,
        name: config.name,
        third_system: config.third_system
      }
      this.integration_service.store_loan(item)
      .subscribe((item) => {
        loan.state = true;
      }, (error) => {
        console.log(<any>error);
      });
      return ;
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
}
