const $result = document.querySelector("#result");


 fetch("https://dummyjson.com/users")
      



         .then(response => response.json())
         .then(data => renderProducts(data))

         const renderProducts = (data) => {
           try{
            data.users.forEach(Users => {
                const $div = document.createElement("div");
                $div.className = "card"; 
                $div.innerHTML =   `
                <img src="${Users.image}" />
                <h3>"${Users.company.title}"</h3>
                <p>"${Users.lastName}"  </p>
                <p>"${Users.firstName}"  </p>
                <p>" ${Users.phone}"  </p>
                <p>" ${Users.address.address}"  </p>
                <p>"${Users.email}"  </p>
                <button data-Users-id"${Users.id}" class="btn">Delete</button>  
    `
                 
              $result.appendChild($div)
            })
        }
        catch(error){
            alert(error)
        }   
         }
         const handleUsersActions = (e) => {
            console.log(e.target.classList.contains("delete"));
              const id = e.target.dataset.UsersId
            const userAgree = confirm ("Are you sure to delete this User")
            if(userAgree){
                
 fetch(`https://dummyjson.com/users/${id}`,{method:"DELETE"})
 .then(res=> res.json())
 .then(data => console.log(data))

            }
         }

$result.addEventListener("click", handleUsersActions)

      