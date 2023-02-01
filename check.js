function Login()
{
    window.location.href='index2.html';
}

function CheckAccount()
    {
        var id = 'maansi@gmail.com';
        var password = '123456789';
        var n = (document.getElementById('name').value);
        var p = (document.getElementById('password').value);

        if(id==n){
            if(password==p){
              Login();
            }
            else{
                alert('Please enter Correct Password');
            }
        }
        else{
            alert('Please enter Correct values');
        }

    }



