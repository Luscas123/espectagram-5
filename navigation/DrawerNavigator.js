import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Stack from "./stackNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={Stack} />
            <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;