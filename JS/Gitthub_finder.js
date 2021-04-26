//linking html with JS
let search_user_box = document.querySelector('#searchUser')
let search_btn = document.querySelector('#searchBtn')
let ui_object = new UI() //UI class object

//addEventListener
search_btn.addEventListener('click', callApi)
// define function
function callApi(e) {
    //console.log("connected")
    let user_input = search_user_box.value  //https://api.github.com/users/repos/${user_input}
    //console.log(user_input)
    if (user_input != "") {
        fetch(`https://api.github.com/users/${user_input}`) //here the user name will come,which user want to find
            .then(result => result.json()) //json format will come
            .then(data => {
                //console.log(data)
                if (data.message == 'Not Found') {
                    //show alert
                    //alert("User Not Found")
                    ui_object.showAlert("User not found", "alert bg-danger text-white")
                }
                else {
                    //show user profile
                    ui_object.show_user_profile(data) //here all the info will pass from show_user_profile function
                    ui_object.show_user_repo(data)
                }

            })

    } else {
        //alert("Insert User Name Please")
        ui_object.clear_profile()

    }



}


