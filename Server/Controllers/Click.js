import Click from '../Modals/Click.js'

// POST request to increment the click count

export const updateClick=async(req,res)=>{
    try {
      let click = await Click.findOne();
      if (!click) {
        click = new Click({ count: 0 });
      }
      click.count++;
      await click.save();
      res.send({ clickCount: click.count });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  }
  
  
  // GET request to retrieve the click count

  export const getClick=async(req,res)=>{
    try {
      const click = await Click.findOne();
      res.send({ clickCount: click ? click.count : 0 });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  };
  