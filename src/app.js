
    //JSX
     var root = document.getElementById('root');

      var app = {
         title: "Todo Application",
         description : "Lorem ipsum dolor sit",
         items : ['item1']
      }

   function onFormSubmit(event){
         event.preventDefault(); // form submit olmasın diye. sayfa yenilenmesin 
         var item = event.target.elements.txtItem.value;
         console.log(item);
         if (item){
            app.items.push(item)
            event.target.elements.txtItem.value = '';
            render();
         }
         console.log("form submitted");
     }
   function clearItems() {
      app.items = [];
      render();
   }
      function render() {
            var numbers = [1,2,3,4,5];
        
            var template = (<div> 
               <h1 id="header">{app.title}</h1>
               <div>{app.description}</div>
                  {
                     <ul>
                     
                        {
                           app.items.map((item,index) => {
                            return <li key = {index}>{item}</li>
                           })
                       }
                        </ul>
                     }
               <p>
                  <button onClick={clearItems}> Clear Items</button>
               </p>
               <p>{app.items.length}</p>
               <form onSubmit ={onFormSubmit}>
               <input type="text" name="txtItem"/>
               <button type="submit"> Add Item</button>
               </form>
         </div>);
       ReactDOM.render(template , root);
         
      }

      render();

       