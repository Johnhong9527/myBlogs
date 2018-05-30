### 1

> Failed to compile.
/home/seam/Code/Angular/myApp/src/app/http-client/http-client.component.ts (4,1): Decorators are not valid here.

* 出现原因: 通过html

```typescript
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})

interface ProductResponse {
  message: string;
}
interface ItemsResponse {
  results: string[];
}

export class HttpClientComponent implements OnInit {

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.http.get<ItemsResponse>
    ('http://api.yiguanjia.me/index.php?r=o2o/product/list').subscribe(res =>
      console.log(res.results)
    );
  }

}
```
