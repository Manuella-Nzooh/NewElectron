  const mysql = require('mysql');
  const connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'inventaire'
  });
  
  function database_connection(){


// Créer une connexion à la base de données

// Ouvrir la connexion à la base de données
connexion.connect((erreur) => {
  if (erreur) {
    console.error('La connexion à la base de données a échoué :', erreur);
    return;
  }
  console.log('La connexion à la base de données est établie !');
});
  }

function verification(){
  var name=document.getElementById('floatingInputGroup1').value;
  var pass=document.getElementById('floatingInputGroup2').value;
  console.log(name);
  console.log(pass);
  database_connection();
  var quer = 'SELECT * FROM utilisateur WHERE Nom="'+name+'" AND password="'+pass+'"';
  console.log(quer);
  connexion.query(quer, (erreur, resultats) => {
    if (erreur) {
      console.error('La requête a échoué :', erreur);
      return;
    }
    // Afficher les résultats dans la console
    console.log(resultats);
    if (resultats.length>0){

      window.location.href = "acceuil.html";
    }
    else{
      console.log("acces refuse");
    }
  });
  
  // Fermer la connexion à la base de données
  connexion.end();
}
function extractArrayElement(objectToExtract){
  var arrayContainer=[];
  for (let i = 0; i < objectToExtract.length; i++) {
  arrayContainer.push(objectToExtract[i].value);
  }
  return arrayContainer;
  }
