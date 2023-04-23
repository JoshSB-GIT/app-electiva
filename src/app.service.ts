import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<center>
              <h2>Bienvenido a la API</h2>
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/13532749510923.58b6f17689528.gif" alt="">
              <h4>Lo sé, no es usual dar respuestas con imagenes...</h4>
            </center>`;
  }

  getSum(n1: number, n2: number): string {
    const Res = 'Your result is: ' + String(Number(n1) + Number(n2));
    return Res;
  }

  getRes(n1: number, n2: number): string {
    const Res = 'Your result is: ' + String(Number(n1) - Number(n2));
    return Res;
  }

  getMul(n1: number, n2: number): string {
    const Res = 'Your result is: ' + String(Number(n1) * Number(n2));
    return Res;
  }

  getDiv(n1: number, n2: number): string {
    let Res = 'Your result is: ' + String(Number(n1) / Number(n2));
    if (n2 == 0) {
      Res = 'cannot be divided by 0';
    }
    return Res;
  }
}
