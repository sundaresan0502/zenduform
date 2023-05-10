import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import studentsData from '../../../assets/data/data.json';
import {StudentDataModel} from '../../model/studentDataModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit, AfterViewInit {
  loadMapComponent = false;
  
  displayedColumns: string[] = ['id', 'name', 'email', 'gender'];
  dataSource = new MatTableDataSource<StudentDataModel>(ELEMENT_DATAs);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  enableMapComponent(value: boolean) {
    this.loadMapComponent = value;
  }

  ngOnInit() {
    console.log("application loaded successfully");
  } 
  
}
const ELEMENT_DATAs: StudentDataModel[] = studentsData


