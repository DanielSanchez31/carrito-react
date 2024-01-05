/* eslint-disable react/prop-types */
import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

export function Footer() {
  const { filters } = useFilters();
  return (
    <footer className="footer">
      <h4>
        Prueba técnica de React - <span>@daniby95</span>
      </h4>
      <h5>ShoppingCart con useContext & useReducer</h5>
      {JSON.stringify(filters, null, 2)}
    </footer>
  );
}
