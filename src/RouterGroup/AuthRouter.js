/*export const isAuthenticated = (user) => {

    var authEncoded = btoa('softplan:123')
    console.log(authEncoded)
    var authUser = btoa(user.login+':'+user.password)
    console.log(authUser)

    if(authUser === authEncoded){
        localStorage.setItem('usuario', authUser)
        return true;
    }else{
        return false;
    }

};*/

export var usuario = '';

export function isAuthenticated(){

    //console.log(user.login+':'+user.password)

    var authEncoded = btoa('softplan:123')
    console.log('authEncoded = '+authEncoded)

    //
    usuario=authEncoded
    return true;
    //

    /*var authUser = btoa(user.login+':'+user.password)
    console.log('authUser = '+authUser)

    if(authUser === authEncoded){
        usuario = authUser;
        //alert('Logado com sucesso!')
        return true;
    }else{
        return false;
    }*/

}