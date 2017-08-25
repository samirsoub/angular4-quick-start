# How to create a component

```bash
ng g component nameofthecomponent
```

## How to create a service

1. create it
```bash
ng g service services/data

```

2. import it in app.module.ts

```ts
import DataService from './services/data/service'
```

3. import it in whatever module needs to use it

```ts
import {DataService} from '/path/to/service'
```

4. Inject it into the component's constructor

```ts
class Component implements OnInit {

    constructor(private dataService:DataService) {

    }
}
```

## How to use the router

In app.module.ts
```typescript
import {RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [

    {
        path: "",
        component: UserComponent
    },

    {
        path: "/about",
        component: AboutComponent
    }
]

@ngModule({
   imports: [
        ...,
        RouterModule.forRoot(appRoutes)
   ]
})
```
In app.component.html

```html
<router-outlet></router-outlet>
```
