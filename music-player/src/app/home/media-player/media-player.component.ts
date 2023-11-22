import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.scss',
})
export class MediaPlayerComponent {}
