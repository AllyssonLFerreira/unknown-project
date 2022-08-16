import {AbstractControl} from "@angular/forms";
import {HttpParams} from "@angular/common/http";
import * as moment from "moment";
import {Moment} from "moment";

export class HttpParamBuilder {

  static controlsToHttpParams(controls: { [key: string]: AbstractControl; }): HttpParams{
    let params = new HttpParams();
    HttpParamBuilder.controlsToMap(controls)?.forEach((value: any, key: any) => {
      params = params.set(key, value);
    });
    return params;
  }

  static controlsToMap(controls: { [key: string]: AbstractControl; }): Map<string, any> | undefined {
    let paramsMap = new Map<string,any>();
    Object.entries(controls)
      .filter(([key, value]) => !!value.value)
      .forEach(([key, formControl]) => {
        if (formControl.value instanceof moment) {
          paramsMap.set(key, (formControl.value as Moment).format('DD/MM/YYYY'));
        } else {
          paramsMap.set(key, formControl.value);
        }
      });
    if (paramsMap.size === 0) return undefined;
    return paramsMap;
  }

  static paramMapToHttpParams(paramMap: { [key: string]: any; }): HttpParams{
    let params = new HttpParams();
    Object.entries(paramMap)
      .forEach(value => {
        params = params.set(value[0], value[1]);
      });
    return params;
  }

}
