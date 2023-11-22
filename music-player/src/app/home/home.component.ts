import { Component } from '@angular/core'
import { MediaPlayerComponent } from './media-player/media-player.component'
import { PlaylistsComponent } from './playlists/playlists.component'
import { SongsComponent } from './songs/songs.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MediaPlayerComponent, PlaylistsComponent, SongsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
