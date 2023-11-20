import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.scss',
})
export class MediaPlayerComponent { }