import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() sectionTitle: string = "";
  userName = "Amy Butler";
  
  constructor() { }

  ngOnInit(): void {
  }

}
