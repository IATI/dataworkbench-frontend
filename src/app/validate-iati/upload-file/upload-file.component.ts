import { Router } from '@angular/router';
import { LogService } from './../../core/logging/log.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  selectedFile: File;
  workspaceId = '';
  fileUploaded = false;
  fileValidated = false;

  constructor(private http: HttpClient,
              private logger: LogService,
              private router: Router) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  UploadFile() {
    // const uploadData = new FormData();
    // uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    // this.http.post('my-backend.com/file-upload', uploadData, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    //   .subscribe(event => {
    //     console.log(event); // handle event here
    //   });
    this.workspaceId = Math.random().toString(36).substring(2);

    timeout(2000);

    this.fileUploaded = true;
  }

  ValidateFile() {
    this.logger.debug('Start validate');

    this.router.navigate(['validate', this.workspaceId]);
  }

}