import { Auth0Provider } from "@auth0/auth0-react";
import React, { PropsWithChildren } from "react";

interface Auth0ProviderWithConfigProps {
  children: React.ReactNode;
}

export const Auth0ProviderWithConfig = ({
  children,
}: PropsWithChildren<Auth0ProviderWithConfigProps>): JSX.Element | null => {
  const domain = "huddle-app.us.auth0.com";
  const clientId = "0VUfsrazfo80zUxOoXHrh2bHCGL5TRD1";
  const redirectUri = "http://localhost:5173/library";

  if (!(domain && clientId && redirectUri)) {
    console.log("It's null");
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      {children}
    </Auth0Provider>
  );
};
