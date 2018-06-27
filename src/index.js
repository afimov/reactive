import $ from 'jquery';
import { Observable, of, just } from 'rxjs';


of("Hello World!")
  .subscribe(x => console.log(x));
