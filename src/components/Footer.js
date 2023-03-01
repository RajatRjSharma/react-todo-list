import React from "react";

export default function Footer() {
  const footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light py-1" style={footerStyle}>
      <p className="text-center py-1 my-0">Copyright &copy; MyTodoslist.com</p>
    </footer>
  );
}
