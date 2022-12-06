import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss']
})
export class FillComponent implements OnInit {

  local_db_data:any;
  data:any=[]

  constructor(){}
  ngOnInit():void{
  }
  submit(){
    if (localStorage.getItem('data')==='[]') {
      localStorage.removeItem('data')
    }else{
    let obj={
      username:this.form.get('username')?.value
    }
    this.data.push(obj)
    // console.log(this.data)

    if (JSON.parse(JSON.stringify(localStorage.getItem('data'))) !==null) {

      const dummy:any=[];
      dummy.push(this.data)
      // saved_data.push(data)

      dummy.push(obj)

      localStorage.setItem('data',JSON.stringify(dummy[0]))
    } else {
      localStorage.setItem('data',JSON.stringify(this.data))
    }
  }
    this.form.reset()
    
  }
  
  form=new FormGroup({
    username:new FormControl('',[Validators.required])
  })

showdata(){
  // console.log(localStorage.getItem('data'))
  const a:any=localStorage.getItem('data')
  this.local_db_data=JSON.parse(a)
  console.log(this.local_db_data)
}  
delete(t:any,i:any){
  this.local_db_data.forEach((e:any,index:any) => {
    if (e===t) {
      this.local_db_data.splice(index,1)
      localStorage.setItem('data',JSON.stringify(this.local_db_data))
    }
  });
  console.log(this.local_db_data)
}
  }
