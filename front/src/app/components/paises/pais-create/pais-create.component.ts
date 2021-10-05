import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { Departamento } from 'src/app/models/Departamento';

@Component({
  selector: 'app-pais-create',
  templateUrl: './pais-create.component.html',
  styleUrls: ['./pais-create.component.css']
})
export class PaisCreateComponent implements OnInit {

  public pais:any;
  public listaPaises: any;
  public listaDepartamentos: any;
  public p:any;
  public filtro:any;
  public filtroText:any;
  public nombre_paText:any;
  public nombre_pa:any;
  public region_pa:any;
  public region_paText:any;
  public departamento_id:any;
  public success_message:any;
  public error_message:any;

  constructor(
    private _formService : FormService,
  ) { 
    this.listaDepartamentos = new Departamento('','','');
  }

  ngOnInit() {

    this._formService.get_paises().subscribe(
      response=>{
        this.listaPaises = response.pais;
        console.log(this.listaPaises);
        
      },
      error=>{

      }
    );
  }

  success_alert(){
    this.success_message = ''; 
   }
 
   error_alert(){
     this.error_message = ''; 
    }
 
   onSubmit(paisForm){
     if(paisForm.valid){
      this._formService.insert_pais({
        nombre: paisForm.value.nombre,
        idpais: paisForm.value.idpais,
        
      }).subscribe(
        response =>{
         this.success_message = 'Se registro el departamento correctamente';
         this.listaDepartamentos = new Departamento('','','');
        },
        error=>{
          
        }
      );
       
     }else{
       this.error_message = 'Complete correctamente el formulario';
  
     }
   }
}
