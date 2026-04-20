import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'home-page',
  imports: [],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {
  title = 'home-page';
}
