import React, { useState, useContext } from "react";
import { IThemeContext } from "./types"

const ThemeContext = React.createContext<IThemeContext>({theme: 'light'});



export default ThemeContext ;