/**
 * Created by MSaud on 1/19/2016.
 */

describe('sign in with page',function(){
    it ('login with input', function(){
        var loginPage=new loginPage();

        loginPage.get();

        loginPage.setEmailId("net.8001@hotmail.com");
        loginPage.setPassword("net80001");
        loginPage.submitPage();

    });

})