function new_user(){
var user=document.getElementById('Nuser').elements;
var table_user=extractArrayElement(user);

for (let i=0;i<table_user.length;i++){
  table_user[i]=table_user[i].toString();
}

table_user[5]=parseInt(table_user[5]);
console.log(table_user);
  // database_connection();
   var query="INSERT INTO utilisateur ( Matricule, Nom, Prenom, Poste, Site, Id_departement, Password) VALUES('"+table_user[0]+"','"+table_user[1]+"','"+table_user[2]+"','"+table_user[3]+"','"+table_user[4]+"','"+table_user[5]+"','"+table_user[6]+"')";
  console.log(query);
connexion.query(query,(error, results)=>{
    if(error){
      console.log(error);
      return;
    }
else{
  console.log('existe')
}
  }) 
}
function new_departement(){
  var departement=document.getElementById('Ndepartement').elements;
var table_departement=extractArrayElement(departement);

for (let i=0;i<table_departement.length;i++){
  table_departement[i]=table_departement[i].toString();
}
console.log(table_departement);
  // database_connection();
   var query="INSERT INTO departement (nom_departement) VALUES('"+table_departement[0]+"')";
  console.log(query);
connexion.query(query,(error, results)=>{
    if(error){
      console.log(error);
      return;
    }
else{
  console.log('existe')
}
  }) 
}
function new_laptop(){
  var laptop=document.getElementById('new_pc').elements;
  var table_laptop=extractArrayElement(laptop);
  
  for (let i=0;i<table_laptop.length;i++){
    table_laptop[i]=table_laptop[i].toString();
  }
  
  table_laptop[0]=parseInt(table_laptop[0]);
  console.log(table_laptop);
    // database_connection();
     var query="INSERT INTO ordinateur ( id_utilisateur, Num_serie, Nom_ordinateur, Type_ordinateur, Marque,Model, taille_DD, Type_DD, Taille_RAM, Type_processeur, Taille_ecran, Date_achat, Date_allocation) VALUES('"+table_laptop[0]+"','"+table_laptop[1]+"','"+table_laptop[2]+"','"+table_laptop[3]+"','"+table_laptop[4]+"','"+table_laptop[5]+"','"+table_laptop[6]+"','"+table_laptop[7]+"','"+table_laptop[8]+"','"+table_laptop[9]+"','"+table_laptop[10]+"','"+table_laptop[11]+"','"+table_laptop[12]+"')";
    console.log(query);
  connexion.query(query,(error, results)=>{
      if(error){
        console.log(error);
        return;
      }
  else{
    console.log('existe')
  }
    }) 
  }
  function new_printer(){
    var printer=document.getElementById('new_print').elements;
    var table_printer=extractArrayElement(printer);
    
    for (let i=0;i<table_printer.length;i++){
      table_printer[i]=table_printer[i].toString();
    }
    console.log(table_printer);
      // database_connection();
       var query="INSERT INTO imprimante (Num_serie, Model, Marque, Bureau, site) VALUES('"+table_printer[0]+"','"+table_printer[1]+"','"+table_printer[2]+"','"+table_printer[3]+"','"+table_printer[4]+"')";
      console.log(query);
    connexion.query(query,(error, results)=>{
        if(error){
          console.log(error);
          return;
        }
    else{
      console.log('existe')
    }
      }) 
    }
    function liste_utilisateur(){
      // database_connection();
      connexion.query('SELECT * FROM utilisateur', (erreur, resultats2) => {
    if (erreur) {
      console.error('La requête a échoué :', erreur);
      return;
    }
      // Afficher les résultats dans la console
    // console.log(JSON.stringify(resultats)); 
      var tr=document.getElementById('mybody')
      
      tr.innerHTML = "";
        for(let i=0; i<resultats2.length ;i++){
      var test = new Date(resultats2[i].Date_enregistrement);
      test = test.toLocaleDateString();
      
      var montd="<tr><th>"+i+"</th><td>'"+resultats2[i].Id_utilisateur +"'</td><td>'"+resultats2[i].Matricule+"'</td><td>'"+resultats2[i].Nom+"'</td><td>'"+resultats2[i].Prenom+"'</td><td>'"+resultats2[i].Poste+"'</td><td>'"+resultats2[i].Site+"'</td><td>"+test+"</td><td>'"+resultats2[i].id_departement +"'</td></tr>"
        tr.innerHTML+=montd; 
        }
 var th=document.getElementById('myhead')
    var month="<tr><th>#</th><th>Id_utilisateur</th><th>Matricule</th><th>Nom</th><th>Prenom</th><th>Poste</th><th>Site</th><th>Date_enregistrement</th><th>id_departement</th></tr>"
   th.innerHTML=month;
  })
  }
    
    
  function liste_departement(){
    // database_connection();
    connexion.query('SELECT * FROM departement', (erreur, resultats2) => {
  if (erreur) {
    console.error('La requête a échoué :', erreur);
    return;
  }
  // Afficher les résultats dans la console
  var tr=document.getElementById('mybody')
  tr.innerHTML = "";
  

  for(let i=0; i<resultats2.length ;i++){
  var montd="<tr><th>"+i+"</th><td>'"+resultats2[i].id_departement +"'</td><td>'"+resultats2[i].nom_departement+"'</td></tr>"
  tr.innerHTML+=montd; 
  }

var th=document.getElementById('myhead')
var month="<tr><th>#</th><th>Id_departement</th><th>nom_departement</th></tr>"
th.innerHTML=month;
})
}

//  function display (i,info){
//  let entite = "<tr><th>"+i+"</th>"
//   info = Object.values(info);
//  for(let i = 0; i< info.length ; i++){
//    entite += "<td>"+info[i]+"</td>";
//  }
//   entite += "</tr>";
  
//    console.log(info)
//   return entite;
// }

