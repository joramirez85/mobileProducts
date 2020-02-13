/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

// import SignIn screen
import SignIn from "../screens/signin/SignInA";

// import HomeNavigator
import HomeNavigator from "./HomeNavigatorA";

// import Product screen
import Product from "../screens/product/ProductA";

// import Categories screen
import Category from "../screens/categories/CategoryA";
import Categories from "../screens/categories/CategoriesA";

// import Search results screen
import SearchResults from "../screens/search/SearchResultsA";

// import Checkout screen
import Checkout from "../screens/checkout/CheckoutA";

// import Payment screen
import PaymentMethod from "../screens/payment/PaymentMethodA";

// import EditProfile screen
import EditProfile from "../screens/profile/EditProfileA";

// import DeliveryAddress screen
import DeliveryAddress from "../screens/address/DeliveryAddressA";

// import AddAddress screen
import AddAddress from "../screens/address/AddAddressA";

// import EditAddress screen
import EditAddress from "../screens/address/EditAddressA";

// import Notifications screen
import Notifications from "../screens/notifications/NotificationsA";

// import Orders screen
import Orders from "../screens/orders/OrdersA";

// import AboutUs screen
import AboutUs from "../screens/about/AboutUsA";

// import colors
import Colors from "../theme/colors";

// create MainNavigator
const MainNavigatorA = createStackNavigator(
  {
    // SignIn screen
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: "Iniciar Sesion",
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },

    // HomeNavigator
    HomeNavigator: {
      screen: HomeNavigator,
      navigationOptions: { header: null }
    },

    // Categories screen
    Categories: {
      screen: Categories,
      navigationOptions: {
        title: "Categorias",
        headerStyle: {
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
    Category: {
      screen: Category,
      navigationOptions: {
        title: "Pizza",
        headerStyle: {
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // Product screen
    Product: {
      screen: Product,
      navigationOptions: { header: null }
    },

    // Search results screen
    SearchResults: {
      screen: SearchResults,
      navigationOptions: {
        title: "Search Results",
        headerStyle: {
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // Checkout screen
    Checkout: {
      screen: Checkout,
      navigationOptions: {
        title: "Procesar Venta",
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },

    // DeliveryAddress screen
    DeliveryAddress: {
      screen: DeliveryAddress,
      navigationOptions: {
        title: "Delivery Address",
        headerStyle: {
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // AddAddress screen
    AddAddress: {
      screen: AddAddress,
      navigationOptions: {
        title: "Add New Address",
        headerStyle: {
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // EditAddress screen
    EditAddress: {
      screen: EditAddress,
      navigationOptions: {
        title: "Edit Address",
        headerStyle: {
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // PaymentMethod screen
    PaymentMethod: {
      screen: PaymentMethod,
      navigationOptions: {
        title: "Payment Method",
        headerStyle: {
          elevation: 1,
          shadowOpacity: 0
        }
      }
    }
  },
  {
    headerMode: "screen", // 'float' | 'none' | 'screen'
    headerLayoutPreset: "center",
    headerBackTitleVisible: "false",
    defaultNavigationOptions: {
      headerTintColor: Colors.black,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default createAppContainer(MainNavigatorA);
