window.addEventListener('load', () => {
    var app = new Vue({
        el: '#app',
        name: 'FirstApp',
        data: {
            activeUser: {},
            users: [
                {
                    id: 1,
                    name: 'John',
                    role: 'Admin',
                }, {
                    id: 2,
                    name: 'Alie',
                    role: 'Normal',
                }, {
                    id: 3,
                    name: 'Joseph',
                    role: 'Admin',
                }, {
                    id: 4,
                    name: 'Marry',
                    role: 'Editor',
                }
            ]
        },
        methods: {

            deleteUser(index) {

                if(this.users[index] == null){
                    alert(`No Such User Found Index: ${index}`);
                    return false;
                }

                this.users.splice(index, 1);
            },
            editUser(index) {
                document.getElementById('newUserBtn').click();
                if(this.users[index]==null){
                    alert(`No Such User Found Index: ${index}`);
                    return false;
                }

                this.activeUser = this.users[index];
                console.log(this.activeUser);

            },
            newUser() {
                if(this.activeUser.id != undefined && this.activeUser.name != undefined && this.activeUser.role != undefined){
                    let user = this.users.find(x =>x.id == this.activeUser.id);
                    this.activeUser = user;
                } else{
                    if (this.activeUser.role === '') {
                        this.activeUser.role = 'normal';
                    }
                    this.users.push({
                        id: this.users.length + 1,
                        name: this.activeUser.name,
                        role: this.activeUser.role
                    });

                    console.log(this.users);
                }

                this.activeUser = {};

                document.getElementById('close').click();
            }
        }
    })
})
