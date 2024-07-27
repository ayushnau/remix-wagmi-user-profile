import { useEffect, useState } from "react";
// import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./config";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/global.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  const [queryClient, setQueryClient] = useState<QueryClient | null>(null);

  useEffect(() => {
    // Initialize QueryClient on the client-side
    const client = new QueryClient();
    setQueryClient(client);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <WagmiProvider config={config}>
          {queryClient ? (
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          ) : (
            <div>Loading...</div>
          )}
        </WagmiProvider>
        <Scripts />
      </body>
    </html>
  );
}
