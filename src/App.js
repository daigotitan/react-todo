"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App() {
    var _a = (0, react_1.useState)(''), inputValue = _a[0], setInputValue = _a[1];
    var _b = (0, react_1.useState)([]), todos = _b[0], setTodos = _b[1];
    var handleChange = function (e) {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    };
    var handleSubmit = function (e) {
        // リロード回避
        e.preventDefault();
        // 新しいtodo作成
        var newTodo = {
            inputValue: inputValue,
            id: todos.length,
            checked: false
        };
        setTodos(__spreadArray([newTodo], todos, true));
        setInputValue('');
    };
    var handleEdit = function (id, inputValue) {
        var newTodos = todos.map(function (todo) {
            if (todo.id === id) {
                todo.inputValue = inputValue;
            }
            return todo;
        });
        setTodos(newTodos);
    };
    var handleChecked = function (id, checked) {
        var newTodos = todos.map(function (todo) {
            if (todo.id === id) {
                todo.checked = !checked;
            }
            return todo;
        });
        setTodos(newTodos);
    };
    var handleDelete = function (id) {
        var newTodos = todos.filter(function (todo) { return todo.id !== id; });
        setTodos(newTodos);
    };
    return (<div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={function (e) { return handleSubmit(e); }}>
          <input type="text" onChange={function (e) { return handleChange(e); }} className="inputText"/>
          <input type="submit" value="作成" className="submitButton"/>
        </form>
        <ul className='todoList'>
          {todos.map(function (todo) { return (<li key={todo.id}>
              <input type="text" onChange={function (e) { return handleEdit(todo.id, e.target.value); }} className="inputText" value={todo.inputValue} disabled={todo.checked}/>
              <input type="checkbox" onChange={function () { return handleChecked(todo.id, todo.checked); }}/>
              <button onClick={function () { return handleDelete(todo.id); }}>消</button>
            </li>); })}
        </ul>
      </div>
    </div>);
}
exports["default"] = App;
