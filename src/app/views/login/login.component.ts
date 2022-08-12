import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
/* Grupo de Form a ser validado */
  formLogin = this.formBuilder.group({
    user: new FormControl<string>({
      value:'', disabled:false}, Validators.required),
    pwd: new FormControl<string>({
      value:'', disabled: false}, Validators.required)
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {}

  /* Captura informação dos Inputs */
  getFormControl(name: string): FormControl {
    return this.formLogin?.get(name) as FormControl;
  }
/* Faz o Envio do formulário */
  submit(): void {
    console.log(this.formLogin.value)
    /* if (this.formLogin.valid) {
      this._authStore.auth()
    } */
  };

}

/* logar(){
  if(this.formLogin.invalid) return;
  var usuario = this.formLogin.getRawValue() as IUsuario;
  this.usuarioService.logar(usuario).subscribe((response) => {
      if(!response.sucesso){
        this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
          duration: 3000
        });
      }
  })
} */