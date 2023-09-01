
    //JSX
     var root = document.getElementById('root');
        var template = <div> 
                             <h1 id="header">Hellooo</h1>
                             <div>Lorem ipsum dolor sit.</div>
                             <ul>
                                <li>Lorem, ipsum. </li>
                                <li>Lorem, ipsum. </li>
                                <li>Lorem, ipsum. </li>
                             </ul>
                       </div>;
/////////////////////////////////////////////////////////////////////////////               
       var product = {
         name : "Samsung S12",
         price : 13000,
         description: "Açıklama",
         color:['red','blue']
       }
      //  function formatPrice(p){
      //    return p.price + ' TL';
      //  }
      function getDescription(p){
         if(p.description)
         {
            return <p id="product-desc">{p.description}</p>;
         }
      }
       
       var template2 = (
       <div id ="product-detail">
            <h2 id ="product-name">name: {product.name ? product.name : 'no name'} </h2>
            <p id ="product-fiyat">price:{product.price == 0 ? 'free' : product.price}</p>
            {getDescription(product)}
            <p>{product.color.length>0 ?  'there are color options': 'no options'}</p>
            
       </div>
       );
/////////////////////////////////////////////////////////////////////////////
      var number = 0; 
      function addOne(){
         console.log("Add one");
         number++;
         renderApp();
      }
      var  minusOne = () => {
         console.log("Minus one");
         number--;
         renderApp();
      }

     //ReactDOM
     function renderApp()
     {
      var template3 = (
         <div>
            <h1> Number: {number}</h1>
             <button id ="btnPluseOne" className ="btnRed" onClick={addOne}> +1 </button>
             <button id ="btnMinusOne" className ="btnBlue" onClick={minusOne}> -1 </button>
         </div>
         

       );
       ReactDOM.render(template3 , root);
     }

renderApp();