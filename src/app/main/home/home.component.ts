import { Component } from '@angular/core';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  videos: any[] = [];

  constructor(private videoService: VideosService) {}

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.videoService.getMostPopular().subscribe({
      next: (videos) => {
        this.videos = videos;
      },
      error: (error) => {
        console.error('Error al obtener los videos:', error);
      },
    });
  }

  formatNumber(num: number) {
    if (num < 10000) {
      return num.toString();
    } else if (num < 1000000) {
      return (num / 1000).toFixed(0) + ' K';
    } else {
      return (num / 1000000).toFixed(2) + ' M';
    }
  }

  formatDuration(duration: string): string {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = duration.match(regex);

    if (!matches) {
      throw new Error('Invalid duration format');
    }

    const hours = parseInt(matches[1] || '0', 10);
    const minutes = parseInt(matches[2] || '0', 10);
    const seconds = parseInt(matches[3] || '0', 10);

    // Formatear las horas, minutos y segundos en una cadena
    const formattedHours = hours > 0 ? hours + ':' : '';
    const formattedMinutes =
      hours > 0 ? String(minutes).padStart(2, '0') : String(minutes);
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
  }
}
