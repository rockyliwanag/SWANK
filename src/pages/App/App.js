import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import userService from "../../utils/userService";
import  * as itemsAPI from "../../services/items-api";
import "./App.css";

/*------ Components ------*/
import Header from "../../components/Header/Header";

/*------ Pages ------*/
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import InventoryPage from "../InventoryPage/InventoryPage";
import ItemDetailPage from "../ItemDetailPage/ItemDetailPage";
import AddItemsPage from "../AddItemsPage/AddItemsPage";
import EditItemPage from "../EditItemPage/EditItemPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      user: userService.getUser(),
    };
  }

  
  /*------ Handlers ------*/
  handleSignupOrLogin = async () => {
    this.setState({
      user: userService.getUser(),
      items: await itemsAPI.getAll(),
    });
  };
  
  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null,
    });
  };
  
  handleAddItem = async (newItemData) => {
    // const dummyItem = {
      //   name: newItemData.name,
      //   value: newItemData.value,
      //   itemType: newItemData.itemType,
      //   description: newItemData.description,
      // };
      // const userId = this.state.user._id;
    const newItem = await itemsAPI.create(newItemData);
      console.log(`NEW ITEM: ${newItem}`);
      this.setState(
        (state) => ({
          items: [...state.items, newItem],
        }),
        () => this.props.history.push("/inventory")
      );
  };
      
  handleUpdateItem = async (updatedItemData) => {
    const updatedItem = await itemsAPI.update(updatedItemData);
    const newItemsArray = this.state.items.map((i) =>
    i._id === updatedItem._id ? updatedItem : i
    );
    this.setState(
      {
        items: newItemsArray,
      },
      () => this.props.history.push("/inventory")
    );
  };
        
  handleDeleteItem = async (id) => {
    await itemsAPI.deleteOne(id);
    this.setState(
      (state) => ({
        items: state.items.filter((i) => i._id !== id),
      }),
      () => this.props.history.push("/inventory")
    );
  };
          
  /*------ Lifecycle Methods ------*/

  async componentDidMount() {
    console.log("Component Mounted")
    const items = await itemsAPI.getAll();
    const users = await userService.getUser();
    this.setState({items, user: users})
    console.log("USERS-APP: ", users, "ITEMS-APP: ", items)
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={({ history }) => (
              <HomePage 
                history={history}
                user={this.state.user}
                items={this.state.items} 
                handleLogout={this.handleLogout} />
            )}
          />
          <Route
            exact
            path="/inventory"
            render={({ history }) => (
              <InventoryPage
                history={history}
                user={this.state.user}
                items={this.state.items}
                handleDeleteItem={this.handleDeleteItem}
              />
            )}
          />
          <Route
            exact
            path="/new-item"
            render={() => <AddItemsPage handleAddItem={this.handleAddItem} />}
          />
          <Route
            exact
            path="/edit-item"
            render={({ location }) => (
              <EditItemPage
                location={location}
                handleUpdateItem={this.handleUpdateItem}
              />
            )}
          />
          <Route
            exact
            path="/details"
            render={({ location }) => <ItemDetailPage location={location} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
