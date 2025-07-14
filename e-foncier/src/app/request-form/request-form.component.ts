import { Component } from '@angular/core';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent {
  name = '';
  titleNumber = '';
  attachments: string[] = [];

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.attachments.push(files[i].name);
    }
  }

  submit() {
    console.log('Demande envoyée', { name: this.name, title: this.titleNumber, attachments: this.attachments });
  }
}
