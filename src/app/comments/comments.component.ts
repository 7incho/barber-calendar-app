import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de lo que sea:</h3>
    <img
      src="https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-videoSixteenByNineJumbo1600-v2.jpg"
      alt=""
    />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ullam ex
      tempore veritatis quos, debitis laboriosam delectus? Consectetur veniam
      officiis ipsam exercitationem deserunt nihil reprehenderit delectus, quam
      suscipit voluptate cupiditate?
    </p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }`,
})
export class CommentsComponent {}
