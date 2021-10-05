import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

import Swal from 'sweetalert2';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-pais-index',
  templateUrl: './pais-index.component.html',
  styleUrls: ['./pais-index.component.css']
})
export class PaisIndexComponent implements OnInit {

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

  constructor(
    private formService: FormService,
  ) { 
  }

  ngOnInit() {
    this.formService.get_departamentos('').subscribe(
      response =>{
        this.listaDepartamentos = response.departamento;
        console.log(this.listaDepartamentos);
        
      },
      error=>{

      }
    );

    this.formService.get_paises().subscribe(
      response=>{
        this.listaPaises = response.pais;
      },
      error=>{

      }
    );


  }

  search(searchForm){
    this.formService.get_departamentos(searchForm.value.filtro).subscribe(
      response =>{
        this.listaDepartamentos = response.departamento;
      },
      error=>{

      }
    );
    
  }

  save_pais(paisForm){
    if(paisForm.valid){
      this.formService.insert_pais({
        nombre: paisForm.value.nombre_pa,
        region: paisForm.value.region_pa,
      }).subscribe(
        response=>{
          this.formService.get_paises().subscribe(
            response =>{
              this.listaPaises = response.pais;
              $('#modal-save-pais').modal('hide');
            },
            error=>{

            }
          );
        },
        error=>{

        }
      );
      
    }
  }

  eliminar(id){
    Swal.fire({
      title: 'Estas seguro de eliminarlo?',
      text: "Eliminación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Registro eliminado!',
          'Se elimino correctamente.',
          'success'
        )

        this.formService.delete_departamento(id).subscribe(
          response=>{
            this.formService.get_departamentos('').subscribe(
              response=>{
                this.listaDepartamentos = response.departamento;
              }
              ,erro=>{

              }
            );
          }
          ,error=>{

          }
        );

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Se cancelo la solicitud :)',
          'error'
        )
      }
    })
  }


  close_alert(){
    this.success_message = '';
  }

  get_id(id){
    this.departamento_id = id;
  }

}
