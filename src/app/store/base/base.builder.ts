import { Builder } from "builder-pattern";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorModel } from "../../core/models/error.model";

export class BaseBuilder {
  static build(http: HttpErrorResponse): ErrorModel {
    let messageError = http.error.message || http.error.formErrors;
    if(!messageError) {
      return this.genericError();
    }
    return Builder<ErrorModel>()
      .message(http.error.message)
      .code(http.error.code)
      .formErrors(http.error.formErrors)
      .details(http.error.details)
      .build();
  }

  static genericError(): ErrorModel {
    return Builder<ErrorModel>()
      .message('YOU SHALL NOT PASS!')
      .build();
  }
};
