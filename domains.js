 let pronoun = ['the', 'our', 'your'];
  let adjective = ['big', 'best', 'little'];
  let object = ['domain','racoon', 'monitor'];

     function concatenate (pro, adj, obj){

        for (count1 = 0; count1 < pro.length; count1++) {
            for (count2 = 0; count2 < adj.length; count2++){
                for (count3 = 0; count3 < pro.length; count3++){
                    console.log(pro[count1] + adj[count2] + obj[count3] + '.com');
                }
            }
        }

    };
    concatenate(pronoun, adjective, object);