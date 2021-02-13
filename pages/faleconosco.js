import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Image from 'next/image'


function Falecn(){
    return(   

    <div>
         <Menu />
        <h1> Fale conosco</h1>
 
    <Form inline>
    <FormGroup>
        <Label for="examplenome" hidden>Nome</Label>
        <Input type="nome" name="nome" id="nome" placeholder="nome" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="exampleEmail" hidden>Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="examplePassword" hidden>Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      {' '}
      <Button>Submit</Button>
    </Form>



 

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

 

<div className = "conteudo" id= "conteudo">
     <img src="ajudando.jpg" alt="">
 </img>
    

    </div>



    
   

    </div>);


} 



export default Falecn