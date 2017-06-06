module.exports = function(app){


  let candies = [
    {id: 1, name: "Chewing Gum" , color: "Red"   },
    {id: 2, name: "Pez"         , color: "Green" },
    {id: 3, name: "Marshmallow" , color: "Pink"  },
    {id: 4, name: "Candy Stick" , color: "Blue"  }
  ];

   /*  Create candy and print it*/

  app.post('/candy', (req, res) => {
     req.body.id = parseInt(req.body.id);
     candies.push(req.body);
     res.json(req.body);
  });

  /* Fetch all candies */

  app.get('/candy', (req, res) => {
      res.json(candies);
  });

  /* Get candy by id */

  app.get('/candy/:id', (req, res) => {
    const id = req.params.id;
    let newCandy = candies.filter((candy) => {
      return candy.id == id;
    });
    res.json(newCandy);
  });

  /* Update candy properties */

  app.put('/candy/:id', (req, res) => {
    const id = req.params.id;
    let newCandy = candies.filter((candy) => {
      return candy.id == id;
    });
    newCandy[0].name = req.body.name;
    newCandy[0].color = req.body.color;
    res.json(newCandy[0]);
  });

  /* Delete candy */

  app.delete('/candy/:id', (req, res) => {
    const id = req.params.id;
    candies = candies.filter((candy) => {
      return candy.id != id;
    });
    res.json({message: "deleted"});
  });

}

/**/
