const HomeController = {
  Index: (req, res) => {
    if (req.query.name) {
      res.json(`${req.query.name}, welcome to Village Doctor Backend!`)
    } else {
      res.json('Welcome to Village Doctor Backend');
    }
    
  },

}

module.exports = HomeController;