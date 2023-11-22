import { NgClass } from '@angular/common'
import { Component, signal } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule, NgClass],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss',
})
export class PlaylistsComponent {
  playlists = signal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
}
