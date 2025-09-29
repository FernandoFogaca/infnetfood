import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "../screens/HomeScreen";

test("Mostra categorias na tela inicial", () => {
  const { getByText } = render(
    <HomeScreen navigation={{ navigate: jest.fn() }} />
  );

  expect(getByText("Lanches")).toBeTruthy();
  expect(getByText("Bebidas")).toBeTruthy();
  expect(getByText("Sobremesas")).toBeTruthy();
  expect(getByText("Combos")).toBeTruthy();
});
