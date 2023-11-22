import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.scss',
})
export class SongsComponent {}
