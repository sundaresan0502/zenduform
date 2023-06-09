import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import submissionData from '../../../assets/data/submissionData.json';
import {SubmissionDataModel} from '../../model/submissionDataModel';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit, AfterViewInit {
  loadMapComponent = false;
  displayedColumns: string[] = ['Select', 'Task', 'Status', 'From', 'To', 'Customer_Address', 'Due_Date'];
  arrayofSubmissions: SubmissionDataModel[] = submissionData;
  dataSource = new MatTableDataSource<SubmissionDataModel>(this.arrayofSubmissions);
  _paginator: MatPaginator;

  @ViewChild(MatPaginator,  {static: false}) set matPaginator(paginator: MatPaginator) {
    this._paginator = paginator;

    if (this.dataSource) {
        this.dataSource.paginator = paginator;
    }
  }
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



