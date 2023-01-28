import "./error.css";

function NotFound() {
  return (
    <div>
      <div class="error">404</div>
      <br />
      <br />
      <span class="info">This page not found</span>
      <img
        src="https://static-00.iconduck.com/assets.00/robot-404-error-errors-illustration-512x427-j192mt0z.png"
        className="static"
      />
    </div>
  );
}

export default NotFound;
