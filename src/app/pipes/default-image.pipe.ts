import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    /*
      Si la variable path est une chaine vide ou contient que
      des blancs je renvoi le path de mon image par défaut
      Sinon je renvoi le path comme il est
    */
    // if (path.trim() == '')
    if (!path.trim().length) {
      return 'cv.png';
    }
    return path;
  }
}
