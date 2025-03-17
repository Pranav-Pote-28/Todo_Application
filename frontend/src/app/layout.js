import "./globals.css"


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body> 
        <header>
          <h1>TODO App</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2025 TODO App</p>
        </footer>
      </body>
    </html>
  );
}
