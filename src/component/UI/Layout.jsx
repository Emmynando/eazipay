import NavBar from "./NavBar";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
}
