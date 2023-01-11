# Angular

```js
/**
 * @author Zehan Khan
 * @description This Repo created for Fun
 */

// Angular Imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zehan'
})
export class NamePipe implements PipeTransform {

  transform(value: string, replaceChar?: string): any {
    if (value === undefined) {
      return value;
    }
    // Replace with the specified character
    if (replaceChar) {
      return replaceChar.repeat(value.length);
    }
    // Replace value with asterisks
    return '*'.repeat(value.length);
  }
}
```
