 // Exemple de requête SQL pour récupérer des données
 connexion.query('SELECT * FROM utilisateur', (erreur, resultats) => {
    if (erreur) {
      console.error('La requête a échoué :', erreur);
      return;
    }
    // Afficher les résultats dans la console
    // console.log(JSON.stringify(resultats));
    for (let x in resultats){
      console.log(resultats);
    }
    var resultats2=JSON.stringify(resultats)
    var m=document.getElementById('bd')
    m.innerHTML=resultats2;
  }

  connexion.query('SELECT * FROM utilisateur WHERE Nom="name" AND password="pass"',(results)=>{
    if(results=null){
      console.log('existe pas');
      return;
    }
else{
  console.log('existe')
}
  })
  }
  var query="INSERT INTO departement (nom_departement) VALUES('table_user[0]')";

<div>
  
</div>


  <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
       m.innerHTML=resultats;

       database_connection();
       var resultats2=connexion.query('SELECT * FROM utilisateur');
     // Afficher les résultats dans la console
     // console.log(JSON.stringify(resultats));
       console.log(resultats2);   
      
     var m=document.getElementById('liste')
     
   
     var tr=document.getElementById('montr')
     for(let i=0; i<resultats2.length ;i++){
       var montd="<th>'i'<th><td>'+resultats2[i]+'<td><td>'+resultats2[i+1]+'<td><td>'+resultats2[i+2]+'<td><td>'+resultats2[i+3]+'<td><td>'+resultats2[i+4]+'<td><td>'+resultats2[i+5]+'<td><td>'+resultats2[i+6]+'<td><td>'+resultats2[i+7]+'<td><td>'+resultats2[i+8]+'<td>"
       tr.innerHTML=montd; 
     }
     
   }


   var resultats2=new Array()
   for(let i=0; i<resultats3.length; i++){
    resultats2[i]=JSON.stringify(resultats3[i])
   console.log(resultats2[i])
   }



    var resultats3=JSON.stringify(resultats4);
    console.log(resultats3)
    var tr=document.getElementById('montr')
    for(let i=0; i<resultats3.length ;i++){
      console.log(resultats3[i]);
      for(let i=0; i<resultats3.length ;i++){
      var montd="<th>'i'</th><td>'"+resultats2[i]+"'</td><td>'"+resultats2[i+1]+"'</td><td>'"+resultats2[i+2]+"'</td><td>'"+resultats2[i+3]+"'</td><td>'"+resultats2[i+4]+"'</td><td>'"+resultats2[i+5]+"'</td><td>'"+resultats2[i+6]+"'</td><td>'"+resultats2[i+7]+"'</td><td>'"+resultats2[i+8]+"'</td>"
      tr.innerHTML=montd; 
      }
    }})
    <tr><th scope="col">#</th><th scope="col">Id_utilisateur</th><th scope="col">Matricule</th><th scope="col">Nom</th><th scope="col">Prenom</th><th scope="col">Poste</th><th scope="col">Site</th><th scope="col">Date_enregistrement</th><th scope="col">Date_modification</th><th scope="col">id_departement </th></tr>

  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <div class="dropdown">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>










<span class="input-group-text"><img src="C:\Users\Manuella Nzooh\Documents\projet\front_end\Images\26.png" class="img-fluid" alt="Responsive image" width="100%" height="100%"></span>






<span class="input-group-text"><img src="C:\Users\Manuella Nzooh\Documents\projet\front_end\Images\26.png" class="img-fluid" alt="Responsive image" width="100%" height="100%"></span>