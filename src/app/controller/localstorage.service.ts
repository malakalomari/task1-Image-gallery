import { Injectable } from '@angular/core';



@Injectable()
export class LocalstorageService {
  imgData= '';
  setImage(savedImage: any): void {
    localStorage.setItem('imgData', JSON.stringify(savedImage));
  }
  getImage() {
    return JSON.parse(localStorage.getItem('imgData'));
  }
  remove(img: any) {
    localStorage.clear();  }
}
