import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#home" className="wordmark" aria-label="Sami, back to home">
          sami<span className="wordmark-dot">.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Md Shamsur Rahman Sami
          <span>Made with care. Built with purpose.</span>
        </p>
        <a href="#home" className="back-to-top">
          Back to top{" "}
          <span>
            <ArrowUp size={17} />
          </span>
        </a>
      </div>
    </footer>
  );
}
