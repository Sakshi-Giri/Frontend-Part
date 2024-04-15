import { Component } from '@angular/core';
import { ConnectionService } from '../../connection/connection.service';


@Component({
  selector: 'app-video.url',
  templateUrl: './video.url.component.html',
  styleUrl: './video.url.component.css'
})
export class VideoUrlComponent {

  videoUrl: string = '';
  downloading: boolean = false;
  videoBlobUrl: string = '';
  constructor(private videoService: ConnectionService) {}

  downloadAudio(): void {
    if (this.videoUrl) {
      this.videoService.downloadVideo(this.videoUrl).subscribe(
        (blob: Blob) => {
          // Handle the blob response for audio download
          const audioFile = new Blob([blob], { type: 'audio/wav' });
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(audioFile);
          downloadLink.download = 'audio.wav';
          downloadLink.click();
        },
        (error) => {
          console.error('Error downloading audio:', error);
          // Handle error
        }
      );
    }
  }

}
