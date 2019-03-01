import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map} from 'rxjs/operators';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'restconsumer';
  selectedContent : any;
  restItems: any;
  restItemUrl = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}
   ngOnInit() {this.getRestItems(); }

   getRestItems(): void {
     this.restItemsService()
     .subscribe(
      restItems => {
        this.restItems = restItems;
        console.log(this.restItems);
      }
    )
   }

   restItemsService() {
     return this.http
     .get<any[]>(this.restItemUrl)
     .pipe(map(data => data));
   }
}
