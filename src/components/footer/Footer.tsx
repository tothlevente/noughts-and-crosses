import { ExternalLinkIcon } from "lucide-react";
import { Button } from "../ui/button";

import packageJson from "../../../package.json";

export const Footer = () => {
  return (
    <div className="footer">
      <p>This website is open source and licensed under MIT.</p>
      <p>This website is does not use cookies and collect data about you.</p>
      <p>For more information please visit the project repository.</p>
      <p>Thank you for your visiting and intrest! 👍️</p>
      <p>Created by Levente in 2024 | v{packageJson.version}</p>
      <div className="footer-link">
        <Button asChild>
          <a
            href="https://github.com/tothlevente/noughts-and-crosses"
            target="_blank"
            style={{ marginRight: "8px" }}
          >
            <ExternalLinkIcon />
            Repository
          </a>
        </Button>
        <Button asChild>
          <a
            href="https://github.com/tothlevente/noughts-and-crosses/blob/main/LICENSE"
            target="_blank"
            style={{ marginRight: "8px" }}
          >
            <ExternalLinkIcon />
            License
          </a>
        </Button>
      </div>
      <a
        href="https://www.netlify.com"
        target="_blank"
        style={{ paddingBottom: "10px" }}
      >
        <img
          src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg"
          alt="Deploys by Netlify"
        />
      </a>
    </div>
  );
};
