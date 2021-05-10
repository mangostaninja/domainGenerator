 let pronoun = ['the', 'our', 'your'];
  let adjective = ['big', 'best', 'little'];
  let object = ['domain','racoon', 'monitor'];

     function concatente (pro, adj, obj){

        for (count1 = 0; count1 < pronoun.length; count1++) {
            for (count2 = 0; count2 < adjective.length; count2++){
                for (count3 = 0; count3 < pronoun.length; count3++){
                    console.log(pronoun[count1] + adjective[count2] + object[count3] + '.com');
                }
            }
        }

    };
    concatente(pronoun, adjective, object);