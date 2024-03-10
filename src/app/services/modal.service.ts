import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible:boolean;
}

@Injectable({
  providedIn: 'root'
})


export class ModalService {
  private modals: IModal[] =[];

  constructor() { }

  register(id: string) {
    this.modals.push( { id, visible: false})
  }
  ungregister(id: string ) {
    this.modals = this.modals.filter( 
      element => element.id !== id
    )
  }
  isModalOpen(id: string): boolean {
    return !!this.modals.find(element => { return element.id===id})?.visible;
  }

  toggleModal(id:string ) {
    const myModal=this.modals.find(element => { return element.id===id});
    if (myModal) {
      myModal.visible=!myModal.visible;
    }
  }
}