function liste_ordinateur(){
  // database_connection();
  connexion.query('SELECT * FROM ordinateur', (erreur, resultats2) => {
if (erreur) {
  console.error('La requête a échoué :', erreur);
  return;
}
// Afficher les résultats dans la console
// console.log(JSON.stringify(resultats));
var tr=document.getElementById('mybody')
tr.innerHTML = "";
for(let i=0; i<resultats2.length ;i++){
  var test = new Date(resultats2[i].Date_enregistrement);
  test = test.toLocaleDateString();
}
for(let i=0; i<resultats2.length ;i++){
  // display(i,resultats2[i]);
var montd="<tr><th>"+i+"</th><td>"+resultats2[i].id_ordinateur +"</td><td>"+resultats2[i].Id_utilisateur+"</td><td>"+resultats2[i].Num_serie+"</td><td>"+resultats2[i].Nom_ordinateur+"</td><td>"+resultats2[i].Type_ordinateur+"</td><td>"+resultats2[i].Marque+"</td><td>"+resultats2[i].Model+"</td><td>"+resultats2[i].taille_DD+"</td><td>"+resultats2[i].Type_DD+"</td><td>"+resultats2[i].Taille_RAM+"</td><td>"+resultats2[i].	Type_processeur+"</td><td>"+resultats2[i].Taille_ecran+"</td><td>"+resultats2[i].Date_achat +"</td><td>"+resultats2[i].Date_allocation+"</td><td>"+test+"</td><td><button type='button'class='btn btn-primary' style='background-color: #62035b; color: white;'><span class='input-group-text'><img src='C:\Users\Manuella Nzooh\Documents\projet\front_end\Images\mm.png' class='img-fluid' alt='Responsive image' width='100%' height='100%'></span></button></td></tr>"

// montd = display(i,resultats2[i])
tr.innerHTML+=montd; 
}
var th=document.getElementById('myhead')
var month="<tr><th>#</th><th>Id_ordinateur</th><th>id_utilisateur</th><th>Numero de serie</th><th>nom de l'ordinateur</th><th>type d'ordinateur</th><th>Marque</th><th>Model</th><th>Taille du disque dur</th><th>Type de disque dur</th><th>Taille de la RAM</th><th>Type de processeur</th><th>Taille de l'ecran</th><th>Date d'achat</th><th>date d'allocation</th><th>date d'enregistrement</th></tr>"
th.innerHTML=month;
})
}

function liste_imprimante(){
  // database_connection();
  connexion.query('SELECT * FROM imprimante', (erreur, resultats2) => {
if (erreur) {
  console.error('La requête a échoué :', erreur);
  return;
}
// Afficher les résultats dans la console
// console.log(JSON.stringify(resultats));
var tr=document.getElementById('mybody')
tr.innerHTML = "";
for(let i=0; i<resultats2.length ;i++){
  var test = new Date(resultats2[i].Date_enregistrement);
  test = test.toLocaleDateString();
}
for(let i=0; i<resultats2.length ;i++){
var montd="<tr><th>"+i+"</th><td>"+resultats2[i].id_imprimante +"</td><td>"+resultats2[i].Num_serie+"</td><td>"+resultats2[i].Model+"</td><td>"+resultats2[i].Marque+"</td><td>"+resultats2[i].Bureau+"</td><td>"+resultats2[i].Site+"</td><td>"+test+"</td></tr>"
tr.innerHTML+=montd; 
}
var th=document.getElementById('myhead')
var month="<tr><th>#</th><th>id_imprimante</th><th>Num_serie</th><th>Model</th><th>Marque</th><th>Bureau</th><th>Site</th><th>Date_enregistrement</th></tr>"
th.innerHTML=month;
})
}

function delete_laptop(){
  var old_laptop=document.getElementById('oldpc').elements;
  var table_user=extractArrayElement(old_laptop);
  
  for (let i=0;i<table_user.length;i++){
    table_user[i]=table_user[i].toString();
  }
  
  table_user[5]=parseInt(table_user[5]);
  console.log(table_user);
    // database_connection();
     var query="INSERT INTO utilisateur ( Matricule, Nom, Prenom, Poste, Site, Id_departement, Password) VALUES('"+table_user[0]+"','"+table_user[1]+"','"+table_user[2]+"','"+table_user[3]+"','"+table_user[4]+"','"+table_user[5]+"','"+table_user[6]+"')";
    console.log(query);
  connexion.query(query,(error, results)=>{
      if(error){
        console.log(error);
        return;
      }
  else{
    console.log('existe')
  }
    }) 
  }