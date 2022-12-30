import React, { useState, useContext } from "react";

const getThemeStyle = (theme: string) => {
    return { backgroundColor: theme === "dark" ? "#2F2E30" : "#FFFAFC", 
                       color: theme === "dark" ? "#FFFAFC" : "#2F2E30", 
                      padding: 100, border: "10px solid purple"}
  }

export default getThemeStyle;