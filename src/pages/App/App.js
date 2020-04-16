import React, {
  Component
} from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import userService from "../../utils/userService";
import itemService from "../../utils/itemService";
// import tokenService from "../../utils/tokenService";
import "./App.css";

/*------ Components ------*/
import Header from "../../components/Header/Header";

/*------ Pages ------*/
// import SignupPage from '../SignupPage/SignupPage';
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import InventoryPage from "../InventoryPage/InventoryPage";
import AddItemsPage from "../AddItemsPage/AddItemsPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      user: userService.getUser(),
    };
  }

  /*------ Handlers ------*/
  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser(),
    });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null,
    });
  };

  handleAddItem = async (newItemData) => {
    console.log(`NEW ITEM DATA: ${newItemData}`);
    const newItem = await itemService.create(newItemData);
    this.setState(
      (state) => ({
        items: [...state.items, newItem],
      }),
      () => this.props.history.push("/inventory")
    );
  };

  handleDeleteItem = async (id) => {
    console.log('CLICKED');
    await itemService.delete(id);
    this.setState(
      (state) => ({
        items: state.items.filter((i) => i._id !== id),
      }),
      () => this.props.history.push("/inventory")
    );
  };

  /*------ Lifecycle Methods ------*/

  async componentDidMount() {
    const items = await itemService.getAll();
    // const items = await res.json();
    this.setState({
      items: items
    });
  }

  render() {
    return ( <
      div className = "App" >
      <
      Header user = {
        this.state.user
      }
      handleLogout = {
        this.handleLogout
      }
      /> <
      Switch >
      <
      Route exact path = "/login"
      render = {
        ({
          history
        }) => ( <
          LoginPage history = {
            history
          }
          handleSignupOrLogin = {
            this.handleSignupOrLogin
          }
          />
        )
      }
      /> <
      Route exact path = "/"
      render = {
        ({
          history
        }) => < HomePage history = {
          history
        }
        />} / >
        <
        Route
        exact
        path = "/inventory"
        render = {
          ({
            history
          }) => ( <
            InventoryPage history = {
              history
            }
            items = {
              this.state.items
            }
            handleDeleteItem = {
              this.handleDeleteItem
            }
            />
          )
        }
        /> <
        Route
        exact
        path = "/new-item"
        render = {
          ({
            history
          }) => ( <
            AddItemsPage history = {
              history
            }
            handleAddItem = {
              this.handleAddItem
            }
            />
          )
        }
        /> < /
        Switch > <
        /div>
      );
    }
  }

  export default App;