import { Injectable } from '@angular/core';
import { AngularFireAuth} from'@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth :AngularFireAuth, private router : Router) { }

  login(email : string, password :string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(res =>{
      localStorage.setItem('token','true');
      this.router.navigate(['dashboard']);

    if(res.user?.emailVerified == true){
      this.router.navigate(['dashboard']);
    } 

    }, err =>{
      alert("something went wrong");
      this.router.navigate(['/login']);

    })
  }

  register(email : string, password :string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(res => {
      alert(' registration successful');
      this.router.navigate(['/login']);
      this.sendEmailForVarification(res.user);
    }, err => {

      alert("something went wrong");
      this.router.navigate(['/register']);
    })
  }

  logout(){
    this.fireauth.signOut().then( () =>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err =>{
      alert(err.message);
    })
  }

  forgotpassword(email : string){
    this.fireauth.sendPasswordResetEmail(email).then(() =>{
      this.router.navigate(['/varify-email']);
    }, err =>{
      alert('something went wrong');
    })
  }

  sendEmailForVarification(user : any){
    user.sendEmailForVarification().then((res : any) =>{
      this.router.navigate(['/varify-email']);
    }, (err : any) =>{
      alert('something went wrong. not able to sent mail to your email')
    })
  }
  
}
