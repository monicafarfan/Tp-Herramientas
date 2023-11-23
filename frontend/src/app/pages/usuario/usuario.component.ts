import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
 

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  title:string="Gestión de Usuarios"
  usuarios:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    this.userService.getAll().subscribe(res=>{
      this.usuarios=res
      console.log(this.usuarios);
    });
  }

  delete(item: User): void {
    Swal.fire({
      title: 'Estas Seguro?',
      text: `Eliminar el usuario: ${item.username}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Eliminar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(item.id).subscribe(() => {
          this.usuarios = this.usuarios.filter(cat => cat != item);
          Swal.fire(
            'Eliminado!',
            'Su archivo ha sido eliminado',
            'success'
          )
        }
        );

      }
    })
  }
}
