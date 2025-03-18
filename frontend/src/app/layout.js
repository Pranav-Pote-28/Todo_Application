import "./styles.css"

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body> 
        
        <header>
          <img src="/images/Todo_logo.png" alt="todo logo" />
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2025 TODO App</p>
        </footer>

      </body>
    </html>
  );
}
