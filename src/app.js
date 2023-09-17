/* const Header = function() {
   return <h1>Hello React</h1>
} */

class TodoApp extends React.Component{
   render(){

      const app = {
         title: "Todo Application",
         description : "Lorem ipsum dolor sit",
         items : ['item1','item2']
      }
      return (
         <div>
            <Header title = {app.title} description = {app.description}/>
            <TodoList items ={app.items}/>
            <Action />
         </div>
      );
   }
}
class TodoList extends React.Component{
   render() {
      return (
         <ul>
            {
                  this.props.items.map((item,index) => 
                     <TodoItem key = {index} item ={item}/>
                   )
            }
         </ul>
      );
   }
}
class TodoItem extends React.Component {
   render ()  {
      return (
       <li > {this.props.item}</li>
      );
   }
}
/*  const Header = function (props){
  
      return (
         <div>
            <h1 >{props.title}</h1>
            <div>Lorem, ipsum dolor.12</div>
         </div>
        
      );
}  */

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1 >{this.props.title}</h1>
            <div>{this.props.description}</div>
         </div>
      
      );
   }
} 

class Action extends React.Component{
   render() {
      return (
         <div>
             <p>
          <button > Clear Items</button>
            </p>
            <form >
               <input type="text" name="txtItem"/>
               <button type="submit"> Add Item</button>
            </form>
         </div>
      );

   }
}

ReactDOM.render(<TodoApp/>, document.getElementById('root'));