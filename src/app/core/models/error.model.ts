export interface ErrorModel {
  code: string;
  message: string;
  formErrors: FormError[];
  details: Map<string, string>; 
};

export interface FormError {
  field: string;
  message: string;
}