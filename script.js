const passwordBox = document.getElementById("password");
                    const lenght = 12;

                    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
                    const Number = "0123456789";
                    const Symbol = "@#$%^&*()_+~}{[]></-=";

                    const allChars = upperCase + lowerCase + Number + Symbol;

                    function createPassword() {
                              let password = " ";
                              password += upperCase[Math.floor(Math.random() * upperCase.length)];
                              password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
                              password += Number[Math.floor(Math.random() * Number.length)];
                              password += Symbol[Math.floor(Math.random() * Symbol.length)];

                              while (lenght > password.length) {

                                        password += allChars[Math.floor(Math.random() * allChars.length)];
                              }
                              passwordBox.value = password;
                              
                    }
                    function copyPassword(){
                              passwordBox.select();
                              document.execCommand("copy");
                    }