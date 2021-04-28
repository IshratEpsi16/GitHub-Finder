class UI {
    constructor() {
        this.profile = document.querySelector('#profile')
        this.repository = document.querySelector('#repository')
    }

    show_user_profile(user) {
        this.clearAlert()

        this.profile.innerHTML = `
        <div class='container'>
            <nav class="navbar navbar-dark bg-success mt-2">
            <h2 class='text-white p-2 '>User Profile</h2>
            </nav>
        <div class="card card-body mb-3">
        <div class='row'>
        <div class='col-md-3'>   
        <img src="${user.avatar_url}" class='mb-4'height=240px weight=240px>
        <button class="bg-success">
            <a href="${user.html_url}" class='text-white p-1 btn-block' style='text-decoration:none;' target='_blank'>
                View User Profile
            </a>
            
        </button>
        </div>
        <div class='col-md-9'>
        <button class="bg-secondary text-white p-1"  target='_blank'>
            Followers : ${user.followers}
   
        </button>
       


        <button class="bg-success text-white p-1" target='_blank'>
            Following : ${user.following}
        </button>
        <button class="bg-danger text-white p-1" target='_blank'>
            
                Public Gists : ${user.public_gists}
            
        </button>
        <button class="bg-warning text-dark p-1" target='_blank'>
        
                Repository : ${user.public_repos}
            
            
        
        </button><br><br>
        <ul class='list-group'>
            <li class='list-group-item'>Company : ${user.company}</li>
            <li class='list-group-item'>Blog : <a href="${user.blog}" style="text-decoration:none;">Blog link</a></li>
            <li class='list-group-item'>Location : ${user.location}</li>
            <li class='list-group-item'>Member Since : ${user.created_at}</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        `                               //since we didn't write any code in html's profile div.we will write all the codes here

    }
    //newly added
    show_user_repo(data) {
        //console.log(data);
        var show_repo = '';

        for (var i = 0; i < data.length; i++) {
            show_repo += `
            <div class='container'>
                <div class="card card-body mb-3">
                    <div class='row'>
                        <div class='col-md-3'>
                            <h3 class='text-success'>Repository : ${i + 1}</h3> 
                            <h6 class='text-secondary'>Repository name : ${data[i].name}</h6>
                            <h6 class='text-secondary'>Repository Link : <a href="${data[i].html_url}" target='_blank'>Click Here</a></h6>
         
                         </div>
                    </div>
                </div>
            </div>
            `;
        }
        document.getElementById('repository').insertAdjacentHTML('afterbegin', show_repo);
    }

    clear_profile() {
        this.profile.innerHTML = ''

    }


    showAlert(message, className) {
        this.clearAlert()
        this.clear_profile()
        let div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))
        let container = document.querySelector('.container')
        let search = document.querySelector('.search')
        container.insertBefore(div, search)


    }
    clearAlert() {
        let currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove() // if we do not use this function "user not found" will continuously show whenever we click on submit
        }
    }
}