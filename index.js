
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAl1ia2SCONrzCwaMru9pTYT_MkuYw6t08",
  authDomain: "signup-dd96b.firebaseapp.com",
  projectId: "signup-dd96b",
  storageBucket: "signup-dd96b.appspot.com",
  messagingSenderId: "77269160744",
  appId: "1:77269160744:web:3a0aff55d4d82fcd7bb61d",
  measurementId: "G-V05ZWRJ28Z"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const querySnapshot = await getDocs(collection(db, "todo"));
let post = document.getElementById('POST')


let butn = document.getElementById('show')



butn.addEventListener('click', async () => {

  let name = document.getElementById('title').value;
  let fname = document.getElementById('desc').value;
  // window.location.href = "/login.html"

  try {
    const docRef = await addDoc(collection(db, "todo"), {
      nam: name,
      last: fname,

    });
    alert("done")
    console.log("Document written with ID: ", docRef.id);

  }
  catch (e) {
    console.error("Error adding document: ", e);
  }
  
  
  window.location.reload();
})


querySnapshot.forEach((doc) => {
  post.innerHTML += `<li> ${doc.data().name} ${doc.data().last} <button onclick="update('${doc.id}')"> update </button> <button onclick="del('${doc.id}')">Delete </button> </li>`;
  console.log(doc.data(),"data");
  console.log(doc.id , "id");
  console.log(doc , "doc");
});


async function update(id){

 const updatelist = doc(db, "todo", id);
    var updatename = prompt( 'enter ')
 
    // Set the "capital" field of the city 'DC'
    await updateDoc(updatelist, {
      name:updatename,
      last:updatename
    }).then(()=>{

      window.location.reload();
    })

  }

  const del = async(id) =>{
    await deleteDoc(doc(db, "todo", id))
    
    .then(() => {
     window.location.reload();
 });

}
window.del=del;
window.update=update;

