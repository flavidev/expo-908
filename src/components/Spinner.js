import { Image } from "@aws-amplify/ui-react";

import spinningLogo from "../assets/images/eae-logo.png";

export const Spinner = () => (
  <div className="loader">
    <Image className="spinner" src={spinningLogo} alt="Loading..." />
  </div>
);
