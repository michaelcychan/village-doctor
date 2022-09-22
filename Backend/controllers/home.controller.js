const HomeController = {
  Index: (req, res) => {
    console.log(req)
    console.log(`query: ${req.query}`)
    console.log(`body: ${req.body}`)
    console.log(`params: ${req.params}`)
    if (req.query.name) {
      res.json(`${req.query.name}, welcome to Village Doctor Backend!`)
    } else {
      res.json('Welcome to Village Doctor Backend');
    }
    
  },

}

module.exports = HomeController;