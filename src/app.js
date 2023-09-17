/* const Header = function() {
   return <h1>Hello React</h1>
} */

class TodoApp extends React.Component{
   render(){
      return (
         <div>
            <Header />
            <TodoList />
            <Action />
         </div>
      );
   }
}
class TodoList extends React.Component{
   render() {
      return (
         <ul>
            <TodoItem/>
            
         </ul>
      );
   }
}
class TodoItem extends React.Component {
   render ()  {
      return (
       <li>Todo item</li>
      );
   }
}
class Header extends React.Component{
   render(){
      return (
         <div>
            <h1 >Todo Application</h1>
            <div>Lorem, ipsum dolor.12</div>
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