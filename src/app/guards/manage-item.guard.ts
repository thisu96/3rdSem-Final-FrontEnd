import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ManageItemComponent } from '../views/manage-item/manage-item.component';

@Injectable({
  providedIn: 'root'
})
export class ManageItemGuard implements CanDeactivate<ManageItemComponent> {
  canDeactivate(component: ManageItemComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (component.frmItem.dirty){
      return confirm("Are you sure you want to discard your changes?");
    }
    return true;
  }
}
