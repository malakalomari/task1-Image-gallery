import { Component, ElementRef , OnInit} from '@angular/core';
import { Info } from '../model/info';
import { LocalstorageService } from '../controller/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalstorageService]
})
export class AppComponent implements OnInit {
  title = 'My First Task';
  savedImg: Info[] = [];
  img = '';
  storedImg: Info[] = [] ;
  constructor(private element: ElementRef, private localstoraeService: LocalstorageService) {}

  PreviewImage(event) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.img = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  ngOnInit(): void {
    this.storedImg =  this.localstoraeService.getImage();
  }
  imgInfo(title: string , desc: string, date: any) {
    this.savedImg.push(
      new Info(this.img, title, desc, date));
    this.localstoraeService.setImage(this.savedImg);
    this.storedImg = this.localstoraeService.getImage();
  }
  delete(index) {
    this.storedImg.splice(index, 1);
    this.savedImg.splice(index, 1);
  }
}
