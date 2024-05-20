import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <bod>
        <header>
          <Navigation />
          <Logo />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </bod>
    </html>
  );
}
