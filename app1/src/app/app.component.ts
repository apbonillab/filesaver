import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APP1';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    
  }

  prueba(){
    var result = ["Item 1", "Item 3"];
    const myJsonString = JSON.stringify(result);
    const blob = new Blob([myJsonString], {
      type: "application/vnd.ms-excel;charset=utf-8"
    });
    saveAs(blob, "Report.xls");
  }
  
}
